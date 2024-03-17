import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Admin } from './components/Admin';
import { Login } from './components/Login';
import { Auth } from './components/Auth';
import { Protected } from './components/Protected';
import { Nomatch } from './components/Nomatch';
import { Home } from './components/Home';
import { Signup } from './components/Signup';
import './index.css'
import { Navbar } from './components/Navbar';
import { Product } from './components/Product';
import { Profile } from './components/Profile';
import { Aboutus } from './Aboutus';
function App() {
  return (
    <div className="App">
          <Auth>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/*' element={<Nomatch/>}/>        
        <Route path='/products' element={<Product/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Protected><Admin/></Protected>}/>
        <Route path='/profile' element={<Protected><Profile/></Protected>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </Auth>

    
    </div>
  );
}

export default App;
