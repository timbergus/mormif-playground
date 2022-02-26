import { lazy, Suspense } from 'react'

import ErrorBoundary from '../components/ErrorBoundary'
import Loader from '../components/Loader'

const ContactContents = lazy(() => import('Contact/Contact'))

const Contact = () => (
  <Suspense fallback={<Loader />}>
    <ErrorBoundary message="Cannot load the Contact page!">
      <ContactContents />
    </ErrorBoundary>
  </Suspense>
)

export default Contact
