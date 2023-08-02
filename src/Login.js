import { useState } from "react";
import './App.css';
import { Formik } from 'formik';
import * as Yup from "yup";


export const Login = () => {
    const [details, setDetails] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e, property) => {
        setDetails({
            ...details,
            [property]: e.target.values
        })
    }
    const validationschema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email is not vaild"),
        password: Yup.string().required("Password is required").min(8, "password must be more than 8  charectors")
    })
    return (

        <Formik initialValues={{
            email: "",
            password: ""
        }} validationschema={validationschema} onSubmit={() => { }}>
            {
                ({
                    values, errors, handleChange, handlesubmit
                }) => {
                    return (
                        <form onSubmit={handlesubmit}>
                            <h1 className="login">login page</h1><br/>
                            Email<input
                                name="email"
                                onChange={handleChange}
                            /><br/>
                            {errors.email ? errors.email : ""}<br/>
                            Password<input
                                type="password"
                                name="password"
                                onChange={handleChange} /><br/>
                            {errors.password ? errors.password : ""}
                            <br />
                            <button type="submit">LOGIN</button><br /><br />
                        </form>
                    )
                }
            }
        </Formik>
    );
}
