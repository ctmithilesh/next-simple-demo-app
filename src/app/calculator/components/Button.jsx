import React from 'react'

const Button = ({ btnName, onClick }) => {
    return (
        <button className="btn btn-accent" onClick={onClick}>
            {btnName}
        </button>
    )
}

export default Button
