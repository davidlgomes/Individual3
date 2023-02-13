import Card from 'react-bootstrap/Card';
import './Pratos.css'
import Acaii from "../../assets/Acaii.png"
import Napolitano from "../../assets/Napolitano.png"
import Salada from "../../assets/Salada.png"

function Sobremesas({nome,sabor,preco}){
    return(
        <>
        
                        <Card style={{width: '24rem', height:'20.5rem'}} className='rosa'>
                            <Card.Img variant="top" src={Salada} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>{nome}</Card.Title>
                                <Card.Text className='textoCentro'>
                                    {sabor}
                                    <br />
                                    <h5>{preco}</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    
        </>
    )
}
export default Sobremesas;