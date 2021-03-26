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

    const mappedOptions: any[] = options ? options.map((elem, i) => <option
            key={elem + "-" + i}
            value={elem}
            selected={i == 1 ? true : false}>
            {elem}
        </option>)
        : [];


    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {

        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    return (

            <select onChange={onChangeCallback} {...restProps}>
               {mappedOptions}
            </select>

    );
}

export default SuperSelect;
