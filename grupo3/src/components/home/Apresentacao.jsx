import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AstroHome from '../../assets/AstroHome.png'
import AstroHome1 from '../../assets/AstroHome1.png'
import './Apresentacao.css'
import Xbacon from "../../assets/Xbacon.jpg"
import Batata from "../../assets/Batata.jpg"
import Acaii from "../../assets/Acaii.jpg"

function Apresentacao() {
  return (
    <div>
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
        <img src={AstroHome1} alt="astronauta" />
      </div>
      <div className='centroHome'>
        <div className='colunasHome'>
          <Card style={{ width: '13rem', height:'16.5rem'}} className='rosa'>
            <Card.Img variant="top" src={Xbacon} className='fotosHome' />
            <Card.Body>
              <Card.Title className='textoCentroHome'>X-Bacon</Card.Title>
              <Card.Text className='textoCentroHome'>
                Pão, carne, queijo e bacon.
                <h6>Preço R$ 15,00</h6>
              </Card.Text>
              <div className='textoCentroHome'>
                <Button variant="primary" href='/cardapio'>Eu quero</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className='colunasHome'>
          <Card style={{ width: '13rem', height:'16.5rem' }} className='rosa'>
            <Card.Img variant="top" src={Batata} className='fotosHome' />
            <Card.Body>
              <Card.Title className='textoCentroHome'>X-Burger</Card.Title>
              <Card.Text className='textoCentroHome'>
                Pão, carne, queijo e picles.
                <br />
                <h6>Preço R$ 15,00</h6>
              </Card.Text>
              <div className='textoCentroHome'>
                <Button variant="primary" href='/cardapio'>Eu quero</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className='colunasHome'>
          <Card style={{ width: '13rem', height:'16.5rem' }} className='rosa'>
            <Card.Img variant="top" src={Acaii} className='fotosHome' />
            <Card.Body>
              <Card.Title className='textoCentroHome'>Vegetariano</Card.Title>
              <Card.Text className='textoCentroHome'>
                Pão e planta.
                <br />
                <h6>Preço R$ 15,00</h6>
              </Card.Text>
              <div className='textoCentroHome'>
                <Button variant="primary" href='/cardapio'>Eu quero</Button>
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