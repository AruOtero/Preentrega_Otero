
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home'

function App() {

  return (
    <>
      <div>
        {/* <Titulo titulo = { 'Casa de comidas' } /> */}
        <NavBar />
        <Home />
        <ItemListContainer greeting='Bienvenidos' />
      </div>
    </>
  )
}

export default App


