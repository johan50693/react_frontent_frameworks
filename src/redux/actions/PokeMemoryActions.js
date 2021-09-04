import axios from 'axios';
import {GET_BOARD_FAILURE,GET_BOARD_REQUEST,GET_BOARD_SUCCESS, POKE_API, TOGGLE_CARD,COMPARING, UPDATE_ITEMS_ACOMPARING, UPDATE_ITEMS_DISPLAY, RESET, COMPLETE} from '../../constants/PokeMemoryConst';
import { v4 as uuidv4 } from 'uuid';
import shuffle from 'lodash.shuffle';

// ACTIONS
export const getPokemonListRequest= () =>{
    return{
        type: GET_BOARD_REQUEST
    }
}

export const getPokemonListSuccess= (pokemon) =>{
    return{
        type: GET_BOARD_SUCCESS,
        payload: pokemon
    }
}

export const getPokemonListFailure= (error) =>{
    return{
        type: GET_BOARD_FAILURE,
        payload: error
    }
}

export const toggleCard= ()=>{
    return{
        type: TOGGLE_CARD,
    }
}

export const isComparing= () => {
    return{
        type: COMPARING
    }
}

export const updateItemsComparing= (items) => {
    return{
        type: UPDATE_ITEMS_ACOMPARING,
        payload: items
    }
}

export const updateItemsDisplay= (items) => {
    return{
        type: UPDATE_ITEMS_DISPLAY,
        payload: items
    }
}

export const reset= () => {
    return{
        type: RESET,
    }
}

export const completeGame= () => {
    return{
        type: COMPLETE,
    }
}

export const resetGameCards= (col=4,fil=3)=>{
    return (dispatch) =>{
        dispatch(reset());
        const limit = (col*fil)/2;
        const init=Math.floor(Math.random() * 100);
        dispatch(getPokemonListRequest());

        axios.get(POKE_API+`?offset=${init}&limit=${limit}`)
            .then((response) =>{
                const {results} =response.data;
                let newArray=[];
                results.forEach(element => {
                    element.id=uuidv4();
                    element.complete=false;
                    element.display=false;
                    newArray.push(element);
                    const copyElement= {...element};
                    copyElement.id=uuidv4();
                    newArray.push(copyElement);
                });
                newArray.sort(function() { return Math.random() - 0.5 });
                // shuffle(newArray);
                dispatch(getPokemonListSuccess(newArray));
            })
            .catch( (err) =>{
                dispatch(getPokemonListFailure(err));
            });
    }
}

const getPokemonList= (col=4,fil=3)=> {

    return (dispatch) =>{
        const limit = (col*fil)/2;
        const init=Math.floor(Math.random() * 100);
        dispatch(getPokemonListRequest());

        axios.get(POKE_API+`?offset=${init}&limit=${limit}`)
            .then((response) =>{
                const {results} =response.data;
                let newArray=[];
                results.forEach(element => {
                    element.id=uuidv4();
                    element.complete=false;
                    element.display=false;
                    newArray.push(element);
                    const copyElement= {...element};
                    copyElement.id=uuidv4();
                    newArray.push(copyElement);
                });
                newArray.sort(function() { return Math.random() - 0.5 });
                // shuffle(newArray);
                dispatch(getPokemonListSuccess(newArray));
            })
            .catch( (err) =>{
                dispatch(getPokemonListFailure(err));
            });
    }

}

export default getPokemonList;