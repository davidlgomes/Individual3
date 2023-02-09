import Form from 'react-bootstrap/Form';
import './Formulario.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';


function Formulario() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className='titulo'>
        <br />
        <h1>Monte o seu combo</h1>
      </div>
      <div className='colunas'>
        <div className='tabelaF'>
          <br />
          <strong>Escolha o seu Hambúrguer:</strong>
          <Form>
            <Form.Group>
              <Form.Select className='tabelaF'>
                <option>Nenhum</option>
                <option>X-Bacon</option>
                <option>Vegetariano</option>
                <option>X-Burguer</option>
              </Form.Select><br />
            </Form.Group>
          </Form>
          <strong>E a bebida?</strong>
          <Form>
            <Form.Group>
              <Form.Select className='tabelaF'>
                <option>Nenhuma</option>
                <option>Coca</option>
                <option>Guaraná</option>
                <option>Sprite</option>
              </Form.Select><br />
            </Form.Group>
          </Form>
          <strong>Algum acompanhamento?</strong>
          <Form>
            <Form.Group>
              <Form.Select className='tabelaF'>
                <option>Nenhum</option>
                <option>Batata frita</option>
                <option>Tekitos</option>
                <option>Cebola empanada</option>
              </Form.Select><br />
            </Form.Group>
          </Form>
          <strong>Não esquece a sobremesa!</strong>
          <Form>
            <Form.Group>
              <Form.Select className='tabelaF'>
                <option>Nenhuma</option>
                <option>Sorvete</option>
                <option>Açaí</option>
                <option>Salada de frutas</option>
              </Form.Select><br />
            </Form.Group>
            <Button variant="primary" onClick={handleShow}>
              Concluir pedido
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Pedido adicionado ao carrinho!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Seu pedido foi enviado ao carrinho.<br />
                Veja seu(s) pedido na aba "carrinho".
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Fechar
                </Button>
                <a href="/carrinho"><Button variant="primary">Carrinho</Button></a>
              </Modal.Footer>
            </Modal>
          </Form>
        </div>
        <div className='tabelaF'>
          <h4>Lembre os Ingredientes:</h4>
          <br />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>X-Bacon</Accordion.Header>
              <Accordion.Body>
                Pão, carne, queijo, presunto e bacon.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>X-Burguer</Accordion.Header>
              <Accordion.Body>
                Pão, carne, queijo e picles.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Vegetariano</Accordion.Header>
              <Accordion.Body>
                Pão e planta.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Sorvete</Accordion.Header>
              <Accordion.Body>
                Napolitano.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Salada de frutas</Accordion.Header>
              <Accordion.Body>
                Maçã, banana, mamão e laranja.
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Formulario;