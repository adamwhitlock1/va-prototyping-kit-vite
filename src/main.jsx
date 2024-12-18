import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@uswds/uswds/css/uswds.min.css'
import '@department-of-veterans-affairs/css-library/dist/stylesheets/core.css'
import '@department-of-veterans-affairs/css-library/dist/stylesheets/utilities.css'
import '@department-of-veterans-affairs/css-library/dist/stylesheets/shame.css'
import '@department-of-veterans-affairs/css-library/dist/stylesheets/base/utils.css'
import "@department-of-veterans-affairs/component-library/dist/main.css";
import { BrowserRouter } from 'react-router'

import {
  applyPolyfills,
  defineCustomElements,
} from "@department-of-veterans-affairs/component-library";

import App from './App.jsx'

applyPolyfills().then(() => {
  defineCustomElements();
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
