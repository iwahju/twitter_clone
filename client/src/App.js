import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';


const Layout = () =>{
  return (
    <div>
    <h1>Navbar</h1>
    <Outlet></Outlet>
    </div>
  );
};

const router = createBrowserRouter([{
  path : "/",
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <Home/>,
    }
  ]
}])
function App() {
  return (




  );
}

export default App;
