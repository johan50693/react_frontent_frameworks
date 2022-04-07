import { combineReducers } from "redux";
import pokeMemory from './PokeMemoryReducer';
import ConnectFour from './ConnectFourReducer';

const rootReducers= combineReducers({
    pokeMemory,
    ConnectFour,
});

export default rootReducers;