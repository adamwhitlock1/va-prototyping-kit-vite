import { useEffect } from 'react';

export const useComponentStyles = (componentSelector, styles) => {
  useEffect(() => {
    const observer = new MutationObserver(_mutations => {
      const component = document.querySelector(componentSelector);
      if (component && component.shadowRoot) {
        // Add styles to shadow DOM with a style tag
        // maybe this could be done with an inline style attribute
        // but this is a more reliable way to ensure the styles are applied
        // and that a class could be targeted
        const style = document.createElement('style');
        style.textContent = styles;

        component.shadowRoot.appendChild(style);

        // this keeps the observer from running again
        // but also having it in the useEffect hook cleanup is a good idea
        observer.disconnect();
      }
    });

    // could probably use a better selector
    // to more surgically observer a smaller subset of the DOM
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};

