import React from "react";
import st from './UniqueInput.module.css'

export const UniqueInput = ({
    width,
    height,
    fontSize,
    type,

} : {
    width: number
    height: number
    fontSize: number
    type?: 'email' | 'password'
}) => {

    const commonStyles = {
        outline: 'none',
        border: '3px solid gray',
        width: `${width}px`,
        height: `${height}px`,
        fontSize: `${fontSize}px`,
        fontFamily: "'Lekton', sans-serif",
    }

    return<>
        <input style={commonStyles} className={st.inputStyles} type={type} />
    </>
}



