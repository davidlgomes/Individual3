import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import './Formulario.css'
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';


function Formulario() {

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div>
      Escolha o seu combo:
      <div>
        <Table>
          <tbody>
            <tr>
              <td>
                <Form>
                  <Form.Group>
                    <Form.Select className='tabelaF'>
                      <option>X-Burguer</option>
                      <option>X-Bacon</option>
                      <option>Vegetariano</option>
                      <option>Sem hambúrguer</option>
                    </Form.Select><br />
                  </Form.Group>
                  <Form.Group>
                    <Form.Select className='tabelaF'>
                      <option>aaa</option>
                      <option>X-Bacon</option>
                      <option>Vegetariano</option>
                      <option>Sem hambúrguer</option>
                    </Form.Select><br />
                  </Form.Group>
                </Form>
              </td>
              <td>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Select  className='tabelaF'>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>Quantidade na observação</option>
                    </Form.Select><br />
                  </Form.Group>
                </Form>
              </td>
            </tr>
          </tbody>
        </Table>
        <br />
        Escolha seu Hambúrguer
        <Table>
          <Form>
            <Form.Group>
              <Form.Select className='tabela'>
                <option>X-Burguer</option>
                <option>X-Bacon</option>
                <option>Vegetariano</option>
                <option>Sem hambúrguer</option>
              </Form.Select><br />
            </Form.Group>
          </Form>
          <td>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Select className='tabela'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>Quantidade na observação</option>
                </Form.Select><br />
              </Form.Group>
            </Form>
          </td>
        </Table>
      </div>
      {/* <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        Escolha seu Hambúrguer
        <Form.Select className='tabela'>
          <option>X-Burguer</option>
          <option>X-Bacon</option>
          <option>Vegetariano</option>
          <option>Sem hambúrguer</option>
        </Form.Select><br/>
        Escolha sua bebida
        <Form.Select className='tabela'>
          <option>Coca</option>
          <option>Guaraná</option>
          <option>Pepsi</option>
          <option>Sem bebidas</option>
        </Form.Select><br/>
        Escolha seu acompanhamento
        <Form.Select className='tabela'>
          <option>Batata frita</option>
          <option>Tekitos</option>
          <option>Cebola empanada</option>
          <option>Sem acompanhamento</option>
        </Form.Select><br/>
        Vai de sobremesa?
        <Form.Select className='tabela'>
          <option>Sorvete</option>
          <option>Açaí</option>
          <option>Salada de frutas</option>
          <option>Sem sobremesa</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}
    </div>
  );
}

export default Formulario;