import { useEffect, useMemo } from 'react';

// Note: this hook is not recommended for production use and is generally pretty cursed.
// It is a quick and dirty way to apply styles to web components that are added to the DOM.
// I mostly wanted to see if I 'could' do it, not necessarily that I 'should'

const DEFAULT_OBSERVER_OPTIONS = {
  childList: true,
  subtree: true,
};

// helper for applying styles to a shadow root
const applyStylesToShadowRoot = (shadowRoot, styles) => {
  if (!shadowRoot || shadowRoot.querySelector('style[data-custom-styles]')) {
    return false;
  }
  const style = document.createElement('style');
  style.textContent = styles;
  style.setAttribute('data-custom-styles', 'true');
  shadowRoot.appendChild(style);
  return true;
};

/**
 * A hook for styling web components with shadow DOM
 * @param {Object} config - Configuration object
 * @param {string|string[]} config.selectors - Single selector or array of selectors to target
 * @param {string} config.styles - CSS styles to inject
 * @param {boolean} config.nested - Whether to look for nested shadow DOMs
 * @param {boolean} config.checkSlotted - Whether to check for slotted elements
 * @param {Object} config.observerOptions - MutationObserver options
 * @param {string} config.rootElement - Root element to observe changes on (defaults to document.body)
 * @param {Function} config.onStylesApplied - Callback when styles are applied
 */
export const useCustomShadowDOMStyles = ({
  selectors,
  styles,
  nested = false,
  checkSlotted = false,
  observerOptions = DEFAULT_OBSERVER_OPTIONS,
  rootElement = 'body',
  onStylesApplied,
}) => {

  const observerOptionsMemo = useMemo(() => {
    return observerOptions;
  }, [observerOptions]);

  useEffect(() => {
    // Normalize selectors to array
    const targetSelectors = Array.isArray(selectors) ? selectors : [selectors];
    const root = document.querySelector(rootElement);

    if (!root) {
      console.warn(`Root element "${rootElement}" not found`);
      return;
    }



    // to process a component to apply styles
    const processComponent = (component) => {
      if (!component) return false;

      let stylesApplied = false;

      // styles on the component's shadow DOM
      if (component.shadowRoot) {
        stylesApplied = applyStylesToShadowRoot(component.shadowRoot, styles);
      }

      // handling nested shadow DOMs
      if (nested && component.shadowRoot) {
        targetSelectors.forEach(selector => {
          const nestedComponents = component.shadowRoot.querySelectorAll(selector);
          nestedComponents.forEach(nestedComponent => {
            if (nestedComponent.shadowRoot) {
              stylesApplied = applyStylesToShadowRoot(nestedComponent.shadowRoot, styles) || stylesApplied;
            }
          });
        });
      }

      // handling slotted elements
      if (checkSlotted) {
        targetSelectors.forEach(selector => {
          const slottedComponents = component.querySelectorAll(selector);
          slottedComponents.forEach(slottedComponent => {
            if (slottedComponent.shadowRoot) {
              stylesApplied = applyStylesToShadowRoot(slottedComponent.shadowRoot) || stylesApplied;
            }
          });
        });
      }

      return stylesApplied;
    };

    // observer for changes to the DOM, this is needed to apply styles to new components that are added to the DOM
    // when the component is added to the DOM, the styles are not applied until the next render
    const observer = new MutationObserver((_mutations) => {
      let stylesApplied = false;

      targetSelectors.forEach(selector => {
        // Check direct elements
        const components = root.querySelectorAll(selector);
        components.forEach(component => {
          stylesApplied = processComponent(component) || stylesApplied;
        });
      });

      if (stylesApplied && onStylesApplied) {
        onStylesApplied();
      }
    });

    observer.observe(root, observerOptionsMemo);

    // Immediate check for existing elements
    targetSelectors.forEach(selector => {
      const components = root.querySelectorAll(selector);
      components.forEach(processComponent);
    });

    return () => observer.disconnect();
  }, [selectors, styles, nested, checkSlotted, rootElement, onStylesApplied, observerOptionsMemo]);
};