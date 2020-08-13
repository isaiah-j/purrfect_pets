import React from 'react'
import { connect } from 'react-redux'
import { getPet } from '../../redux/actions'
import { useEffect } from 'react'
import Loader from 'react-loader-spinner'
import { Paper } from '@material-ui/core'
import ModalImage from "react-modal-image";
import {Button} from '@material-ui/core'

import './more-pet-info.styles.scss'
const MorePetInfo = ({ id, errors, isFetching, pet, photo ,getPet }) => {
    useEffect(() => {
        getPet(id)
    }, [])


    useEffect(() => {
        console.log(photo)
    }, [pet])

    if (isFetching) {
        return (
            <Loader
                type="Puff"
                color="#00BFFF"
                height={500}
                width={500}
                timeout={3000} //3 secs
            />
        )
    }

    return (
        <div className='container'>
             <Paper style={{ backgroundImage: `url(${photo})` }} elevation={1} className='header'>
                 <Button color='primary' variant='contained' className='btn'>
                    <ModalImage large={photo}
                        alt='Expand'
                        className='modal'
                    >
                    </ModalImage>
                 </Button>
        
             </Paper>
        </div>
    )
}

const mapStateToProps = state => {
    return { photo: state.pet.pet.photos[0].large, pet: state.pet.pet, isFetching: state.pet.isFetching, errors: state.pet.errors }
}
export default connect(mapStateToProps, { getPet })(MorePetInfo)