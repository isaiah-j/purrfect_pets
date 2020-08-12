import {useState} from 'react'
import PetsPage from '../../pages/pets-page/pets-page'

const useForm = (initialValues) => {
    const [formValues, setFormValues] = useState(initialValues)
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    return [formValues, handleChange]
}

export default useForm