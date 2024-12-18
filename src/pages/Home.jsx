export const Home = () => {
  return (
    <>
      <div className="grid-row">
        <div className="grid-col-12">

          <h1>VA Prototyping Kit</h1>
          <p className="vads-u-font-size--h3 vads-u-font-weight--bold">A barebones rapid prototyping kit for VA frontend development.</p>
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-col-12">
          <ul className="vads-u-font-size--md">
            <li className="vads-u-display--flex vads-u-align-items--center">
              <va-icon icon="check_circle" size="3" class="vads-u-margin-right--1 vads-u-color--success" /> <a className="vads-u-padding-right--0p5" href="https://react.dev" target="_blank">React,</a> <a className="vads-u-padding-right--0p5" href="https://reactrouter.com" target="_blank">React Router,</a> <a className="vads-u-padding-right--0p5" href="https://vitejs.dev" target="_blank">Vite</a>
            </li>
            <li className="vads-u-display--flex vads-u-align-items--center">
              <va-icon icon="check_circle" size="3" class="vads-u-margin-right--1 vads-u-color--success" /> <a href="https://designsystem.digital.gov" target="_blank">USWDS 3.0</a>
            </li>
            <li className="vads-u-display--flex vads-u-align-items--center">
              <va-icon icon="check_circle" size="3" class="vads-u-margin-right--1 vads-u-color--success" /> <a href="https://design.va.gov/components/" target="_blank">VADS Component Library</a>
            </li>
            <li className="vads-u-display--flex vads-u-align-items--center">
              <va-icon icon="check_circle" size="3" class="vads-u-margin-right--1 vads-u-color--success" /><a href="https://sass-lang.com" target="_blank">Sass</a>
            </li>
            <li className="vads-u-display--flex vads-u-align-items--center">
              <va-icon icon="check_circle" size="3" class="vads-u-margin-right--1 vads-u-color--success" /> <a href="https://designsystem.digital.gov/utilities/layout-grid/" target="_blank">Formation (opt in)</a>
            </li>
          </ul>
        </div>
      </div >

      <h2>Getting Started</h2>
      <p>This kit is built with Vite and React. To get started, clone the repository and run <code>yarn install</code>. Then run <code>yarn dev</code> to start the development server.</p>
      <p>You can even use this repository in a CodeSandbox environment to get started quickly. <va-link external href="https://codesandbox.io/p/github/adamwhitlock1/va-prototyping-kit-vite/main?import=true" text="Fork this repository in CodeSandbox" /></p>

      <h3>Adding a new page</h3>
      <p>To add a new page, create a new file in the <code>/src/pages</code> directory. Then add a new route to the <code>/src/RouteTree.jsx</code> file.</p>

      <h3>Adding a new component</h3>
      <p>To add a new component, create a new file in the <code>/src/components</code> directory. Then import your component into your page where needed.</p>

      <h3>Who is this kit for?</h3>
      <p>This kit is for VA frontend developers who are looking to quickly prototype new features or pages. It is not meant to be a full-fledged application, but rather a starting point for new projects or proof of concept ideas.</p>


      <h3>What is this kit not for?</h3>
      <p>This kit is not meant for creating a production ready application. It may contain bugs and may not be up to date with the latest VA design system updates.</p>



    </>
  )
}