import { UPDATE_CHIP_POSITION } from "../../constants/ConnectFourConst";


export const updateChipPosition= (payload) =>{
    return{
        type: UPDATE_CHIP_POSITION,
        payload: payload
    }
}