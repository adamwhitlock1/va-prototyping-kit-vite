import { Routes, Route } from 'react-router'
import { Home } from './pages/Home'
import { Components } from './pages/Components'
import { Layout } from './pages/Layout'
import { Extra } from './pages/Extra'

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/components" element={<Components />} />
      <Route path="/layouts" element={<Layout />} />
      <Route path="/extra" element={<Extra />} />
    </Routes>
  )
}

