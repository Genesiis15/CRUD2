import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from './components/molecules'
import { ThemeProvider } from 'styled-components'
import { ProductsProvider } from './context/productsContext'
import theme from './theme'
import { Grid } from './styles'
function App() {
  return (
    <ProductsProvider>

      <ThemeProvider theme={theme}>
        <Navbar />
        <Grid>
          <Outlet />
        </Grid>
        <Footer />
      </ThemeProvider>
    </ProductsProvider>

  )
}

export default App
