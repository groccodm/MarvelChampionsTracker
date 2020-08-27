import React from "react";
import CharacterService from "../services/CardService";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PlayAreaComponent from "../common/components/PlayAreaComponent";

export default class Home extends React.Component {
    constructor(props)
    {
        super(props);
        this.characterApi = new CharacterService();
        this.state = {hero: {name: 'No Hero', health: 0}};
    }

    handleHeroChange(selectedHero) {
        console.log(selectedHero);
        this.setState({hero: selectedHero});
    }

    render(){
        let heroesDropdown = this.characterApi.get("hero").map((hero)=>
            <Dropdown.Item key={hero.id} eventKey={hero} onSelect={()=>this.handleHeroChange(hero)}>{hero.name}</Dropdown.Item>
        );

        let villainDropdown = this.characterApi.get("villain").map((villain)=>
            <Dropdown.Item key={villain.id} eventKey={villain}>{villain.name}</Dropdown.Item>
        );

        return (
            <Container>
                <Row>
                    <Col>
                        <Dropdown >
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
                <Row>
                    <Col>
                        <PlayAreaComponent hero={this.state.hero}></PlayAreaComponent>
                    </Col>
                </Row>
            </Container>
        );
    }
}