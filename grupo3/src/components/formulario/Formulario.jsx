import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import './Formulario.css'
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';


function Formulario() {

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div className='colunas'>
      <div className='tabelaF'>
        <h4>Monte o seu combo</h4>
        <br />
        <strong>Escolha o seu Hambúrguer:</strong>
        <Form>
          <Form.Group>
            <Form.Select className='tabelaF'>
              <option>Sem hambúrguer</option>
              <option>X-Bacon</option>
              <option>Vegetariano</option>
              <option>X-Burguer</option>
            </Form.Select><br />
          </Form.Group>
        </Form>
        <strong>E para beber?</strong>
        <Form>
          <Form.Group>
            <Form.Select className='tabelaF'>
              <option>Sem bebida</option>
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
              <option>Sem acompanhamento</option>
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
              <option>Sem sobremesa</option>
              <option>Sorvete</option>
              <option>Açaí</option>
              <option>Salada de frutas</option>
            </Form.Select><br />
          </Form.Group>
        </Form>
      </div>
      <div className='tabelaF'>
        <h4>Ingredientes</h4>
        <br />
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>X-Bacon</Accordion.Header>
            <Accordion.Body>
              Pão, carne, queijo, presunto, bacon, ovo e salada.
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
  );
}

export default Formulario;