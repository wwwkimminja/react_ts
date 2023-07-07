import {createBrowserRouter} from 'react-router-dom'
import Root from '../Root'
import About from './About';
import Home from './Home';
import NotFound from './NotFound';
import User from './users/User';
import Followers from './users/Followers';

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
      },
      {
        path:"users/:userId",
        element:<User/>,
        children: [
          {
            path: "followers",
            element: <Followers />,
          },
        ],

      }
    ],
    errorElement:<NotFound/>,
  }
])

export default router;


