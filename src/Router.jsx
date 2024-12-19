import { Routes, Route } from 'react-router'
import { lazy, Suspense } from 'react'

// Lazy load components
const Home = lazy(() => import('./pages/Home'))
const Components = lazy(() => import('./pages/Components'))
const Layout = lazy(() => import('./pages/Layout'))
const Extra = lazy(() => import('./pages/Extra'))

export const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/layouts" element={<Layout />} />
        <Route path="/extra" element={<Extra />} />
      </Routes>
    </Suspense>
  )
}

