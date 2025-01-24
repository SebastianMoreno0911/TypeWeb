import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import ForgotPassword from './components/ForgotPass/ForgotPass'
import Inicio from './components/Inicio/Inicio'
{/*comentar asi en ts*/ }


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />   {/*estructura element is fragment*/}
        <Route path="/inicio" element={<Inicio />} /> {/* Nueva ruta */}
        <Route path='/ForgotPass' element={<ForgotPassword />} />
      </Routes>
    </Router>
  )

}

export default App
