import React from "react";
import {UniqueButton} from "../UniqueButton/UniqueButton";
import {UniqueCheckBox} from "../UniqueCheckbox/UniqueCheckbox";
import {UniqueInput} from "../UniqueInput/UniqueInput";

export const CommonTestsStuff = () => {

    return(
        <div>
            <div style={{padding: '10px'}}>
                <UniqueButton buttonTitle={'Test'} size={'Large'} />
            </div>
            <div style={{padding: '10px'}}>
                <UniqueButton buttonTitle={'Test'} size={'medium'} />
            </div>
            <div style={{padding: '10px'}}>
                <UniqueButton buttonTitle={'Test'} size={'small'} />
            </div>
            <div style={{padding: '10px'}}>
                <UniqueCheckBox checkedMode={true} onChangeCheckBox={()=>{}} width={18} height={18} fontSize={8} />
            </div>
            <div style={{padding: '10px'}}>
                <UniqueCheckBox checkedMode={true} onChangeCheckBox={()=>{}} width={35} height={35} fontSize={18} />
            </div>
            <div style={{padding: '10px'}}>
                <UniqueInput width={200} height={30} fontSize={18} />
            </div>
        </div>
    )
}



