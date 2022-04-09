import { CONTINUE_GAME, RESET_GAME, UPDATE_CHIP_POSITION, UPDATE_POINTS_WINNER } from "../../constants/ConnectFourConst";

const initialState={
    chipsPositions: {},
    playerTurn: "#ff010b",
    gameStatus: false,
    colums: 8,
    rows: 6,
    red:0,
    yellow:0,
}

const ConnectFour= (state=initialState,{type,payload}) =>{

    switch(type){

        case UPDATE_CHIP_POSITION:
            return{
                ...state,
                chipsPositions: payload.chipsPositions,
                playerTurn: payload.playerTurn,
                gameStatus: payload.gameStatus,
            }
        
        case UPDATE_POINTS_WINNER:
            return{
                ...state,
                red: payload.red,
                yellow: payload.yellow,
                // chipsPositions: {},
            }

            case CONTINUE_GAME:
                return{
                    ...state,
                    gameStatus: false,
                    chipsPositions: {},
                }

            case RESET_GAME:
                return{
                    chipsPositions: {},
                    playerTurn: "#ff010b",
                    gameStatus: false,
                    colums: 8,
                    rows: 6,
                    red:0,
                    yellow:0,
                }

        default: return state;
    }
}

export default ConnectFour;