import {notes} from "../data/Notes";

export const Notes = (state = notes , action) => {

    switch (action.type) {
        case "add-note" : { 
            const data = [{
                title : action.payload.title ,
                body : action.payload.body
            }]
            return  data.concat(state) ;
        }
        default : return state;
    }
}