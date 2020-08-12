import React from 'react'
import './form-page.styles.scss'

import useForm from '../../utils/hooks/useForm'

import First from '../../components/form-page-components/first'
import Second from '../../components/form-page-components/second'
import third from '../../components/form-page-components/second'

const INITIAL_VALUES = {}

const FormPage = () => {
    // setup form state and "step" state to determine which form to render
    // Create each form component and render them based off the value of step
    // make sure all of the forms are handling the same form state
    const [formValues, handleChange] = useForm(INITIAL_VALUES)
    const handleSubmit = () => {
        // Send an action that queries for the adopted animals using the form values
        console.log(formValues)
    }

}

export default FormPage