import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import PropTypes from "prop-types";
const Profile = (props) => {
    const handleClick = (fullName) => { alert(`the name of profile user is ${fullName}`) }
    return (
        <div style={{ display: 'grid', gridTemplateColumns:'1fr 1fr', alignItems:'center', justifyItems:'left' }}>
            <div>
                <h1>Name: {props.fullName}</h1>
                <h4>Bio: {props.bio}</h4>
                <h5>Profession: {props.profession}</h5>
            </div>
            <div>
                {props.children}
                <br />
                <br />
                <Button variant='success' style={{borderRadius:'20%'}} onClick={() => handleClick(props.fullName)}>Afficher</Button>
            </div>
        </div>
    )
}
Profile.defaultProps={
    fullName:'your name',
    bio:'bio empty',
    profession:'no profession'
}
Profile.propTypes={
props: PropTypes.object
}
export default Profile
