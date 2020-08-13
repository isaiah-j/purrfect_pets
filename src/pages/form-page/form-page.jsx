import React from 'react'
import './form-page.styles.scss'

import useForm from '../../utils/hooks/useForm'
import useStep from '../../utils/hooks/useStep'
import { useHistory } from 'react-router-dom'
import First from '../../components/form-page-components/first'
import Second from '../../components/form-page-components/second'
import Third from '../../components/form-page-components/third'
import { getPets } from '../../redux/actions'
import { connect } from 'react-redux'

const INITIAL_VALUES = {
    location: 'TX',
    type: 'dog',
    breed: 'pitbull',
    size: 'medium'
}

const FormPage = (props) => {
    // setup form state and "step" state to determine which form to render
    // Create each form component and render them based off the value of step
    // make sure all of the forms are handling the same form state
    const [formValues, handleChange] = useForm(INITIAL_VALUES)
    const [step, setStep, prevStep, nextStep] = useStep(1)
    let history = useHistory()


    const handleSubmit = () => {
        // Send an action that queries for the adopted animals using the form values
        // console.log(formValues)
        history.push('/pets')
        props.getPets(formValues)
    }
    switch (step) {
        case 1:
            return <First formValues={formValues} step={step} handleChange={handleChange} nextStep={nextStep}></First>
        case 2:
            return <Second formValues={formValues} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} handleSubmit={handleSubmit}></Second>
        case 3:
            return <Third formValues={formValues} handleChange={handleChange} prevStep={prevStep} handleSubmit={handleSubmit}></Third>
    }
}

const mapStateToProps = () => {
    return { worked: true }
}
export default connect(mapStateToProps, { getPets })(FormPage)