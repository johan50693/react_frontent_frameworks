import "./PokeMemory.css";
 import {useDispatch, useSelector} from 'react-redux';
import getPokemonList, { reset, resetGameCards } from "../../redux/actions/PokeMemoryActions";
import { useEffect, useState } from "react";
import Card from '../../components/Card';
import { Score } from "../../components/Score/Score";

const PokeMemory= () => {
    
    const stateMemory= useSelector(state => state.pokeMemory);
    const dispatch= useDispatch();
    
    useEffect(() => {
        dispatch(getPokemonList());
    }, [])

    const handleClickReset=(col,fil)=>{
        dispatch(resetGameCards(col,fil));
    }

    return(
        <div className="container" >
            <div className="gameHeader">
                {
                    (stateMemory.complete===true) ? 
                    (
                        <div className="contentHeader">
                            <h1>
                                Felicidades!! Juego completado !!
                            </h1>
                        </div>
                    ) : ''
                }
                
            </div>

            <div className="mainContainer">
                <div className="contentOptions">
                    <div className="optionsItems">
                        <div className="optionInpair">
                            <h1 >
                                React Memory Game
                            </h1>
                        </div>
                        <div className="optionPair">
                            <Score/>
                        </div>
                        <div className="optionInpair" onClick={ () => handleClickReset(4,3)}>
                            <h1 >
                                Reiniciar
                            </h1>
                        </div>
                        <div className="optionPair" onClick={ () => handleClickReset(4,3)}>
                            <h1>
                                4x3
                            </h1>
                        </div>
                        <div className="optionInpair" onClick={ () => handleClickReset(4,4)}>
                            <h1 >
                                4x4
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="contentTablero">
                    {
                        stateMemory && stateMemory.cards.map(pokemon => <Card key={pokemon.id} data={pokemon} />)
                    }
                </div>
            </div>

            <div className="gameFooter">
                {/* <h1>Footer</h1> */}
            </div>
        </div>
    );
}

export default PokeMemory;