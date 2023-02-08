import './Footer.css'

function Footer() {
  return (
    <div>
      <footer className="colorBack d-flex flex-wrap py-3 my-4 border-top">
        <div className="col-md-4 d-flex">
          <span className="mb-3 mb-md-0">&copy; Squad1</span>
        </div>

        <div>
          Devair Martins
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex left">
          {/* <li className="ms-3"><a href="https://www.google.com.br/"><i class="fa fa-instagram"></i></a></li> */}
          <li className="ms-3"><a className="text-muted" href="#"><i class="fa fa-instagram textColor"></i></a></li>
          <li className="ms-3"><a className="text-muted" href="#"><i class="fa fa-instagram textColor"></i></a></li>
          <li className="ms-3"><a className="text-muted" href="#"><i class="fa fa-instagram textColor"></i></a></li>
        </ul>
      </footer>
    </div>
  )
}
export default Footer;