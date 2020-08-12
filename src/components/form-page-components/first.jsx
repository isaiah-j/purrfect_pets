import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './form.styles.scss'
const First = ({nextStep, step}) => {
    console.log(step)
    return (
        <form>
            <div className='form-fields'>
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" />
                <TextField id="outlined-basic" label="Outlined" />
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