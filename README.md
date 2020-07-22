# raspi_raw


https://pir0n.github.io/RaspiKiosk/

Most of development done on Windows Subsystem for Linux 2 then transmitted to RaspberryPi 3.  


App.js - Main file (includes NavigationBar) + (imports Container with rendered EventCards)  --> use MainContainer

MainContainer.js - File with function to create eventes cards using ---> Event.js 

Event.js - File with "Template" to generate single EventCard with everything inside it. 

server.js - Handles basic Rest API communication to simulate backend service. 

qr_decoder.py - Handles basic QR decoding (for tickets) in future will be updated with MQQT client. 

![TotemTestV1](https://github.com/pir0n/raspi_raw/blob/master/totem_test_V1.gif)

![TotemTestV2](https://github.com/pir0n/raspi_raw/blob/master/totem_test_V2.gif)

