import { COMPARING, COMPLETE, GET_BOARD_FAILURE, GET_BOARD_REQUEST, GET_BOARD_SUCCESS, RESET, TOGGLE_CARD, UPDATE_ITEMS_ACOMPARING, UPDATE_ITEMS_DISPLAY } from "../../constants/PokeMemoryConst";


const initialState={
    attempts: 0,
    complete: false,
    comparing: false,
    cards:[],
    itemsComparing: [],
    loading: false,
    error:''
}

const pokeMemory= (state=initialState,{type,payload}) =>{

    switch(type){

        case GET_BOARD_REQUEST:
            return{
                ...state,
                loading: true
            }

        case GET_BOARD_SUCCESS:
            return{
                ...state,
                loading: false,
                cards: payload,
                error: ''
            }
        
        case GET_BOARD_FAILURE:
            return{
                ...state,
                loading: false,
                error: payload
            }

        case TOGGLE_CARD:
            return{
                ...state,
                attempts: state.attempts+1
            }
        
        case COMPARING:
            return{
                ...state,
                comparing: !state.comparing
            }

        case UPDATE_ITEMS_ACOMPARING:
            return{
                ...state,
                itemsComparing: payload
            }
        
        case UPDATE_ITEMS_DISPLAY:
            return{
                ...state,
                cards: payload
            }
        
        case RESET:
            return{
                attempts: 0,
                complete: false,
                comparing: false,
                cards:[],
                itemsComparing: [],
                loading: false,
                error:''
            }
        case COMPLETE:
            return{
                ...state,
                complete: true,
            }

        default: return state;
    }
}

export default pokeMemory;