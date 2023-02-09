import './Footer.css'

function Footer() {
  return (
    <div>
      <footer className="colorBack d-flex flex-wrap py-3 border-top">
        <div>
          <strong>Conheça nossas lojas:</strong><br />
          Irajá | Madureira | Barra <br />
          Botafogo | São Conrrado
        </div>

        <div>
          <strong>Fale Conosco:</strong><br />
          <i class="fa fa-whatsapp"> (21) 97171-7171 / 97272-7272</i><br />
          <i class="fa fa-envelope"> contato@spaceburguer.com.br</i>
        </div>

        <div>
          <strong>Fale Conosco:</strong><br />
          <i class="fa fa-twitter"> Space.Burger</i><br />
          <i class="fa fa-instagram textColor"> Space.Burguer</i>
        </div>
      </footer>
    </div>
  )
}
export default Footer;