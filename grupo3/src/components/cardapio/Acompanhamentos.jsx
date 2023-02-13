import Card from 'react-bootstrap/Card';
import './Pratos.css'
import Batata from "../../assets/Batata.png"
import Tekitos from "../../assets/Tekitos.png"
import Cebola from "../../assets/Cebola.png"
function Acompanhamentos({nome,preco}){

    return(
        <>
        
                        <Card style={{width: '24rem', height:'20.5rem'}} className='rosa'>
                            <Card.Img variant="top" src={Cebola} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>{nome}</Card.Title>
                                <Card.Text className='textoCentro'>
                                    {/* {descricao} */}
                                    <br />
                                    <h5>{preco}</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    
        </>
    )

}
export default Acompanhamentos;
