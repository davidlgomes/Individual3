import Tabela from "../components/carrinho/Tabela";
import {info} from "../components/pedidos/Formulario"

function Carrinho() {
  console.log(typeof info)
  return (
    <div>
      <Tabela/>
    </div>
  );
}

export default Carrinho;