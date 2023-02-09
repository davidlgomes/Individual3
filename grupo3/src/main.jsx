import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cardapio from './routes/Cardapio';
import Pedidos from './routes/Pedidos';
import Carrinho from './routes/Carrinho';
import Nos from './routes/Nos';
import Home from './routes/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>Erro 404. Está pág. não existe!</h1>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cardapio",
        element: <Cardapio/>
      },
      {
        path: "/pedido",
        element: <Pedidos/>
      },
      {
        path: "/carrinho",
        element: <Carrinho/>
      },
      {
        path: "/nos",
        element: <Nos/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
