import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";



type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    console.log("НЕ ТИПИЗИРОВАНЫ ПРОПСЫ")

    const mappedOptions: any[] = options ? options.map((elem, i) => <option
            key={elem + "-" + i}  // map options with key
            value={elem}
            selected={i == 1 ? true : false}>
            {elem}
        </option>)
        : [];


    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    return (
        //  value в restProps перебивает "selected=true/false"

            <select onChange={onChangeCallback} {...restProps}>
               {mappedOptions}
            </select>

    );
}

export default SuperSelect;
