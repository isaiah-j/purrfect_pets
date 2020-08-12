import React from 'react'
import './form-page.styles.scss'

import useForm from '../../utils/hooks/useForm'
import useStep from '../../utils/hooks/useStep'

import First from '../../components/form-page-components/first'
import Second from '../../components/form-page-components/second'
import Third from '../../components/form-page-components/third'

const INITIAL_VALUES = {
    location: '',
    type: [],
    breed: [],
    age: ''
}

const FormPage = () => {
    // setup form state and "step" state to determine which form to render
    // Create each form component and render them based off the value of step
    // make sure all of the forms are handling the same form state
    const [formValues, handleChange] = useForm(INITIAL_VALUES)
    const [step, setStep, prevStep, nextStep] = useStep(1)
    console.log(step)

    const handleSubmit = () => {
        // Send an action that queries for the adopted animals using the form values
        // console.log(formValues)
        console.log('Submitted')
    }
    switch (step) {
        case 1:
            return <First step={step} handleChange={handleChange} nextStep={nextStep}></First>
        case 2:
            return <Second handleChange={handleChange} nextStep={nextStep} prevStep={prevStep}></Second>
        case 3:
            return <Third handleChange={handleChange} prevStep={prevStep} handleSubmit={handleSubmit}></Third>
    }
}

export default FormPage