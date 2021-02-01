import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from './navigation.module.css';
import PATH from "../Routes"


// export const PATH = {
//     PRE_JUNIOR: "/pre-junior",
//     JUNIOR: "/junior",
//     JUNIOR_PLUS: "/juniorPlus"
//     // added addition paths
// }

function Navigation() {

    const [activeMenu, setActiveMenu] = useState<string> ("");

    const selectActive=(link:string)=>{
        if (link==="link1") {setActiveMenu("link1")}
        if (link==="link2") {setActiveMenu("link2")}
        if (link==="link3") {setActiveMenu("link3")}
    }

    let link_status1 = activeMenu==="link1" ? s.active : ""
    let link_status2 = activeMenu==="link2" ? s.active : ""
    let link_status3 = activeMenu==="link3" ? s.active : ""
    console.log("link_status1=     " + link_status1)

    return (
        <div>

        <input type="checkbox" id="hmt" className={s.hidden_menu_ticker}/>

                    {/*this block label is button */}
                   <label className={s.btn_menu} htmlFor="hmt">
                     <span className={s.first}></span>
                     <span className={s.second}></span>
                     <span className={s.third}></span>
                   </label>

               <ul className={s.hidden_menu}>
                  <li><NavLink onClick={()=>selectActive("link1")} className={link_status1} to="/pre-junior">Pre-junior </NavLink></li>
                  <li><NavLink onClick={()=>selectActive("link2")} className={link_status2} to="/junior">Junior </NavLink></li>
                  <li><NavLink onClick={()=>selectActive("link3")} className={link_status3} to="/juniorPlus">JuniorPlus </NavLink></li>
               </ul>



        </div>
    );
}

export default Navigation;

