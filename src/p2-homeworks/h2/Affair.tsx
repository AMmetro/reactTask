import React from "react";
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    // affair: any // need to fix any
               affair: AffairType // need to fix any
    deleteAffairCallback: (_id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (dellId:number) => {
            props.deleteAffairCallback(dellId)};// need to fix

        const curentAffair=props.affair

    return (
        <div>

            <input type="checkbox" checked={true}/>{curentAffair.name} <span>priority--</span>{curentAffair.priority }

            <button onClick={(dellId)=>deleteCallback(curentAffair._id)}>X</button>

        </div>
    );
}

export default Affair;
