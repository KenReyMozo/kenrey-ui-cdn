import React from "react"

type InputT = {
    label? : string
} & React.ComponentProps<'input'>

const Input : React.FC<InputT> = (props) => {
    const {
        label,
        className,
        ...cleanProps
    } = props
    return (
        <div className={'input-container'}>
            <label>{label}</label>
            <div>
                
                <input className={`input ${className ?? ''}`} {...cleanProps}/>
            </div>
        </div>
        )
}

export default Object.assign(Input)