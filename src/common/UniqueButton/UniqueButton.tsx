import React from "react";
import st from './UniqueButton.module.css'

type ButtonSize_T = 'Large' | 'medium' | 'small'

export const UniqueButton = React.memo(({
    uniqueOnClick,
    disabled,
    buttonTitle,
    size,
    type,
} : {
    uniqueOnClick?: () => void
    disabled?: boolean
    buttonTitle: string
    size: ButtonSize_T | undefined
    type?: 'submit'
}) => {

    // const buttonStyle = size === 'Large' ? st.bigButtonStyles : ''

    let buttonStyle
    if (size === 'Large') buttonStyle = st.bigButtonStyles
    if (size === 'medium') buttonStyle = st.midButtonStyles
    if (size === 'small') buttonStyle = st.smallButtonStyles

    return <button className={buttonStyle}
                   onClick={uniqueOnClick}
                   disabled={disabled}
                   type={type}
    >
        {buttonTitle}
    </button>
})





