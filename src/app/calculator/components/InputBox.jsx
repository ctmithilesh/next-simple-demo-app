import React from 'react'

const InputBox = ({ type, placeholder, onChange }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="w-full max-w-xs input input-bordered"
            onChange={onChange}
        />
    )
}

export default InputBox
