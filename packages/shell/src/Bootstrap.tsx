import { StrictMode } from 'react'
import { render } from 'react-dom'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import App from './components/App'

// Pages

import Home from './pages/Home'
import News from './pages/News'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

render(
  <StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root')
)
