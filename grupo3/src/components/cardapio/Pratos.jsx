import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Pratos.css'

function Pratos() {
    return (
        <div className="centro">
            <br />
            <div>
                <h1>Cardápio</h1>
            </div>
            <br />
            <div>
                <h5>Hambúrgueres</h5>
                <div className='cards'>
                    <Card style={{ width: '19rem'}} className='rosa'>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title className='textoCentro'>X-Bacon</Card.Title>
                            <Card.Text className='textoCentro'>
                                Pão, carne, queijo, presunto e bacon.
                                <br />
                                <h5>Preço R$ 15,00</h5>
                            </Card.Text>
                            {/* <div className='textoCentro'>
                                <Button variant="primary">R$ 15,00</Button>
                            </div> */}
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '19rem'}} className='rosa'>
                        <Card.Img variant="top" src="holder.js/100px180" />
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
                    <Card style={{ width: '19rem'}} className='rosa'>
                        <Card.Img variant="top" src="holder.js/100px180" />
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
                        <Card style={{ width: '19rem'}} className='rosa'>
                            <Card.Img variant="top" src="holder.js/100px180" />
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
                        <Card style={{ width: '19rem'}} className='rosa'>
                            <Card.Img variant="top" src="holder.js/100px180" />
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
                        <Card style={{ width: '19rem'}} className='rosa'>
                            <Card.Img variant="top" src="holder.js/100px180" />
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
                        <Card style={{ width: '19rem'}} className='rosa'>
                            <Card.Img variant="top" src="holder.js/100px180" />
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
                        <Card style={{ width: '19rem'}} className='rosa'>
                            <Card.Img variant="top" src="holder.js/100px180" />
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
                        <Card style={{ width: '19rem'}} className='rosa'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title className='textoCentro'>Cebola Empanada</Card.Title>
                                <Card.Text className='textoCentro'>
                                    Bora pra chorar.
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
                        <Card style={{ width: '19rem'}} className='rosa'>
                            <Card.Img variant="top" src="holder.js/100px180" />
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
                        <Card style={{ width: '19rem'}} className='rosa'>
                            <Card.Img variant="top" src="holder.js/100px180" />
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
                        <Card style={{ width: '19rem'}} className='rosa'>
                            <Card.Img variant="top" src="holder.js/100px180" />
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
        </div>
    )
}
export default Pratos;