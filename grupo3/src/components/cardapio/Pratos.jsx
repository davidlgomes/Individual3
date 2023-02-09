import Card from 'react-bootstrap/Card';
import './Pratos.css'
import Xbacon from "../../assets/Xbacon.jpg"
import Vegetariano from "../../assets/Vegetariano.jpg"
import Coca from "../../assets/Coca.jpg"
import Guarana from "../../assets/Guarana.jpg"
import Pepsi from "../../assets/Pepsi.jpg"
import Batata from "../../assets/Batata.jpg"
import Tekitos from "../../assets/Tekitos.jpg"
import Cebola from "../../assets/Cebola.jpg"
import Acaii from "../../assets/Acaii.jpg"
import Napolitano from "../../assets/Napolitano.jpg"
import Salada from "../../assets/Salada.jpg"
import Xburguer from "../../assets/Xburguer.jpeg"

function Pratos() {
    return (
        <div className="centro">
            <br />
            <div>
                <h1>Cardápio</h1>
            </div>
            <br />
            <div>
                <div className='cards'>
                    <h1>A</h1>
                    <h1>B</h1>
                    <h1>C</h1>
                </div>
                <h5>Hambúrgueres</h5>
                <div className='cards'>
                    <Card style={{ width: '19rem' }} className='rosa'>
                        <Card.Img variant="top" src={Xbacon} className='fotos' />
                        <Card.Body>
                            <Card.Title className='textoCentro'>X-Bacon</Card.Title>
                            <Card.Text className='textoCentro'>
                                Pão, carne, queijo e bacon.
                                <br />
                                <h5>Preço R$ 15,00</h5>
                            </Card.Text>
                            {/* <div className='textoCentro'>
                                <Button variant="primary">R$ 15,00</Button>
                            </div> */}
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '19rem' }} className='rosa'>
                        <Card.Img variant="top" src={Xburguer} className='fotos' />
                        <Card.Body>
                            <Card.Title className='textoCentro'>X-Burger</Card.Title>
                            <Card.Text className='textoCentro'>
                                Pão, carne, queijo e picles.
                                <br />
                                <h5>Preço R$ 15,00</h5>
                            </Card.Text>
                            {/* <div className='textoCentro'>
                                <Button variant="primary">R$ 15,00</Button>
                            </div> */}
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '19rem' }} className='rosa'>
                        <Card.Img variant="top" src={Vegetariano} className='fotos' />
                        <Card.Body>
                            <Card.Title className='textoCentro'>Vegetariano</Card.Title>
                            <Card.Text className='textoCentro'>
                                Pão e planta.
                                <br />
                                <h5>Preço R$ 15,00</h5>
                            </Card.Text>
                            {/* <div className='textoCentro'>
                                <Button variant="primary">R$ 15,00</Button>
                            </div> */}
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <h5>Bebidas</h5>
                <div>
                    <div className='cards'>
                        <Card style={{ width: '19rem' }} className='rosa'>
                            <Card.Img variant="top" src={Coca} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Coca</Card.Title>
                                <Card.Text className='textoCentro'>
                                    O mais querido de todos.
                                    <br />
                                    <h5>Preço R$ 15,00</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '19rem' }} className='rosa'>
                            <Card.Img variant="top" src={Guarana} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Guaraná</Card.Title>
                                <Card.Text className='textoCentro'>
                                    Sempre em segundo.
                                    <br />
                                    <h5>Preço R$ 15,00</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '19rem' }} className='rosa'>
                            <Card.Img variant="top" src={Pepsi} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Pepsi</Card.Title>
                                <Card.Text className='textoCentro'>
                                    Pode ser?
                                    <br />
                                    <h5>Preço R$ 15,00</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <br />
                    <h5>Acompanhamentos</h5>
                    <div className='cards'>
                        <Card style={{ width: '19rem' }} className='rosa'>
                            <Card.Img variant="top" src={Batata} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Batata Frita</Card.Title>
                                <Card.Text className='textoCentro'>
                                    Batata frita com chedar e bacon.
                                    <br />
                                    <h5>Preço R$ 15,00</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '19rem' }} className='rosa'>
                            <Card.Img variant="top" src={Tekitos} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Tekitos</Card.Title>
                                <Card.Text className='textoCentro'>
                                    Tipo Mini-chiquen.
                                    <br />
                                    <h5>Preço R$ 15,00</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '19rem' }} className='rosa'>
                            <Card.Img variant="top" src={Cebola} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Cebola Empanada</Card.Title>
                                <Card.Text className='textoCentro'>
                                    Bota pra chorar.
                                    <br />
                                    <h5>Preço R$ 15,00</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <br />
                    <h5>Sobremesas</h5>
                    <div className='cards'>
                        <Card style={{ width: '19rem' }} className='rosa'>
                            <Card.Img variant="top" src={Napolitano} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Sorvete</Card.Title>
                                <Card.Text className='textoCentro'>
                                    Tradicional sabor napolitano.
                                    <br />
                                    <h5>Preço R$ 15,00</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '19rem' }} className='rosa'>
                            <Card.Img variant="top" src={Acaii} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Açaí</Card.Title>
                                <Card.Text className='textoCentro'>
                                    Não é aquele que parece sorvete.
                                    <br />
                                    <h5>Preço R$ 15,00</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '19rem' }} className='rosa'>
                            <Card.Img variant="top" src={Salada} className='fotos' />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Salada de Frutas</Card.Title>
                                <Card.Text className='textoCentro'>
                                    Maçã, banana, mamão e laranja.
                                    <br />
                                    <h5>Preço R$ 15,00</h5>
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