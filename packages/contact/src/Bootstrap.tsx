import { StrictMode } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { RecoilRoot } from 'recoil'

import App from './components/App'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

render(
  <StrictMode>
    <RecoilRoot>
      <Container>
        <App />
      </Container>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root')
)
