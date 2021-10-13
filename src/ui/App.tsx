import React from 'react';
import st from './App.module.css';
import {UniqueButton} from "../common/UniqueButton/UniqueButton";
import {UniqueCheckBox} from "../common/UniqueCheckbox/UniqueCheckbox";
import {UniqueInput} from "../common/UniqueInput/UniqueInput";

function App() {


    return (
        <div className={st.App}>
            <div>
                <UniqueButton buttonTitle={'Click'} size={'Large'}/>
            </div>
            <div>
                <UniqueCheckBox checkedMode={true}
                                onChangeCheckBox={() => {}}
                                width={35}
                                height={35}
                                fontSize={25}
                />
            </div>
            <div>
                <UniqueInput width={300}
                             height={35}
                             fontSize={26}
                />
            </div>
        </div>
    );
}

export default App;
