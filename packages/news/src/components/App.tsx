import { lazy } from 'react'
import { useRecoilValue } from 'recoil'

import { asyncNewsAtom } from '../atoms/news.atom'

const ErrorBoundary = lazy(() => import('Shell/ErrorBoundary'))

function App() {
  const news = useRecoilValue(asyncNewsAtom)

  return (
    <>
      {/* @ts-ignore */}
      <ErrorBoundary message="News page is broken!">
        {news.map(({ id, title }) => (
          <div key={id}>{title}</div>
        ))}
      </ErrorBoundary>
    </>
  )
}

export default App
