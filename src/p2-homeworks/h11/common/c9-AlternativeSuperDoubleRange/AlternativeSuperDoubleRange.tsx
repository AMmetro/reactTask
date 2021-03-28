import React from "react";
import s from "./SuperDoubleRange.module.css";

//@ts-ignore
import Nouislider from 'react-nouislider';
import "../../../../../node_modules/react-nouislider/example/nouislider.css"


type signal=[number,number]

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const AlternativeSuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const onChangeCallback=(e:signal)=>{
        onChangeRange && onChangeRange(e)
    }

    return (
        <>
             DoubleRange
        <div>
            <div className={s.slider_Box}>
                <Nouislider
                    range={{min: 10, max: 200}}
                    start={[value&&value[0], value&&value[1]]}
                    onChange={(e:signal)=>onChangeCallback(e)}
                    tooltips />
            </div>

            {/*<input*/}
            {/*    type={"range"}*/}
            {/*    // value={[value1,value2]}*/}
            {/*    min={10}*/}
            {/*    max={50}*/}
            {/*    step={10}*/}

                {/*// onChange={onChangeCallback}*/}
                {/*// className={finalRangeClassName}*/}

                {/*//{...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)*/}
            {/*/>*/}
        </div>
        </>
    );
}

export default AlternativeSuperDoubleRange;
