import React, { useState,useEffect } from "react";
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import { RenderBox } from "./MainContainer";
import axios from 'axios';

//"homepage": "http://pir0n.github.io/RaspiKiosk",
const fakeEventsEN = [
  { id: '0', name: 'Fire and Forget at KW Institute for Contemporary Art', patch_img: 'img/events/event1_1.jpg', patch_img2: 'img/events/event1_2.jpg', patch_img3: 'img/events/event1_3.jpg', description: 'Test desc 0', price: '0' },
  { id: '1', name: 'The Natural History Museum', patch_img: 'img/events/event2_1.jpg', patch_img2: 'img/events/event2_2.jpg', patch_img3: 'img/events/event2_3.jpg', description: 'Test desc 1', price: '0' },
  { id: '2', name: 'The Vasa Museum in Stockholm', patch_img: 'img/events/event3_1.jpg', patch_img2: 'img/events/event3_2.jpg', patch_img3: 'img/events/event3_3.jpg', description: 'Test desc 2', price: '322' },
  { id: '0', name: 'Fire and Forget at KW Institute for Contemporary Art', patch_img: 'img/events/event1_1.jpg', patch_img2: 'img/events/event1_2.jpg', patch_img3: 'img/events/event1_3.jpg', description: 'Test desc 0', price: '233' },
  { id: '1', name: 'The Natural History Museum', patch_img: 'img/events/event2_1.jpg', patch_img2: 'img/events/event2_2.jpg', patch_img3: 'img/events/event2_3.jpg', description: 'Test desc 1', price: '200' },
  { id: '2', name: 'The Vasa Museum in Stockholm', patch_img: 'img/events/event3_1.jpg', patch_img2: 'img/events/event3_2.jpg', patch_img3: 'img/events/event3_3.jpg', description: 'Test desc 2', price: '30' },
];

const fakeEventsPL = [
  { id: '0', name: 'Pożar i zapomnij w KW Institute for Contemporary Art', patch_img: 'img/events/event1_1.jpg', patch_img2: 'img/events/event1_2.jpg', patch_img3: 'img/events/event1_3.jpg', description: 'Test desc 0', price: '0' },
  { id: '1', name: 'Muzeum Historii Naturalnej', patch_img: 'img/events/event2_1.jpg', patch_img2: 'img/events/event2_2.jpg', patch_img3: 'img/events/event2_3.jpg', description: 'Test desc 1', price: '0' },
  { id: '2', name: 'Muzeum Vasa w Sztokholmie', patch_img: 'img/events/event3_1.jpg', patch_img2: 'img/events/event3_2.jpg', patch_img3: 'img/events/event3_3.jpg', description: 'Test desc 2', price: '322' },
  { id: '0', name: 'Pożar i zapomnij w KW Institute for Contemporary Art', patch_img: 'img/events/event1_1.jpg', patch_img2: 'img/events/event1_2.jpg', patch_img3: 'img/events/event1_3.jpg', description: 'Test desc 0', price: '233' },
  { id: '1', name: 'Muzeum Historii Naturalnej', patch_img: 'img/events/event2_1.jpg', patch_img2: 'img/events/event2_2.jpg', patch_img3: 'img/events/event2_3.jpg', description: 'Test desc 1', price: '200' },
  { id: '2', name: 'Muzeum Vasa w Sztokholmie', patch_img: 'img/events/event3_1.jpg', patch_img2: 'img/events/event3_2.jpg', patch_img3: 'img/events/event3_3.jpg', description: 'Test desc 2', price: '30' },
];

const fakeEventsIT = [
  { id: '0', name: 'Fuoco e Dimentica al KW Institute for Contemporary Art', patch_img: 'img/events/event1_1.jpg', patch_img2: 'img/events/event1_2.jpg', patch_img3: 'img/events/event1_3.jpg', description: 'Test desc 0', price: '0' },
  { id: '1', name: 'Il Museo di storia naturale', patch_img: 'img/events/event2_1.jpg', patch_img2: 'img/events/event2_2.jpg', patch_img3: 'img/events/event2_3.jpg', description: 'Test desc 1', price: '0' },
  { id: '2', name: 'Il Museo Vasa di Stoccolma', patch_img: 'img/events/event3_1.jpg', patch_img2: 'img/events/event3_2.jpg', patch_img3: 'img/events/event3_3.jpg', description: 'Test desc 2', price: '322' },
  { id: '0', name: 'Fuoco e Dimentica al KW Institute for Contemporary Art', patch_img: 'img/events/event1_1.jpg', patch_img2: 'img/events/event1_2.jpg', patch_img3: 'img/events/event1_3.jpg', description: 'Test desc 0', price: '233' },
  { id: '1', name: 'Il Museo di storia naturale', patch_img: 'img/events/event2_1.jpg', patch_img2: 'img/events/event2_2.jpg', patch_img3: 'img/events/event2_3.jpg', description: 'Test desc 1', price: '200' },
  { id: '2', name: 'Il Museo Vasa di Stoccolma', patch_img: 'img/events/event3_1.jpg', patch_img2: 'img/events/event3_2.jpg', patch_img3: 'img/events/event3_3.jpg', description: 'Test desc 2', price: '30' },
];
/*
function EventAPI(){
  const [allEvents, add]
s
} */


// MAIN FUNCTION
const App = () => {
  const [language, setLanguage] = useState("uk");
  const [lang, setLang] = useState("Choose language");
  const [langobject, setLangobject] = useState(fakeEventsEN);
  const [EventsEN,setEventsEN] = useState(fakeEventsEN);
  const [EventsPL,setEventsPL] = useState(fakeEventsPL);
  const [EventsIT,setEventsIT] = useState(fakeEventsIT);
  const [testobj,setTestobj] = useState([{greeting: " "}]);

  const [data, setData] = useState({ hits: [] });


  useEffect( () => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3001/', );
      
      setTestobj(result.data)
    };
    fetchData();
  },[]);
  
  useEffect( () => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3001/Events/EN', );
      
      setEventsEN(result.data)
    };
    fetchData();
  },[]);

  useEffect( () => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3001/Events/PL', );
      
      setEventsPL(result.data)
    };
    fetchData();
  },[]);

  useEffect( () => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3001/Events/IT', );
      
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
    <div className="main">

      <Container fluid>


        <Row>
          <Navbar bg="light" expand="lg" variant="light" >

            <Navbar.Brand href="#home">{lang}</Navbar.Brand>


            <img src="img/icons_language/italy.png" className="img mr-4" alt="Avatar" onClick={() => updatestateIT()} />
            <img src="img/icons_language/uk.png" className="img mr-4" alt="Avatar" onClick={() => updatestateUK()} />
            <img src="img/icons_language/poland.png" className="img mr-4" alt="Avatar" onClick={() => updatestatePL()} />
            testowe zapytanie exprees {testobj.greeting} plus

          </Navbar> </Row>
        <Row>
          <RenderBox events={langobject} language={language}>  </RenderBox>

        </Row>


      </Container>



    </div>
  );

}




export default App;

