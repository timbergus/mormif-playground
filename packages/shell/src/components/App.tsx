import styled from 'styled-components'
import { Link, Outlet } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 2rem;
  border-bottom: solid 1px;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const App = () => (
  <Container>
    <Navigation>
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
      <Link to="/about">About</Link>
    </Navigation>
    <Body>
      <Outlet />
    </Body>
  </Container>
)

export default App
