export const CheckboxGroup = () => {
  return (
    <div>
      <>
        <va-checkbox-group
          error={null}
          hint={null}
          label="Select any historical figure"
        >
          <va-checkbox
            checkbox-description="This is optional text that can be used to describe the label in more detail."
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
