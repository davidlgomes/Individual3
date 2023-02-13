import Card from 'react-bootstrap/Card';
import Xburguer from "../../assets/Xburguer.png"
import Xbacon from "../../assets/Xbacon.png"
import Vegetariano from "../../assets/Vegetariano.png"
import './Pratos.css'
function Hamburguer({nome,ingredientes,preco}){
    return(
        <>
       
                
                    <Card style={{width: '24rem', height:'20.5rem'}} className='rosa'>
                        <Card.Img variant="top" src={Xbacon} className='fotos' />
                        <Card.Body>
                            <Card.Title className='textoCentro'>{nome}</Card.Title>
                            <Card.Text className='textoCentro'>
                                {ingredientes}
                                <br />
                                <h5>R$ {preco}</h5>
                            </Card.Text>
                            {/* <div className='textoCentro'>
                                <Button variant="primary">R$ 15,00</Button>
                            </div> */}
                        </Card.Body>
                    </Card>
                
                </>
    )
}
export default Hamburguer;