const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = 3001;
const ads =  {greeting: 'Hello, world (again)!'};
const ads_json = JSON.stringify(ads);

const fakeEventsEN = [
  { id: '0', name: 'Fire and Forget at KW Institute for Contemporary Art', patch_img: 'img/events/event1_1.jpg', patch_img2: 'img/events/event1_2.jpg', patch_img3: 'img/events/event1_3.jpg', description: 'Test desc 0', price: '0' },
  { id: '1', name: 'The Natural History Museum', patch_img: 'img/events/event2_1.jpg', patch_img2: 'img/events/event2_2.jpg', patch_img3: 'img/events/event2_3.jpg', description: 'Test desc 1', price: '0' },
  { id: '2', name: 'The Vasa Museum in Stockholm', patch_img: 'img/events/event3_1.jpg', patch_img2: 'img/events/event3_2.jpg', patch_img3: 'img/events/event3_3.jpg', description: 'Test desc 2', price: '322' },
  { id: '0', name: 'Fire and Forget at KW Institute for Contemporary Art', patch_img: 'img/events/event1_1.jpg', patch_img2: 'img/events/event1_2.jpg', patch_img3: 'img/events/event1_3.jpg', description: 'Test desc 0', price: '233' },
  { id: '1', name: 'The Natural History Museum', patch_img: 'img/events/event2_1.jpg', patch_img2: 'img/events/event2_2.jpg', patch_img3: 'img/events/event2_3.jpg', description: 'Test desc 1', price: '200' },
  { id: '2', name: 'The Vasa Museum in Stockholm', patch_img: 'img/events/event3_1.jpg', patch_img2: 'img/events/event3_2.jpg', patch_img3: 'img/events/event3_3.jpg', description: 'Test desc 2', price: '30' },
  { id: '0', name: 'Fire and Forget at KW Institute for Contemporary Art', patch_img: 'img/events/event1_1.jpg', patch_img2: 'img/events/event1_2.jpg', patch_img3: 'img/events/event1_3.jpg', description: 'Test desc 0', price: '233' },
  { id: '1', name: 'The Natural History Museum', patch_img: 'img/events/event2_1.jpg', patch_img2: 'img/events/event2_2.jpg', patch_img3: 'img/events/event2_3.jpg', description: 'Test desc 1', price: '200' },
  { id: '2', name: 'The Vasa Museum in Stockholm', patch_img: 'img/events/event3_1.jpg', patch_img2: 'img/events/event3_2.jpg', patch_img3: 'img/events/event3_3.jpg', description: 'Test desc 2', price: '30' },
  { id: '0', name: 'Fire and Forget at KW Institute for Contemporary Art', patch_img: 'img/events/event1_1.jpg', patch_img2: 'img/events/event1_2.jpg', patch_img3: 'img/events/event1_3.jpg', description: 'Test desc 0', price: '233' },
  { id: '1', name: 'The Natural History Museum', patch_img: 'img/events/event2_1.jpg', patch_img2: 'img/events/event2_2.jpg', patch_img3: 'img/events/event2_3.jpg', description: 'Test desc 1', price: '200' },
  { id: '2', name: 'The Vasa Museum in Stockholm', patch_img: 'img/events/event3_1.jpg', patch_img2: 'img/events/event3_2.jpg', patch_img3: 'img/events/event3_3.jpg', description: 'Test desc 2', price: '30' },
  { id: '0', name: 'Fire and Forget at KW Institute for Contemporary Art', patch_img: 'img/events/event1_1.jpg', patch_img2: 'img/events/event1_2.jpg', patch_img3: 'img/events/event1_3.jpg', description: 'Test desc 0', price: '233' },
  { id: '1', name: 'The Natural History Museum', patch_img: 'img/events/event2_1.jpg', patch_img2: 'img/events/event2_2.jpg', patch_img3: 'img/events/event2_3.jpg', description: 'Test desc 1', price: '200' },
  { id: '2', name: 'The Vasa Museum in Stockholm', patch_img: 'img/events/event3_1.jpg', patch_img2: 'img/events/event3_2.jpg', patch_img3: 'img/events/event3_3.jpg', description: 'Test desc 2', price: '30' },
];


const fakeEventsIT = [
  { id: '0', name: 'Fuoco e Dimentica al KW Institute for Contemporary Art', patch_img: 'img/events/event1_1.jpg', patch_img2: 'img/events/event1_2.jpg', patch_img3: 'img/events/event1_3.jpg', description: 'Test desc 0', price: '0' },
  { id: '1', name: 'Il Museo di storia naturale', patch_img: 'img/events/event2_1.jpg', patch_img2: 'img/events/event2_2.jpg', patch_img3: 'img/events/event2_3.jpg', description: 'Test desc 1', price: '0' },
  { id: '2', name: 'Il Museo Vasa di Stoccolma', patch_img: 'img/events/event3_1.jpg', patch_img2: 'img/events/event3_2.jpg', patch_img3: 'img/events/event3_3.jpg', description: 'Test desc 2', price: '322' },
  { id: '0', name: 'Fuoco e Dimentica al KW Institute for Contemporary Art', patch_img: 'img/events/event1_1.jpg', patch_img2: 'img/events/event1_2.jpg', patch_img3: 'img/events/event1_3.jpg', description: 'Test desc 0', price: '233' },
  { id: '1', name: 'Il Museo di storia naturale', patch_img: 'img/events/event2_1.jpg', patch_img2: 'img/events/event2_2.jpg', patch_img3: 'img/events/event2_3.jpg', description: 'Test desc 1', price: '200' },
  { id: '2', name: 'Il Museo Vasa di Stoccolma', patch_img: 'img/events/event3_1.jpg', patch_img2: 'img/events/event3_2.jpg', patch_img3: 'img/events/event3_3.jpg', description: 'Test desc 2', price: '30' },
];

const fakeEventsPL = [
  { id: '0', name: 'Pożar i zapomnij w KW Institute for Contemporary Art', patch_img: 'img/events/event1_1.jpg', patch_img2: 'img/events/event1_2.jpg', patch_img3: 'img/events/event1_3.jpg', description: 'Test desc 0', price: '0' },
  { id: '1', name: 'Muzeum Historii Naturalnej', patch_img: 'img/events/event2_1.jpg', patch_img2: 'img/events/event2_2.jpg', patch_img3: 'img/events/event2_3.jpg', description: 'Test desc 1', price: '0' },
  { id: '2', name: 'Muzeum Vasa w Sztokholmie', patch_img: 'img/events/event3_1.jpg', patch_img2: 'img/events/event3_2.jpg', patch_img3: 'img/events/event3_3.jpg', description: 'Test desc 2', price: '322' },
  { id: '0', name: 'Pożar i zapomnij w KW Institute for Contemporary Art', patch_img: 'img/events/event1_1.jpg', patch_img2: 'img/events/event1_2.jpg', patch_img3: 'img/events/event1_3.jpg', description: 'Test desc 0', price: '233' },
  { id: '1', name: 'Muzeum Historii Naturalnej', patch_img: 'img/events/event2_1.jpg', patch_img2: 'img/events/event2_2.jpg', patch_img3: 'img/events/event2_3.jpg', description: 'Test desc 1', price: '200' },
  { id: '2', name: 'Muzeum Vasa w Sztokholmie', patch_img: 'img/events/event3_1.jpg', patch_img2: 'img/events/event3_2.jpg', patch_img3: 'img/events/event3_3.jpg', description: 'Test desc 2', price: '30' },
];

app = new express();
app.use(morgan('combined'));
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=> { 
  res.send(ads_json)
})


app.get("/Events/EN",(req,res) => {
  res.send(fakeEventsEN)
})

app.get("/Events/PL",(req,res) => {
  res.send(fakeEventsPL)
})

app.get("/Events/IT",(req,res) => {
  res.send(fakeEventsIT)
})

app.listen(PORT, ()=>console.log(`Server running on http://localhost:${PORT}/`));