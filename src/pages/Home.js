import React from "react";
import CharacterService from "../services/CharacterService";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class Home extends React.Component {
    constructor(props)
    {
            super(props);
            this.characterApi = new CharacterService();
    }
    render(){
        let heroesDropdown = this.characterApi.get("hero").map((hero)=>
            <Dropdown.Item eventKey={hero.id}>{hero.name}</Dropdown.Item>
        );

        let villainDropdown = this.characterApi.get("villain").map((villain)=>
            <Dropdown.Item eventKey={villain.id}>{villain.name}</Dropdown.Item>
        );

        return (
            <Container>
                <Row>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle id = "dropdown-heroes">Select Your Hero</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {heroesDropdown}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col>
                            <Dropdown>
                                <Dropdown.Toggle id = "dropdown-villains">Select the Villain</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {villainDropdown}
                                </Dropdown.Menu>
                            </Dropdown>
                    </Col>
                </Row>
            </Container>
        );
    }
}