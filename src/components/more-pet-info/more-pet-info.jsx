import React from 'react'
import {connect} from 'react-redux'

const MorePetInfo = ({id}) => {
return <h1>Your id is {id}</h1>
}

const mapStateToProps = state => {
    return {state}
}
export default connect(mapStateToProps, {})(MorePetInfo)