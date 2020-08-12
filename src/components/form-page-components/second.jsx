import React from 'react'
import { TextField, Button } from '@material-ui/core'

import './form.styles.scss'

const Second = ({nextStep, prevStep}) => {
    return (
        <form>
            <div className='form-fields'>
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" />
                <TextField id="outlined-basic" label="Outlined" />
            </div>
            <div className='navigation-buttons'>
                <Button color='default' onClick={prevStep}>Back</Button>
                <Button color='secondary' onClick={nextStep}>Continue</Button>
            </div>
        </form>
    )
}

export default Second