import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AstroHome from '../../assets/AstroHome.png'
import alien from '../../assets/alien.png'
import alien2 from '../../assets/alien2.png'
import OVNI from '../../assets/OVNI.gif'
import './Apresentacao.css'
import Xbacon from "../../assets/Xbacon.png"
// import Batata from "../../assets/Batata.jpg"
// import Acaii from "../../assets/Acaii.jpg"
import Xburguer from "../../assets/Xburguer.png"
import Vegetariano from "../../assets/Vegetariano.png"
import Topo2 from "../../assets/Topo2.png"
import Carousel from 'react-bootstrap/Carousel';

function Apresentacao() {
  return (
    <div>
      {/* <div> <img className='topo'src={Topo} alt="topo"/></div> */}

      {/* <div className='centroHome'>
        <div className='textoHome'>
          <h2>SpaceBurguer</h2>
          <h5>
            Criado para inovar no mercado de hamburgueria, o SpaceBurguer iniciou
            sua operação com uma loja em janeiro de 2022.<br />
            Pensamos nos ingredientes que você mais gosta e montamos cada receita com
            o objetivo de <strong>agradar toda a galáxia.</strong><br />
            <strong>Somos a primeira hamburgueria temática de outro mundo localizada
              no Rio de Janeiro.<br />
              <Button variant="primary" href='/cardapio'>Escolha o seu</Button>
            </strong>
          </h5>
        </div>
        <img src={AstroHome1} alt="astronauta" />
      </div> */}

      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Topo2}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className='centroHome'>
                <div className='textoHome'>
                  <h1>SpaceBurguer</h1>
                  <h3>
                    Experimente nossos burgueres que são de <strong>outro mundo!</strong><br />
                    <strong><br />
                      <Button variant="primary" href='/cardapio'>Escolha o seu</Button>
                    </strong>
                  </h3>
                </div>
                <img src={AstroHome} alt="astronauta" className='astroHome' />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Topo2}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className='centroHome'>
                <img src={alien2} alt="astronauta" className='astroHome' />
                <div className='textoHome'>
                  <h1>SpaceBurguer</h1>
                  <h3>
                    Não se contente apenas com os sabores normais do planeta terra.
                    Conheça nosso cardápio e <strong>faça uma viagem espacial.</strong><br />
                    <strong>
                      <br />
                      <Button variant="primary" href='/cardapio'>Escolha o seu</Button>
                    </strong>
                  </h3>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src={Topo2}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className='centroHome'>
                <div className='textoHome'>
                  <h2>SpaceBurguer</h2>
                  <h5>
                    Criado para inovar no mercado de hamburgueria, o SpaceBurguer iniciou
                    sua operação com uma loja em janeiro de 2022.<br />
                    Pensamos nos ingredientes que você mais gosta e montamos cada receita com
                    o objetivo de <strong>agradar toda a galáxia.</strong><br />
                    <strong>Somos a primeira hamburgueria temática de outro mundo localizada
                      no Rio de Janeiro.<br />
                      <Button variant="primary" href='/cardapio'>Escolha o seu</Button>
                    </strong>
                  </h5>
                </div>
                <img src={AstroHome} alt="astronauta" className='astroHome'/>
              </div>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>

            </Carousel.Item>
           */}
      </div>

      <div className='centroHome'>
        <div className='colunasHome'>
          <Card style={{ width: '15rem', height: '20.5rem' }} className='rosa'>
            <Card.Img variant="top" src={Xbacon} className='fotosHome' />
            <Card.Body>
              <Card.Title className='textoCentroHome'>X-Bacon</Card.Title>
              <Card.Text className='textoCentroHome'>
                Pão, carne, queijo e bacon.
                <h6>Preço R$ 15,00</h6>
              </Card.Text>
              <div className='textoCentroHome'>
                <Button className='button' variant="info" href='/cardapio'><strong>EU QUERO</strong></Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className='colunasHome'>
          <Card style={{ width: '15rem', height: '20.5rem' }} className='rosa'>
            <Card.Img variant="top" src={Xburguer} className='fotosHome' />
            <Card.Body>
              <Card.Title className='textoCentroHome'>X-Burger</Card.Title>
              <Card.Text className='textoCentroHome'>
                Pão, carne, queijo e picles.
                <br />
                <h6>Preço R$ 15,00</h6>
              </Card.Text>
              <div className='textoCentroHome'>
                <Button className='button' variant="info" href='/cardapio'><strong>EU QUERO</strong></Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className='colunasHome'>
          <Card style={{ width: '15rem', height: '20.5rem' }} className='rosa'>
            <Card.Img variant="top" src={Vegetariano} className='fotosHome' />
            <Card.Body>
              <Card.Title className='textoCentroHome'>Vegetariano</Card.Title>
              <Card.Text className='textoCentroHome'>
                Pão e uma incrível salada.
                <br />
                <h6>Preço R$ 15,00</h6>
              </Card.Text>
              <div className='textoCentroHome'>
                <Button className='button' variant="info" href='/cardapio'><strong>EU QUERO</strong></Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Apresentacao;