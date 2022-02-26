// import { lazy } from 'react'

import ErrorBoundary from '../components/ErrorBoundary'

// const NotFoundContents = lazy(() => import('NotFound/NotFound'))

const NotFound = () => (
  <ErrorBoundary message="Cannot load the NotFound page!">
    <div>NotFound</div>
  </ErrorBoundary>
)

export default NotFound
