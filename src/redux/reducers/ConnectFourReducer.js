import { UPDATE_CHIP_POSITION } from "../../constants/ConnectFourConst";

const initialState={
    chipsPositions: {},
    playerTurn: "red",
    gameStatus: "It's red's turn",
    colums: 8,
    rows: 6,
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

        default: return state;
    }
}

export default ConnectFour;