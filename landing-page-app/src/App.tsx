import { HashRouter as Router, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Error from './pages/error/Error';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Dashboard
  },
  {
    path: '*',
    Component: Error
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
