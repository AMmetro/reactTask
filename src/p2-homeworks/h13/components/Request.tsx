import React, {DetailedHTMLProps, InputHTMLAttributes, useState} from "react";
import {API} from "../Api"

export type changeButton = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type ServerResponseType = {
    type: "cors",
    url: "https://neko-cafe-back.herokuapp.com/auth/test",
    status: number,
    ok: boolean,
    redirected: boolean
}

function Request() {

    const [checked, setChescet] = useState(false)
    const [response, setResponse] = useState()

    const clickHandle = () => {
        API.getData(!checked)
            .then((res: ServerResponseType) => {
                console.log(res)
                setResponse(res)
            })
            .catch((error: any) => console.log(error.response ? error.response.data.errorText : error.message))
    }


    const changeHandle = (e: changeButton) => {
        setChescet(!checked)
    }


    return (

        <div>
            <button onClick={clickHandle}>button</button>
            <input onChange={changeHandle} checked={checked} type="checkbox"/>
            <br/>
            <p> {response !== undefined ? response.url : null} </p>
            <p> {response !== undefined ? response.status : null} </p>
            <span></span>
        </div>
    );
}

export default Request;
