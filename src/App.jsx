import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from './components/molecules'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main style={{ marginTop: '50px', marginBottom: '100px' }}>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
