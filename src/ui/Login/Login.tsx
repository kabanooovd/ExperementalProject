import React from "react";
import st from './Login.module.css'
// import {UniversalButton} from "../UniversalButton/UniversalButton";
import {UniqueButton} from "../../common/UniqueButton/UniqueButton";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
// import {Redirect} from "react-router-dom";

export const Login = () => {


    const minPasswordLength = 5
    const maxPasswordLength = 25

    const dispatch = useDispatch()

    type Values_T = {
        email?: string
        password?: string
        rememberMe?: boolean
    }
    const validate = (values: Values_T) => {
        const errors: Values_T = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length <= minPasswordLength || values.password.length >= maxPasswordLength) {
            errors.password = `Must be longer then ${minPasswordLength} or shorter then ${maxPasswordLength}`;
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate,
        onSubmit: values => {
            formik.resetForm();
            alert(JSON.stringify(values))
        },
    });

    // if (isLogged) {
    //     return <Redirect to={'/'}/>
    // }

    return (
        <div className={st.loginWrapper}>
            <div>
                <h3>You are welcomed to my App</h3>
                <p>Insert your data please</p>
                <p>Email: some@example.com</p>
                <p>Password: your password</p>
            </div>
            <div className={st.formWrapper}>
                <form className={st.formWrapper} onSubmit={formik.handleSubmit}>
                    <div className={st.inputContainerStyles}>
                        <span>
                            Insert email address please:
                        </span>
                        <input type="email"
                               {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email &&
                        <div className={st.errorStyles}>{formik.errors.email}</div>}
                    </div>
                    <div className={st.inputContainerStyles}>
                        <span>
                            Insert password please:
                        </span>
                        <input type="password"
                               {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password &&
                        <div className={st.errorStyles}>{formik.errors.password}</div>}
                    </div>
                    <div className={st.checkboxStyles}>
                        <input type="checkbox"
                               checked={formik.values.rememberMe}
                               {...formik.getFieldProps('rememberMe')}
                        /> Remember me
                    </div>
                    <div className={st.loginButtonStyles}>
                        <UniqueButton type={'submit'}
                                      disabled={false}
                                      buttonTitle={'Login'}
                                      size={'Large'}

                        />
                    </div>
                </form>
            </div>
        </div>
    )
}








