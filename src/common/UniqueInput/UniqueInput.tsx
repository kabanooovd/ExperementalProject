import React from "react";
import st from './UniqueInput.module.css'

export const UniqueInput = ({
    width,
    height,
    fontSize,
} : {
    width: number
    height: number
    fontSize: number
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
        <input style={commonStyles} className={st.inputStyles}>

        </input>
    </>
}



