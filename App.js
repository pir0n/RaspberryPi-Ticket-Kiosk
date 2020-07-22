import React, { useState,useEffect,useLayoutEffect } from "react";
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import { RenderBox } from "./MainContainer";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";

//"homepage": "http://pir0n.github.io/RaspiKiosk",
const fakeEventsEN = [];

const fakeEventsPL = [];

const fakeEventsIT = [];



// MAIN FUNCTION
const App = () => {
  const [language, setLanguage] = useState("uk");
  const [lang, setLang] = useState("Choose language");
  const [langobject, setLangobject] = useState(fakeEventsEN);
  const [EventsEN,setEventsEN] = useState(fakeEventsEN);
  const [EventsPL,setEventsPL] = useState(fakeEventsPL);
  const [EventsIT,setEventsIT] = useState(fakeEventsIT);
  const [testobj,setTestobj] = useState([{greeting: " "}]);
  const [modalShow, setModalShow] = useState(true);


  function Initmodal(props) {
    function handleIT(){
      updatestateIT();
      setModalShow(false)
    }
    function handleUK(){
      updatestateUK();
      setModalShow(false)
    }
    function handlePL(){
      updatestatePL();
      setModalShow(false)
    }
    return (
      <Modal
        
        size="lg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered           
      >
        
        <Modal.Title id="example-modal-sizes-title-vcenter" className="blockquote text-center mr-2"> <h1>Hello! Ciao! Cześć!</h1> </Modal.Title>   
         <Modal.Body>  <Row  className="justify-content-md-center "  >
      <div className="btn-group btn-block " xs={8} sm={8} md={5} lg={4} xl={3}> 
       <Col > <Button variant="dark"  className="btn btn-default btn-block " onClick={() => handleUK()}> <h1 >Click on me!</h1></Button></Col> 
       <Col><Button variant="dark" className="btn btn-default btn-block " onClick={() => handleIT()}><h1> Clicca su di me!</h1></Button></Col> 
       <Col>  <Button variant="dark" className="btn btn-default btn-block" onClick={() => handlePL()}><h1> Kliknij na mnie!</h1></Button></Col> 
        </div>   </Row> 
       </Modal.Body>
      </Modal>
      );
  }
  
  
//variables for addreses for GET/PUT/POST request not hardcoded! 

//Device catalog url:
const [deviceCatalogUrl,setDeviceCatalogUrl] = useState(""); 
//Backend url: 
const [backendUrl,setBackendUrl] = useState("http://localhost:3001/");

  
  useEffect( () => {
    const fetchData = async () => {
      const result = await axios(backendUrl+"Events/EN", );
      
      setEventsEN(result.data)
    };
    fetchData(EventsEN);
  },[]);

  useEffect( () => {
    const fetchData = async () => {
      const result = await axios(backendUrl +'Events/PL', );
      
      setEventsPL(result.data)
    };
    fetchData();
  },[]);

  useEffect( () => {
    const fetchData = async () => {
      const result = await axios(backendUrl+'Events/IT', );
      
      setEventsIT(result.data)
    };
    fetchData();
  },[]);

 


  function updatestateIT() {
    setLanguage("it");
    setLang("Scegli la lingua");
    setLangobject(EventsIT)
    
  }
  function updatestateUK() {
    setLanguage("uk");
    setLang("Choose language");
    setLangobject(EventsEN)
    

  }
  function updatestatePL() {
    setLanguage("pl");
    setLang("Wybierz język");
    setLangobject(EventsPL)

    
  }


  

  return (

    
    <div className="main container3" >
    <Container fluid   ><Row className=" align-items-start "> 
<Navbar  bg="light" expand="true" variant="light" >
          
          <Navbar.Brand href="#home">{lang} </Navbar.Brand>

          
          <Col float="left">  <img src="img/icons_language/italy.png" className="img  "   alt="Avatar" onClick={() => updatestateIT()} /> </Col> 
          <Col float="left">  <img src="img/icons_language/uk.png" className="img " alt="Avatar" onClick={() => updatestateUK()} /> </Col> 
          <Col float="left">   <img src="img/icons_language/poland.png" className="img " alt="Avatar" onClick={() => updatestatePL()} /> </Col> 
          
        </Navbar>
         </Row>
        </Container>
      <Container fluid  >
      
        <Row expand="lg">
           </Row>  

      
        <Row>
        <Initmodal show={modalShow} onHide={() => setModalShow(false)} />
          <RenderBox events={langobject} language={language}>  </RenderBox>

        </Row>

      </Container>



    </div>
  );

}




export default App;

