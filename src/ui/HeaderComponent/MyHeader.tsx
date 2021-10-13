import React from "react";
import st from './MyHeader.module.css'
import {UniqueButton} from "../../common/UniqueButton/UniqueButton";

export const MyHeader = () => {

    return(
        <div className={st.headerContainer}>
            <div>
                <h1>WELL COME</h1>
            </div>
            <div className={st.btnRemoteWrapper}>
                <UniqueButton buttonTitle={'Button'} size={'medium'} />
                <UniqueButton buttonTitle={'Button'} size={'medium'} />
                <UniqueButton buttonTitle={'Button'} size={'medium'} />
                <UniqueButton buttonTitle={'Button'} size={'medium'} />
            </div>
        </div>
    )
}

