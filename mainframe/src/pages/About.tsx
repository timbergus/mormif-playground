import { lazy, Suspense } from 'react'

import ErrorBoundary from '../components/ErrorBoundary'
import Loader from '../components/Loader'

const AboutContents = lazy(() => import('About/About'))

const About = () => (
  <Suspense fallback={<Loader />}>
    <ErrorBoundary message="Cannot load the About page!">
      <AboutContents />
    </ErrorBoundary>
  </Suspense>
)

export default About
