import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import CardComponent from "./CardComponent";
export default class PlayAreaComponent extends React.Component {
    render() {
        return <CardGroup>
                <CardComponent title = {this.props.hero.name} content = {this.props.hero.health} />
                <CardComponent title = "test2" content = "testtest2" />
               </CardGroup>
    }
}