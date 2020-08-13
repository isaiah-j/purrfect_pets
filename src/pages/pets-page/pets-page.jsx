import React from 'react'
import './pets-page.styles.scss'
import { connect } from 'react-redux'
import Pet from '../../components/Pet/Pet'

const PetsPage = ({ pets, isFetching, errors }) => {
    return (
        <div className="container">
            <div className='pets-container'>
                {
                    pets?.map((pet) => {
                        const { name, photos , description} = pet
                        console.log(name)
                        return <Pet name={name} photos={photos} description={description}></Pet>
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { pets: state.pets.pets, isFetching: state.pets.isFetching, errors: state.pets.errors }
}
export default connect(mapStateToProps, {})(PetsPage)