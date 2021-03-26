import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from 'react-redux'
import { loadingAC } from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import spinerImg from "../h11/common/c7-SuperRange/spiner.gif"



function HW10() {

    const loading=useSelector<AppStoreType>(state=>state.loading)
    const dispatch=useDispatch()

    const setLoading = () => {
          dispatch(loadingAC("true"))
          setTimeout(()=>{
              dispatch(loadingAC("false"))},2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {loading
                ? (
                    <div>
                      <img src={spinerImg}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
