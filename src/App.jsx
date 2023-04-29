import './App.css'
import Navbar from './components/Navbar';
import {Outlet} from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar/>
      <main className='flex items-center justify-center'>
        <Outlet/>
      </main>
    </>
    
  )
}

export default App;