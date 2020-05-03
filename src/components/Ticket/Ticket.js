import React from "react";
import styled from "styled-components";

const TicketWrapper = styled.div`
  background: ${(props) => setTicketColor(props.laneId)};
  padding: 20px;
  border-radius: 20px;
  &:not(:last-child) {
    margin-bottom: 5%;
    margin-right: ${(props) => (!!props.marginRight ? "1%" : "0")};
  }
`;

const Title = styled.h3`
  width: 100%;
  margin: 0px;
`;

const Body = styled.p`
  width: 100%;
`;

const setTicketColor = (laneId) => {
  let colorObject = {
    "0": "#969ae0",
    "1": "#5fb0ce",
    "2": "#f7a642",
    "3": "#eae696",
    "4": "#4cbf54",
  };
  return colorObject[laneId];
};

const Ticket = ({ marginRight, onDragStart, ticket, laneId }) => (
  <TicketWrapper
    draggable
    laneId={laneId}
    onDragStart={(e) => onDragStart && onDragStart(e, ticket.id)}
    marginRight={marginRight}
  >
    <Title>{ticket.title}</Title>
    <Body>{ticket.body}</Body>
  </TicketWrapper>
);

export default Ticket;
