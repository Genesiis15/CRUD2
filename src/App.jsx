import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from './components/molecules'
import { ThemeProvider } from 'styled-components'
import { ProductsProvider } from './context/productsContext'
import theme from './theme'
function App() {
  return (
    <ProductsProvider>

      <ThemeProvider theme={theme}>
        <Navbar />
        <main style={{ marginTop: '80px', marginBottom: '100px', padding: '0px 8%', minHeight: '600px' }}>
          <Outlet />
        </main>
        <Footer />
      </ThemeProvider>
    </ProductsProvider>

  )
}

export default App
