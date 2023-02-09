import AstroHome from '../../assets/AstroHome.png'

function Apresentacao() {
  return (
    <div>
      <div className='colunas'>
        <div>
            <h5>
              Criado para inovar no mercado de hamburgueria, o SpaceBurguer iniciou
              sua operação com uma loja em janeiro de 2022.<br />
              Pensamos nos ingredientes que você mais gosta e montamos cada receita com
              o objetivo de <strong>agradar toda a galáxia.</strong><br />
              <strong>Somos a primeira hamburgueria temática de outro mundo localizada
                no Rio de Janeiro.
              </strong>
            </h5>
        </div>
        <div>
          <img src={AstroHome} alt="astronauta" />
        </div>
      </div>
      <br />
    </div>
  );
}

export default Apresentacao;