import { Action } from "../../utils/types"
import { ACTIONS } from "./LocationConstants"


const initialState = {
    deliveryLatitude:0,
    deliveryLongitude:0
}

export default (state = initialState, action: Action) => {
    
    switch(action.type) {
        case ACTIONS.SAVE_LOCATION :{
            return {
                ...state,
                deliveryLatitude : action.payload.latitude,
                deliveryLongitude : action.payload.longitude
            }
        }
    }
}