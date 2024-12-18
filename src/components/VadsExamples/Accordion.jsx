export const VadsAccordion = () => {
  return (
    <div className="grid-row">
      <div className="grid-col-12">
        <h3 className="vads-u-font-weight--bold">Accordion</h3>
        <va-accordion>
          <va-accordion-item header="Accordion Item 1">
            Accordion Item 1 - Content
          </va-accordion-item>
          <va-accordion-item header="Accordion Item 2">
            Accordion Item 2 - Content
          </va-accordion-item>
        </va-accordion>
      </div>
    </div>
  )
}