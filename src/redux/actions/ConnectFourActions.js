import { CONTINUE_GAME, RESET_GAME, UPDATE_CHIP_POSITION, UPDATE_POINTS_WINNER } from "../../constants/ConnectFourConst";


export const updateChipPosition= (payload) =>{
    return{
        type: UPDATE_CHIP_POSITION,
        payload: payload
    }
}

export const updatePointWinner= (payload) =>{
    return{
        type: UPDATE_POINTS_WINNER,
        payload: payload
    }
}

export const continueGame= (payload) =>{
    return{
        type: CONTINUE_GAME,
    }
}

export const resetGame= (payload) =>{
    return{
        type: RESET_GAME,
    }
}