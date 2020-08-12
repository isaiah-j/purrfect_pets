import { useState } from 'react'

const useStep = (INITIAL_STEP) => {
    const [step, setStep] = useState(INITIAL_STEP)
    const prevStep = () => {
        setStep(step - 1)
    }
    const nextStep = () => {
        setStep(step + 1)
        console.log('from use step')
    }
    return [step, setStep, prevStep, nextStep]
}

export default useStep