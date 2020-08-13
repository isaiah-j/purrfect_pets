import React from 'react'
import { connect } from 'react-redux'
import { getPet } from '../../redux/actions'
import { useEffect } from 'react'

const MorePetInfo = ({ id, errors, isFetching, pet, getPet }) => {
    useEffect(() => {
        getPet(id)
        console.log(isFetching)
    },[])

    return (
        <div>
            <h1>{pet.name}</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return { pet: state.pet.pet, isFetching: state.pet.isFetching, errors: state.pet.errors }
}
export default connect(mapStateToProps, { getPet })(MorePetInfo)