import {createBrowserRouter, useNavigate} from "react-router-dom";
import Insitucional from "../pages/Institucional/Institucional";
import GerenciamentoProdutos from "../pages/GerenciamentoProdutos/GerenciamentoProdutos";

import TelaInicial from "../pages/TelaInicial/TelaInicial";
import TelaPesquisa from "../pages/TelaPesquisa/TelaPesquisa";
import TelaProduto from "../pages/TelaProduto/TelaProduto";
import DadosUsuario from "../pages/DadosUsuario/DadosUsuario"
import CompraProduto from "../pages/CompraProduto/CompraProduto"

import GerenciamentoLoja from "../pages/GerencimentoLojas/GerenciamentoLoja";
import HistoricoVendas from "../pages/HistoricoVendas/HistoricoVendas";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";

import PedidosComerciante from "../pages/PedidosComerciante/PedidosComerciante";
import PedidosUsuario from "../pages/PedidosUsuario/PedidosUsuario";
import MapaInterativo from "../pages/MapaInterativo/MapaInterativo";


  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Insitucional />
    },
    {
      path: "/GerenciamentoProdutos",
      element: <GerenciamentoProdutos />
    },
    {
      path:"/GerenciamentoLojas",
      element:<GerenciamentoLoja/>
    },
    {
      path:"/HistoricoVendas",
      element:<HistoricoVendas/>
    },
    {
      path: "*",
      element: <NotFound />
    },

    {
      path: "/TelaInicial",
      element: <TelaInicial />
    },
    {
      path:"/Login",
      element:<Login/>
    },

    {
      path: "/TelaPesquisa",
      element: <TelaPesquisa />
    },

    {
      path: "/TelaProduto",
      element: <TelaProduto />
    },
    {
      path: "/DadosUsuario",
      element: <DadosUsuario />
    },
    {
      path: "/CompraProduto",
      element: <CompraProduto />
    },
    {
      path: "/comerciante/pedidos",
      element: <PedidosComerciante/>
    },
    {
      path: "/usuario/pedidos",
      element: <PedidosUsuario/>
    },
    {
      path:"/mapa",
      element:<MapaInterativo/>
    }


    
  ]);

  export default router;