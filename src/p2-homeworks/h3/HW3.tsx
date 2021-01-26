import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";

// types
export type UserType = {
    _id: string                                  // fixed
    name: string                                 // fixed
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]);         // fixed

    const addUserCallback = (name: string) => {                                // fixed
           let newUser={_id:v1(), name}
           setUsers([...users, newUser]);                                // fixed
    }




    return (
        <div>
            <hr/>
            homeworks 3

             <GreetingContainer users={users}
                                addUserCallback={addUserCallback}/>

            <hr/>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;
