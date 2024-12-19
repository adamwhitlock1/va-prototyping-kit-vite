import '@department-of-veterans-affairs/formation/dist/formation.min.css'


const Layout = () => {

  return (
    <div>

      <h1 className='vads-u-margin-y--1'>Layout Utilities</h1>

      <section>
        <h2 className='vads-u-margin-y--2'>Layout via USWDS utilities</h2>

        <div className="grid-row vads-u-margin-y--2">
          <va-link external href="https://designsystem.digital.gov/utilities/layout-grid/" text="View USWDS Layout Grid Documentation" />
        </div>

        <div className="grid-row">
          <va-link external href="https://designsystem.digital.gov/utilities/flex/" text="View USWDS Flexbox Documentation" />
        </div>

        <h3>USWDS Layout Grid Example</h3>

        <div className="grid-container vads-u-border--1px vads-u-border-color--gray-light vads-u-padding--2">
          <code>grid-container</code>
          <div className="grid-row vads-u-margin-y--1 vads-u-background-color--gray-lighter vads-u-padding--2">
            <code>grid-row</code>
          </div>

          <div className="grid-row">
            <div className="grid-col-3 vads-u-background-color--gray-lighter vads-u-border--1px   vads-u-padding--2">
              <code>grid-col-3</code>
            </div>
            <div className="grid-col-9 vads-u-background-color--gray-lighter vads-u-border--1px  vads-u-padding--2">
              <code>grid-col-9</code>
            </div>
          </div>
        </div>
      </section>


      <section>
        <h2>Layout via VADS Formation (legacy)</h2>

        <p><strong>Note:</strong> This layout system requires the Formation package css to be imported at the application level.</p>

        <p>
          <code>import &#39;@department-of-veterans-affairs/formation/dist/formation.min.css&#39;</code>
        </p>

        <div className="vads-l-row">
          <va-link external href="https://design.va.gov/foundation/layout/flexbox-grid" text="View VADS Flexbox Grid Documentation" />
        </div>

        <h3>Formation Layout Example</h3>

        <div className='vads-l-container vads-u-border--1px vads-u-border-color--gray-light vads-u-padding--2 vads-u-margin-top--2'>
          <code>vads-l-container</code>
          <div className="vads-l-row vads-u-margin-y--1 vads-u-background-color--gray-lighter vads-u-padding--2">
            <code>vads-l-row</code>
          </div>

          <div className="vads-l-row vads-u-margin-y--1">
            <div className="vads-l-col--6 vads-u-padding--2 vads-u-background-color--gray-lighter vads-u-border--1px"><code>vads-l-col--6</code></div>
            <div className="vads-l-col--6 vads-u-padding--2 vads-u-background-color--gray-lighter vads-u-border--1px"><code>vads-l-col--6</code></div>
          </div>
        </div>
      </section>


    </div >

  )
};

export default Layout;