import { useEffect, useState } from 'react';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import { Outlet } from 'react-router-dom';
import authService from './backend/auth.js'
import { useDispatch } from 'react-redux';
import { setData } from './Store/dataSlice.js';

function App() {

  const [loading, setloader] = useState(true);
  const Dispatch = useDispatch();

  useEffect(() => {
    authService
      .fetchData()
      .then((data) => {
        if (data) {
          Dispatch(setData(data));
        } else {
          console.log("Unable to fetch Data 😢");
        }
      })
      .finally(setloader(false))
  }, [])

  return loading ? null : (

    <div className='w-full flex flex-wrap bg-purple-950 content-between'>
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
