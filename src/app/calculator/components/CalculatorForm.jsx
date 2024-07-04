'use client'
import React, { useState } from 'react'
import InputBox from './InputBox'
import Button from './Button'

const CalculatorForm = () => {
    const [x, setX] = useState(null)
    const [y, setY] = useState(null)

    const [result, setResult] = useState(null)


    // parent level function 
    // a child component can access a parent function 
    const submitData = () => {
        console.log(x, y)

        const expValue = parseInt(x) + parseInt(y)

        setResult(expValue)
    }

    return (
        <>
            <InputBox
                type={'text'}
                placeholder={'Enter number'}
                onChange={(e) => setX(e.target.value)}
            />
            <InputBox
                type={'text'}
                placeholder={'Enter number'}
                onChange={(e) => setY(e.target.value)}
            />
            <Button btnName={'Submit'} onClick={submitData}>
                Submit 
            </Button>
            <pre>
                Values are {x} {y}
            </pre>
            <pre>Result is {result}</pre>
        </>
    )
}

export default CalculatorForm
