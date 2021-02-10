import React from "react";
import Message from "./Message";


const messageData: dataType = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Andrei",
    message: "What type Data you put? 'Any' are not allowed!",
    time: "22:00",
};

const messageData2: dataType = {
    avatar: "https://i.ytimg.com/vi/Tp9B6gDCXnU/maxresdefault.jpg",
    name: "React",
    message: " T_y_P_e_S nothing is sure everything is possible ",
    time: "22:01",
};

export type dataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function HW1() {

    return (
        <div>
            <hr/>
            <div> homeworks 1 </div>

            <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
            />


            <hr/>
            <Message
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time}
            />

            <hr/>
        </div>
    );
}

export default HW1;
