export const VadsProcessList = () => {
  return (
    <div className="grid-row">
      <div className="grid-col-12">
        <h3 className="vads-u-font-weight--bold">Process List</h3>
        <va-process-list>
          <va-process-list-item header="Check to be sure you can request a Board Appeal">
            <p>
              You can request a Board Appeal up to 1 year from the date on your decision notice. (Exception: if you have a contested claim, you have only 60 days from the date on your decision notice to request a Board Appeal.)
            </p>
            <p>
              You can request a Board Appeal for these claim decisions:
            </p>
            <ul>
              <li>
                An initial claim
              </li>
              <li>
                A Supplemental Claim
              </li>
              <li>
                A Higher-Level Review
              </li>
            </ul>
            <p>
              <strong>
                Note:{' '}
              </strong>
              You can’t request a Board Appeal if you’ve already requested one for this same claim.
            </p>
          </va-process-list-item>
          <va-process-list-item header="Gather your information">
            <p>
              Here’s what you’ll need to apply:
            </p>
            <ul>
              <li>
                Your mailing address
              </li>
              <li>
                The VA decision date for each issue you’d like us to review (this is the date on the decision notice you got in the mail)
              </li>
            </ul>
          </va-process-list-item>
          <va-process-list-item header="Start your request">
            <p>
              We’ll take you through each step of the process. It should take about 30 minutes.
            </p>
          </va-process-list-item>
        </va-process-list>
      </div>
    </div>
  )
}