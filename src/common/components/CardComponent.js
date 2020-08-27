import React from "react";
import Card from "react-bootstrap/Card";

export default class CardComponent extends React.Component {

    render() {
        return <Card>
                <Card.Header>{this.props.title}</Card.Header>
                <Card.Body>{this.props.content}</Card.Body>
               </Card>
    }
}