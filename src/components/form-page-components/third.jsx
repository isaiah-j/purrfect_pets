import React from 'react'
import { TextField, Button } from '@material-ui/core'

import './form.styles.scss'

const Third = ({ handleSubmit, prevStep }) => {
    return (
        <form>
            <div className='form-fields'>
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" />
                <TextField id="outlined-basic" label="Outlined" />
            </div>
            <div className='navigation-buttons-submit'>
                <Button color='primary' onClick={handleSubmit} variant='outlined'>Submit</Button>
                <Button color='default' onClick={prevStep}>Back</Button>
            </div>
        </form>
    )
}

export default Third