export const VadsAlert = () => {
  return (
    <div className="grid-row">
      <div className="grid-col-12">
        <h3 className="vads-u-font-weight--bold">Alert</h3>
        <va-alert>
          <h4 slot="headline">Alert Title</h4>
          <p>Alert Content</p>
        </va-alert>
      </div>
    </div>
  )
}