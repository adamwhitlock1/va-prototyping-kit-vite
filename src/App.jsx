import { NavBar } from './components/Navbar'
import { Router } from './Router';

const navLinks = [
  { id: 'components', url: '/components', text: 'Components' },
  { id: 'layout', url: '/layouts', text: 'Layout' },
  { id: 'extra', url: '/extra', text: 'Extra' },
];

function App() {
  return (
    <div>
      <div className="full-width">
        <NavBar links={navLinks} />
      </div>
      <div className="grid-container vads-u-padding-y--2">
        <Router />
      </div>
    </div>
  )
}

export default App
