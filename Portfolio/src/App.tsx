import './App.scss'
import { Main } from './compnents/organism/main/main'
import { Header } from './compnents/partials/header/header'
import { Footer } from './compnents/partials/footer/footer'
import { AppRouter } from './router/approuter'

function App() {
  return (
    <>
    <Header />
    <hr />
    <Main>
      <AppRouter />
    </Main>
    <hr />
    <Footer />
    </>
  )
}

export default App
