import { createBrowserRouter } from 'react-router-dom'
import Main from '../MainLayout/Main'
import Home from '../Home/Home'
import Product from '../Product/Product'
import Account from '../Account/Account'
import Category from '../Category/Category'
import Wishlist from '../Wishlist/Wishlist'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/Product',
        element: <Product></Product>
      },
      {
        path: '/Account',
        element: <Account></Account>
      },
      {
        path:'/Category',
        element:<Category></Category>
      },
      {
        path:'/Wishlist',
        element:<Wishlist></Wishlist>
      }
    ]
  }
])

export default router
