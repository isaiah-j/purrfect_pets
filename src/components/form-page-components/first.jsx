import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './form.styles.scss'
const First = ({nextStep, step, handleChange, formValues}) => {
    console.log(step)
    return (
        <form>
            <div className='form-fields'>
                <TextField value={formValues.location} onChange={handleChange} label='state' id="standard-basic" name='location' />
                <TextField value={formValues.type} onChange={handleChange} id="filled-basic" label="type" name='type'/>
                <TextField value={formValues.breed} onChange={handleChange} id="outlined-basic" label="breed" name='breed'/>
            </div>
            <div className='navigation-buttons'>
                <Link to='/'>
                    <Button color='primary'>Back</Button>
                </Link>
                <Button color='default' onClick={nextStep}>Continue</Button>
            </div>
        </form>
    )
}

export default First