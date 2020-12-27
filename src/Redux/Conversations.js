import {conversations} from "../data/conversation"

export const Conversations = (state = conversations , action) => {

    switch (action.type) {
        case "add" : { 
            const d = new Date();
            
            const data = [{
                image : "assets/images/Rectangle.png",
                title: "Username" ,
                time : d.toLocaleTimeString(),
                body : action.payload,
                comments : []
            }]
            return data.concat(state);
        }
        default : return state;
    }
}