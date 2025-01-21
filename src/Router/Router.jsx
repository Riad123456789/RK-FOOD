import { createBrowserRouter } from 'react-router-dom'

import Home from '../Home/Home'
import Product from '../Product/Product'
import Account from '../Account/Account'
import Category from '../Category/Category'
import Wishlist from '../Wishlist/Wishlist'
import Layout from '../MainLayout/Layout'
import Login from '../Account/Login'
import Aboutus from '../About/Aboutus'
import Sourcing from '../Home/PremiumPage/Sourcing'
import Production from '../Home/PremiumPage/Production'
import Packaging from '../Home/PremiumPage/Packaging'
import Service from '../Home/PremiumPage/Service'
import ProductDetails from '../Home/ProductDetails'
import Contactus from '../../dist/Contactus/Contactus'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/Sourcing',
        element:<Sourcing></Sourcing>
      },
      {
        path: '/Production',
        element:<Production></Production>
      },
      {
        path: '/Packaging',
        element: <Packaging></Packaging>
      },
      {
        path: '/Service',
        element: <Service></Service>
      },
      {
        path: '/Product',
        element: <Product></Product>
      },
      {
        path: '/ProductDetails/:id',
        element:<ProductDetails></ProductDetails>
      },
      {
        path: '/Account',
        element: <Account></Account>
      },
      {
        path: '/Login',
        element: <Login></Login>
      },
      {
        path: '/Category',
        element: <Category></Category>
      },
      {
        path: '/Wishlist',
        element: <Wishlist></Wishlist>
      },
      {
        path: '/Aboutus',
        element: <Aboutus></Aboutus>
      },
      {
        path: '/Contactus',
        element: <Contactus></Contactus>
      }
    ]
  }
])

export default router
