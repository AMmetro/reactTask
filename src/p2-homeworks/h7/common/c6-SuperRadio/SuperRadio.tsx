import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./SuperRadio.module.css"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        console.log(e.currentTarget.value)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <div className={s.form_radio_btn}>
            {/*<label key={name + "-" + i}>*/}
                <input
                    type={"radio"}
                    id={o}
                    name={name}
                    checked={ o == value ? true : false}
                    value={o}
                    onChange={onChangeCallback}
                />
            <label key={name + "-" + i} htmlFor={o}>{o}</label>
            {/*    {o}*/}
            {/*</label>*/}
        </div>
    )) : [];

    return (
        <div className={s.wrapper}>
           {mappedOptions}
        </div>
    );
}

export default SuperRadio;
