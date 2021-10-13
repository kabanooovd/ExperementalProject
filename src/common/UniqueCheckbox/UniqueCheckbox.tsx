import React from "react";
import st from './UniqueChechBox.module.css'

export const UniqueCheckBox = React.memo(({
    checkedMode,
    onChangeCheckBox,
    width,
    height,
    fontSize,
} : {
    checkedMode: boolean
    onChangeCheckBox: () => void
    width: number
    height: number
    fontSize: number
}) => {

    const commonStyles = {
        width: `${width}px`,
        height: `${height}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: '#424141',
        color: 'yellowgreen',
        fontSize: `${fontSize}px`,
        // fontFamily: "'Lekton', sans-serif",
    }

    return <>
        {
            checkedMode
                ?
                <div style={commonStyles}
                     className={st.checkboxFalse}
                     onClick={onChangeCheckBox}
                >
                    &#10004;
                </div>
                :
                <div style={commonStyles}
                     className={st.checkboxTrue}
                     onClick={onChangeCheckBox}
                />
        }
    </>
})
