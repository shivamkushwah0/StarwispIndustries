import React from "react";
import ConversationBox from "../Components/ConversationBox";
import PostBox from "../Components/PostBox";
import SideBar from "../Components/SideBar";


const ConverSationScreen =  (props) =>
{
    return(

            <div className="row">
                <div className="col-12">
                <PostBox add_post = {props.add_post}/>
                <ConversationBox conversations={props.conversations} />
                </div>
                
            </div>
            
        
        
    )
}

export default ConverSationScreen;