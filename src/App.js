import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchNewCharacters } from './store/actions/actions';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import Character from './components/Character/character';

const Container = styled.div`
  text-align: center;
`;
const Header = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;
const Button = styled.button`
    margin: 10px 20px;
    height: 40px;
    width: 84px;
    background: darkslategray;
    font-size: 15px;
    color: white;
`;

const App = () => {
    const [loading, setLoading] = useState(false);

    const characters = useSelector(state => state.starwars.results, shallowEqual);
    const currentPage = useSelector(state => state.starwars.current, shallowEqual);
    const previousPage = useSelector(state => state.starwars.previous, shallowEqual);
    const nextPage = useSelector(state => state.starwars.next, shallowEqual);

    const dispatch = useDispatch();

    useEffect(()=>{
        getNextCharacters(currentPage);
    },[]);

    const getNextCharacters = pageUrl =>{
        setLoading(true);
        dispatch(fetchNewCharacters(pageUrl)).then(()=>{
            setLoading(false);
        })
    };

    return (
        <Container>
            <Header>React Wars</Header>
            {loading ?
                <Loader type="ThreeDots" color="darkslategray"/> :
                <div>
                    {characters.map(character => (
                        <Character key={character.name} data={character}/>
                    ))}
                    <br/>
                    {previousPage && <Button onClick={() => getNextCharacters(previousPage)}>Previous</Button>}
                    {nextPage && <Button onClick={() => getNextCharacters(nextPage)}>Next</Button>}
                </div>
            }
        </Container>
    );
};

export default App;