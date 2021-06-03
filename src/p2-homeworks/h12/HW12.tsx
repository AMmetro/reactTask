import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from "../h10/bll/store"
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import s from "./HW12.module.css";
import {changeThemeC} from "./bll/themeReducer"


const themes = ['dark', 'red', 'some'];

function HW12() {

    const theme=useSelector<AppStoreType,string>(state=>state.theme["theme"])
    const dispatch=useDispatch()

    const [value, setOption] = useState(themes[0]);

    const onChangeOption=(value:string)=>{
        setOption(value)
        dispatch(changeThemeC(value))
    }

    return (

           <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <hr/>
            <div>
                <SuperSelect
                    options={themes}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={"radio"}
                    options={themes}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
        </div>
    );
}

export default HW12;
