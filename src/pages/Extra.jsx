import '../index.scss';

const Extra = () => {
  return (
    <div>
      <h1>Extra</h1>

      <h2>Scss Support</h2>
      <p className="custom-text-color">This is a custom text color that is defined in the <code>index.scss</code> file</p>
      <p>The <code>index.scss</code> file is located in the <code>/src</code> directory. Any file in the <code>/src</code> directory should be able to import custom scss files, but try to use utility classes when possible instead.</p>

      <h2>React Router</h2>
      <p>This page is rendered by React Router</p>
      <va-link external href="https://reactrouter.com/en/main" text="View React Router Documentation" />

      <h2>Workarounds</h2>

      <h3>Fonts</h3>
      <p>Within the css-library package, the font urls are not referenced correctly. For this reason, the patch-package npm package is used to patch the urls to the correct location relative to the css-library package.</p>
      <p>The git diff for the patch is located in the <code>/patches</code> directory. This patch is applied automatically when the <code>yarn install</code> command is run.</p>

      <h3>va-icon</h3>
      <p>The sprite.svg file for the VADS component library was not accessible from the node_modules directory. For this reason, the sprite.svg file is copied to the public directory and then vite will serve it and the va-icon component will work.</p>


    </div>
  )
};

export default Extra;