import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import AlternativeSuperDoubleRange from "./common/c9-AlternativeSuperDoubleRange/AlternativeSuperDoubleRange";

type dataType=number[]

function HW11() {
    const [value1, setValue1] = useState(40);
    const [value2, setValue2] = useState(80);

    const setAllValue=(SliderData:dataType)=>{
        setValue1(SliderData[0])
        setValue2(SliderData[1])
    }

    const setValue=(data:dataType)=>{
        setValue1(data[0])
        setValue2(data[1])
    }



    return (
        <div>
            <hr/>
            homeworks 11

            <div>
                <span>{value1}</span>
                <SuperRange value={value1} onChangeRange={setValue1}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={[value1,value2]}
                     onChangeRange={setAllValue}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
               <AlternativeSuperDoubleRange onChangeRange={setValue}/>
            <hr/>
        </div>
    );
}

export default HW11;
