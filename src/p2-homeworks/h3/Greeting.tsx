import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string                                                       // fixed
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void           // fixed
    addUser: ()=>void                                                   // fixed
    error: boolean                                                     // fixed
    totalUsers: number                                                 // fixed
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = error ? s.error : s.valid
    const hint = error ? "input valid name" : "add more name"

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span className={s.someClass}>total Users={totalUsers}</span>
            <div>{hint}</div>
        </div>
    );
}

export default Greeting;
