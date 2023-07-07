import {createBrowserRouter} from 'react-router-dom'
import Root from '../Root'
import About from './About';
import Home from './Home';
import NotFound from './NotFound';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        path:"",
        element:<Home/>,

      },
      
      {
        path:"about",
        element:<About/>
      }
    ],
    errorElement:<NotFound/>,
  }
])

export default router;


