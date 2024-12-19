import { useCustomShadowDOMStyles } from "../../hooks/useCustomShadowDOMStyles";

// Usage in your component
export const CheckboxGroupCustomStyles = () => {
  const stylesGroup = `
    .usa-legend {
      font-weight: var(--font-weight-bold);
      font-family: var(--font-family-serif);
    }


  `;

  const stylesCheckbox = `
    .usa-checkbox__label-description {
      white-space: pre-line;
    }
  `;

  // styling the checkbox group legend. A direct child of the checkbox group.
  useCustomShadowDOMStyles({ selectors: 'va-checkbox-group', styles: stylesGroup });

  // styling the checkbox label description. A direct child of the checkbox, but not a direct child of the checkbox group.
  useCustomShadowDOMStyles({ selectors: ['va-checkbox-group', 'va-checkbox'], styles: stylesCheckbox });

  return (
    <div>
      <>
        <va-checkbox-group
          error={null}
          hint={null}
          label="Select any historical figure"
        >
          <va-checkbox
            checkbox-description={`Quantity: 5 \n Last ordered on: 2022-05-26 with line break`}
            id="soujourner-truth"
            label="Soujourner Truth"
            name="group1"
            tile
            value="1"
          />
          <va-checkbox
            id="frederick-douglass"
            label="Frederick Douglass"
            name="group1"
            tile
            value="2"
          />
          <va-checkbox
            id="booker-t-washington"
            label="Booker T. Washington"
            name="group1"
            tile
            value="3"
          />
          <va-checkbox
            id="george-washington-carver"
            label="George Washington Carver"
            name="group1"
            tile
            value="4"
          />
        </va-checkbox-group>
      </>
    </div>
  );
};
