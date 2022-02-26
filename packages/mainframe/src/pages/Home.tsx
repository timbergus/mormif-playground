import { lazy, Suspense } from 'react'

import ErrorBoundary from '../components/ErrorBoundary'
import Loader from '../components/Loader'

const HomeContents = lazy(() => import('Home/Home'))

const Home = () => (
  <Suspense fallback={<Loader />}>
    <ErrorBoundary message="Cannot load the Home page!">
      <HomeContents />
    </ErrorBoundary>
  </Suspense>
)

export default Home
