import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import {ListGroup,ListGroupItem} from 'react-bootstrap'
import './ApiCard';

const ApiCard = ({List}) => {

    return (
        <div className="Covid" style={{color:"#fff",  backgroundColor: "#3c3535a8",borderRadius: "20px"}}>
                    <Card  style={{ width: '23rem',color:"#fff",  backgroundColor: "transparent"}}>
   <Card.Body>
    <Card.Title><h3>World population:<br/>{List.population}</h3></Card.Title>
    <Card.Title>
    <h3>todayCases:<br/>{List.todayCases}</h3>
    </Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush" style={{ backgroundColor: "transparent"}}>
    <ListGroupItem style={{color:"#fff", backgroundColor: "transparent"}}><h5>todayRecovered: {List.todayRecovered}</h5></ListGroupItem>
    <ListGroupItem style={{ color:"#fff", backgroundColor: "transparent"}}><h5>todayDeaths : {List.todayDeaths}</h5></ListGroupItem>
    <ListGroupItem style={{ color:"#fff", backgroundColor: "transparent"}}><h5>casesPerOneMillion: {List.casesPerOneMillion}</h5></ListGroupItem>
    <ListGroupItem style={{ color:"#fff", backgroundColor: "transparent"}}><h5>deathsPerOneMillion: {List.deathsPerOneMillion}</h5></ListGroupItem>
  </ListGroup>
</Card>
        </div>
    )
}

export default ApiCard 