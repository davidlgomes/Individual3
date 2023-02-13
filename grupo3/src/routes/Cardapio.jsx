import Pratos from "../components/cardapio/Pratos"
import Fundo from "../components/contato/Fundo"
import styles from './Cardapio.module.css'
function Cardapio(){
  return(
    <div className={styles.fundo}>
    <Pratos/>
    <Fundo/>
        </div>

  )
}
export default Cardapio;