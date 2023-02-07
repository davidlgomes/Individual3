import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>Erro 404. Está pág. não existe!</h1>,
    children:[
      {
        path: "/",
        element: <h1>HOME</h1>
      },
      {
        path: "/",
        element: <h1>HOME</h1>
      },
      {
        path: "/cardapio",
        element: <h2>devair</h2>
      },
      {
        path: "/pedido",
        element: <h1>PEDIDOS</h1>
      },
      {
        path: "/carrinho",
        element: <h1>CARRINHO</h1>
      },
      {
        path: "/nos",
        element: <h1>NÓS</h1>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
