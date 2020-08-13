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
                        const { id, name, photos, description } = pet
                        let photo = photos[0]?.large || 'Some cute photo'
                        return <Pet key={id} id={id} name={name} photo={photo} description={description}></Pet>
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