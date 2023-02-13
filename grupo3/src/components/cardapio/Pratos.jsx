import Card from 'react-bootstrap/Card';
import './Pratos.css'
import Xbacon from "../../assets/Xbacon.png"
import Vegetariano from "../../assets/Vegetariano.png"
import Coca from "../../assets/Coca.png"
import Guarana from "../../assets/Guarana.png"
import Pepsi from "../../assets/Pepsi.png"
import Batata from "../../assets/Batata.png"
import Tekitos from "../../assets/Tekitos.png"
import Cebola from "../../assets/Cebola.png"
import Acaii from "../../assets/Acaii.png"
import Napolitano from "../../assets/Napolitano.png"
import Salada from "../../assets/Salada.png"
import Xburguer from "../../assets/Xburguer.png"


function Pratos() {
    return (
        <div className="centro">
            <br />
            {/* <div>
                <h1 className='titulo'>Cardápio</h1>
            </div> */}
            <br />
            <div>
                {/* <div className='cards'>
                    <h1>A</h1>
                    <h1>B</h1>
                    <h1>C</h1>
                </div> */}
                <h5 className='titulo2'>Hambúrgueres</h5>
                <div className='cards'>
                    <Card style={{width: '24rem', height:'20.5rem'}} className='rosa'>
                        <Card.Img variant="top" src={Xbacon} className='fotos' />
                        <Card.Body>
                            <Card.Title className='textoCentro'>X-Bacon</Card.Title>
                            <Card.Text className='textoCentro'>
                                Pão, carne, queijo e bacon.
                                <br />
                                <h5>R$ 15,00</h5>
                            </Card.Text>
                            {/* <div className='textoCentro'>
                                <Button variant="primary">R$ 15,00</Button>
                            </div> */}
                        </Card.Body>
                    </Card>
                    <Card style={{width: '24rem', height:'20.5rem'}} className='rosa'>
                        <Card.Img variant="top" src={Xburguer} className='fotos' />
                        <Card.Body>
                            <Card.Title className='textoCentro'>X-Burger</Card.Title>
                            <Card.Text className='textoCentro'>
                                Pão, carne, queijo e picles.
                                <br />
                                <h5>R$ 15,00</h5>
                            </Card.Text>
                            {/* <div className='textoCentro'>
                                <Button variant="primary">R$ 15,00</Button>
                            </div> */}
                        </Card.Body>
                    </Card>
                    <Card style={{width: '24rem', height:'20.5rem'}} className='rosa'>
                        <Card.Img variant="top" src={Vegetariano} className='fotos' />
                        <Card.Body>
                            <Card.Title className='textoCentro'>Vegetariano</Card.Title>
                            <Card.Text className='textoCentro'>
                                Pão e uma incrível salada.
                                <br />
                                <h5>R$ 15,00</h5>
                            </Card.Text>
                            {/* <div className='textoCentro'>
                                <Button variant="primary">R$ 15,00</Button>
                            </div> */}
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <h5 className='titulo3'>Bebidas</h5>
                <div>
                    <div className='cards'>
                        <Card style={{width: '24rem', height:'20.5rem'}} className='rosa'>
                            <Card.Img variant="top" src={Coca} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Coca</Card.Title>
                                <Card.Text className='textoCentro'>
                                Refrigerante de cola.
                                    <br />
                                    <h5>R$ 15,00</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                        <Card style={{width: '24rem', height:'20.5rem'}} className='rosa'>
                            <Card.Img variant="top" src={Guarana} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Guaraná</Card.Title>
                                <Card.Text className='textoCentro'>
                                    Refrigerante de guaraná.
                                    <br />
                                    <h5>R$ 15,00</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                        <Card style={{width: '24rem', height:'20.5rem'}} className='rosa'>
                            <Card.Img variant="top" src={Pepsi} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Pepsi</Card.Title>
                                <Card.Text className='textoCentro'>
                                    Refrigerante de cola.
                                    <br />
                                    <h5>R$ 15,00</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <br />
                    <h5 className='titulo3'>Acompanhamentos</h5>
                    <div className='cards'>
                        <Card style={{width: '24rem', height:'20.5rem'}} className='rosa'>
                            <Card.Img variant="top" src={Batata} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Batata Frita</Card.Title>
                                <Card.Text className='textoCentro'>
                                    Batata frita palito.
                                    <br />
                                    <h5>R$ 15,00</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                        <Card style={{width: '24rem', height:'20.5rem'}} className='rosa'>
                            <Card.Img variant="top" src={Tekitos} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Tekitos</Card.Title>
                                <Card.Text className='textoCentro'>
                                Porção com 10 unidades.
                                    <br />
                                    <h5>R$ 15,00</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                        <Card style={{width: '24rem', height:'20.5rem'}} className='rosa'>
                            <Card.Img variant="top" src={Cebola} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Cebola Empanada</Card.Title>
                                <Card.Text className='textoCentro'>
                                    Porção com 10 unidades.
                                    <br />
                                    <h5>R$ 15,00</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <br/>
                    <h5 className='titulo3'>Sobremesas</h5>
                    <div className='cards'>
                        <Card style={{width: '24rem', height:'20.5rem'}} className='rosa'>
                            <Card.Img variant="top" src={Napolitano} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Sorvete</Card.Title>
                                <Card.Text className='textoCentro'>
                                    3 bolas (sabores).
                                    <br />
                                    <h5>R$ 15,00</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                        <Card style={{width: '24rem', height:'20.5rem'}} className='rosa'>
                            <Card.Img variant="top" src={Acaii} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Açaí</Card.Title>
                                <Card.Text className='textoCentro'>
                                    Natural ou morango.
                                    <br />
                                    <h5>15,00</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                        <Card style={{width: '24rem', height:'20.5rem'}} className='rosa'>
                            <Card.Img variant="top" src={Salada} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Salada de Frutas</Card.Title>
                                <Card.Text className='textoCentro'>
                                    Frutas da estação.
                                    <br />
                                    <h5>R$ 15,00</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}
export default Pratos;