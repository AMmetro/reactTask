import React, {useState, ChangeEvent} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3"


type GreetingContainerPropsType = {
    users: Array<UserType>                                 // fixed
    addUserCallback: (name: string) => void                  // fixed
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("");           // fixed
    const [error, setError] = useState<boolean>(false);      // fixed

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {   // fixed
        setName(e.target.value);                                      // fixed
        if (e.target.value.length === 0 || !e.target.value.trim()) {
                     setError(true)
                } else {
                    setError(false)
                }
    };



    const addUser = () => {                                          //fixed
        if (name.length === 0 || !name.trim()) {
        } else {
            alert(`Hello ${name} !`)
            addUserCallback(name)
            setName("")
        }
    };

    let totalUsers = users.length;                                  // fixed

    return (

        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
  
    );
}

export default GreetingContainer;
