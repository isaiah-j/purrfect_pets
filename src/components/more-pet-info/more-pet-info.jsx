import React from 'react'
import { connect } from 'react-redux'
import { getPet } from '../../redux/actions'
import { useEffect } from 'react'
import Loader from 'react-loader-spinner'

const MorePetInfo = ({ id, errors, isFetching, pet, getPet }) => {
    useEffect(() => {
        getPet(id)
        console.log(isFetching)
    }, [])

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
        <div>
            <h1></h1>
        </div>
    )
}

const mapStateToProps = state => {
    return { pet: state.pet.pet, isFetching: state.pet.isFetching, errors: state.pet.errors }
}
export default connect(mapStateToProps, { getPet })(MorePetInfo)