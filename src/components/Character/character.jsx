import React from 'react';
import styled  from 'styled-components';

const Card = styled.div` 
    width: 240px;
    cursor: pointer;
    background: cornflowerblue;
    padding: 10px;
    margin: 30px;
    font-family: sans-serif;
    display: inline-grid;
    opacity: 0.9;
    height: ${props => props.isExpanded ? "80px" : "14px"};
`;

const Name = styled.div`
    float: left;
    font-weight: bold;
    font-size: 16px;
    width: 100%;
    display: inline-flex;
`;
const ElementsBar = styled.div`
    width: 100%;
    display: inline-flex;
    font-size: 14px;
    margin-top: 14px;
`;
const ElementUnit = styled.span`
    margin: 3px;
    background: #b57c00;
    padding: 6px;
`;

class Character extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expanded: false
        };
        this.toggleExpandedCard = this.toggleExpandedCard.bind(this);
    }
    validateField(field) {
        if (!field) {
            return false;
        }
        field = field.toUpperCase();
        return !(field === 'N/A' || field === 'NONE' || field === 'UNKNOWN');

    }

    toggleExpandedCard() {
        this.setState({
            expanded: !this.state.expanded
            }
        );
    }

    render() {
        const {data} = this.props;

        return (
            <Card onClick={this.toggleExpandedCard} isExpanded={this.state.expanded}>
                <Name>
                    {data.name}
                </Name>
                {this.state.expanded &&
                <ElementsBar>
                    {this.validateField(data.height) && <ElementUnit>Height: {data.height}</ElementUnit>}
                    {this.validateField(data.gender) && <ElementUnit>Gender: {data.gender}</ElementUnit>}
                    {this.validateField(data.mass) && <ElementUnit> Mass: {data.mass}</ElementUnit>}
                </ElementsBar>
                }
            </Card>)
    }
}

export default Character;