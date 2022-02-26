import { StrictMode, Suspense } from 'react'
import { render } from 'react-dom'
import { RecoilRoot } from 'recoil'

import App from './components/App'
import Loader from './components/Loader'

render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Suspense>
  </StrictMode>,
  document.getElementById('root')
)
