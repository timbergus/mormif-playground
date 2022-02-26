import { lazy, Suspense } from 'react'

import ErrorBoundary from '../components/ErrorBoundary'
import Loader from '../components/Loader'

const NewsContents = lazy(() => import('News/News'))

const News = () => (
  <Suspense fallback={<Loader />}>
    <ErrorBoundary message="Cannot load the News page!">
      <NewsContents />
    </ErrorBoundary>
  </Suspense>
)

export default News
