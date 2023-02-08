import Table from 'react-bootstrap/Table';
import './Tabela.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Tabela() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='centro'>
      <div>
        <h2>Carrinho</h2>
      </div>
      <div className='tabela'>
        <Table striped>
          <thead>
            <tr>
              <th>Sanduíche</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>X-Burguer</td>
              <td>1</td>
              <td>10,00</td>
              <td>
                <button className='botao'><strong>X</strong></button>
              </td>
            </tr>
            <tr>
              <td>Coca</td>
              <td>1</td>
              <td>6,00</td>
              <td>
                <button className='botao'><strong>X</strong></button>
              </td>
            </tr>
            <tr>
              <td>Batata</td>
              <td>2</td>
              <td>8,00</td>
              <td>
                <button className='botao'><strong>X</strong></button>
              </td>
            </tr>
            <tr>
              <td>Sorvete</td>
              <td>2</td>
              <td>15,00</td>
              <td>
                <button className='botao'><strong>X</strong></button>
              </td>
            </tr>
            <tr>
              {/* <td>3</td> */}
              <td colSpan={2}>Valor total</td>
              <td>R$ 150,00</td>
              <td>
                <Button variant="primary" onClick={handleShow}>
                  Finalizar pedido
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Obrigado pela compra!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Por favor, preencha alguns dados pessoais:</p>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="nome@exemplo.com"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="(xx) xxxxx - xxxx"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Observações sobre o pedido:</Form.Label>
                        <Form.Control
                          as="textarea" rows={2}
                          placeholder="Descreva se quer retirar algum ingrediente ou algo do tipo."
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                      Enviar dados
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Tabela;