import Form from 'react-bootstrap/Form';
import './Formulario.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Comidas from '../../contexts/Contexts'
import  {Link} from 'react-router-dom';


function Formulario() {

  useEffect(()=>{
    loadId();
    loadCardapio();

  },[])




  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectH, setSelectH] = useState()
  const [selectB, setSelectB] = useState()
  const [selectA, setSelectA] = useState()
  const [selectS, setSelectS] = useState()
  const [precotH, setprecoH] = useState()
  const [precoB, setprecoB] = useState()
  const [precoA, setprecoA] = useState()
  const [precoS, setprecoS] = useState()
  const [id, setId] = useState(0)
  const [dados1, setdados1] = useState([])
  const [bebidas, setbebidas] = useState([])
  const [acompanhamentos, setacompanhamentos] = useState([])
  const [sobremesa, setsobremesa] = useState([])
  const [hamburguer, sethamburguer] = useState([])
  const dados ={
    hamburguer: selectH,
    bebida: selectB,
    sobremesa: selectS,
    acompanhamento:selectA

  }

  const H = hamburguer
  const B = bebidas
  const A = acompanhamentos
  const S = sobremesa
 

  async function loadCardapio() {
    try {
      const resp = await fetch(`https://projeto-individual-3-uy0v.onrender.com/cardapio`, {
        method: 'GET',
      });
      console.log('resposta fetch->', resp)
      if (resp.status == 200 || 201) {
        const Dados = await resp.json();

        console.log('Dados do fetc->', Dados);
        setdados1(Dados)
        sethamburguer(Dados[0].hamburguer)
        setbebidas(Dados[1].bebidas)
        setsobremesa(Dados[2].sobremesas)
        setacompanhamentos(Dados[3].acompanhamentos)

      }

    } catch (e) {
      console.log(e)
    }
  }

  async function loadId() {
    try {
      const resp = await fetch(`https://projeto-individual-3-uy0v.onrender.com/pedido`, {
        method: 'GET',
      });
      console.log('resposta fetch ID->', resp)
      if (resp.status == 200 || 201) {
        const getIds = await resp.json();
       
        const id1 = getIds[getIds.length-1].id;
        console.log('id anterior',id1)
        setId(id1+1);
      }

    } catch (e) {
      console.log(e)
    }
  }
  


  async function enviar() {
    let dados={
      id:id,
      hamburguer: selectH,
      bebida: selectB,
      sobremesa: selectS,
      acompanhamento:selectA

    }
    console.log('dados id novo',dados)
    try {
      const resp = await fetch(`https://projeto-individual-3-uy0v.onrender.com/pedido`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
      });
      console.log('resposta fetch pedido->', resp)
      if (resp.status == 200 || 201) {
        console.log('dados enviados')
        setShow(true)
       
      }

    } catch (e) {
      console.log(e)
    }
  }
  function handleCreate(e) {
    e.preventDefault()
    alert(selectS)  
  }


  return (
    <Comidas.Provider value={{}}>
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
              <Form.Select className='tabelaF' value={selectH}  onChange={e => setSelectH(e.target.value)}>
                {H.map((item) => (
                  <option value={item.nome}>{item.nome} - {"R$ "+item.preco}</option>
                ))}
              </Form.Select><br />
            </Form.Group>
          </Form>
          <strong>E a bebida?</strong>
          <Form>
            <Form.Group>
              <Form.Select className='tabelaF'value={selectB}  onChange={e => setSelectB(e.target.value)}>
              {B.map((item) => (
                  <option value={item.nome}>{item.nome} - {"R$ "+item.preco}</option>
                ))}
              </Form.Select><br />
            </Form.Group>
          </Form>
          <strong>Algum acompanhamento?</strong>
          <Form>
            <Form.Group>
              <Form.Select className='tabelaF' value={selectA}  onChange={e => setSelectA(e.target.value)}>
              {A.map((item) => (
                  <option value={item.nome}>{item.nome} - {"R$ "+item.preco}</option>
                ))}
              </Form.Select><br />
            </Form.Group>
          </Form>
          <strong>Não esquece a sobremesa!</strong>
          <Form>
            <Form.Group>
              <Form.Select className='tabelaF' value={selectS}  onChange={e => setSelectS(e.target.value)}>
              {S.map((item) => (
                  <option value={item.nome}>{item.nome} - {"R$ "+item.preco}</option>
                ))}
              </Form.Select><br />
            </Form.Group>
            <Button variant="primary" onClick={()=>enviar()}>
              
              
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
                <Link to={`/carrinho/${id}`}><Button variant="primary">Carrinho</Button></Link>
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
    </Comidas.Provider>
  );
}

export default Formulario;