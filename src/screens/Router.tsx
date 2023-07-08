import {createBrowserRouter} from 'react-router-dom'
import Root from '../Root'
import About from './About';
import NotFound from './NotFound';
import User from './users/User';
import Followers from './users/Followers';
import Coin from './Coin';
import Coins from './Coins';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        path:"",
        element:<Coins/>,

      },
      {
        path:":coinId",
        element:<Coin/>,
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


