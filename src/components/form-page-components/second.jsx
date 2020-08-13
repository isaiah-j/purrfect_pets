import React from 'react'
import { TextField, Button } from '@material-ui/core'
import './form.styles.scss'

const Second = ({ nextStep, prevStep, handleChange, handleSubmit }) => {
    return (
        <form>
            <div className='form-fields'>
                <TextField onChange={handleChange} label='age' id="standard-basic" name='age' />
                <TextField onChange={handleChange} id="filled-basic" label="size" name='size' />
                <TextField onChange={handleChange} id="outlined-basic" label="color" name='color' />
            </div>
            <div className='navigation-buttons-submit'>
                <Button color='primary' onClick={handleSubmit} variant='outlined'>Submit</Button>
                <Button color='default' onClick={prevStep}>Back</Button>
            </div>
        </form>
    )
}

export default Second