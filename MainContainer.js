import React, { } from "react";
import Row from "react-bootstrap/Row";
import { EventItem } from "./Event";


function createEvents(event, language) {

  return (
    <EventItem key={event.id} event={event} language={language} />
  );
}
const RenderBox = (props) => {
  let { events } = props;
  let { language } = props;

  return (

    <div className="album py-5 bg-light">

      <Row md={4}>

        {events.map((e) => createEvents(e, language))}

      </Row>

    </div>

  );

}
export { RenderBox };