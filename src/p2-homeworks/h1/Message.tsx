import React from "react";
import styles from './Message.module.css';
import {dataType} from "./HW1";



function Message(props:dataType) {

    return (

        <div className={styles.container}>

            <div className={styles.blockRight}>
                Hello, {props.name}
                <i><p className={styles.textMessage}>{props.message}</p></i>
                <p className={styles.time}>{props.time}</p>
            </div>

            <div className={styles.clear}></div>

            <div className={styles.avatarHolder}>
                <img className={styles.avatar}
                     src={props.avatar}
                     alt={"avatar"}/>
            </div>

            <div className={styles.clear}></div>
            <div className={styles.blockCenter}></div>

        </div>

    );
}

export default Message;



