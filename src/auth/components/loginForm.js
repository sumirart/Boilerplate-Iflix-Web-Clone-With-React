import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, FormControl } from "react-bootstrap";

const required = value => value ? undefined : 'Required!'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div style={{ marginBottom: 10 }}>
            {touched && ((error && <span style={{ fontWeight: "bold", color: "red" }}>{error}</span>))}
            <FormControl {...input} placeholder={label} type={type} />
    </div>
)

const LoginForm = (props) => {
    const { handleSubmit, submitting } = props
    return (
        <form onSubmit={handleSubmit} style={{ marginTop: 50, marginBottom: 50 }}>
            <Field name="username" type="text"
                component={renderField} label="Username"
                validate={required}
            />
            <Field name="password" type="password"
                component={renderField} label="Password"
                validate={required}
            />
            <div style={{ marginTop: 10 }}>
                <Button type="submit" disabled={submitting} color="primary" >Submit</Button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'LoginForm' // a unique identifier for this form
})(LoginForm)