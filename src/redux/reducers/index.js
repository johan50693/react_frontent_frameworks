import { combineReducers } from "redux";
import pokeMemory from './PokeMemoryReducer';

const rootReducers= combineReducers({
    pokeMemory
});

export default rootReducers;