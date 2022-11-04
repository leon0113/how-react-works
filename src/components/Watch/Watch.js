import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => setSteps(steps + 1);
    useEffect(() => {
        console.log("Hello")
    }, [steps]);
    return (
        <div style={{ border: '3px solid red', margin: '30px' }}>
            <h2>This is my Watch.</h2>
            <h3>My current steps: {steps}</h3>
            <button onClick={increaseSteps}>Step</button>
            <Display name="Curran" steps={steps}></Display>
        </div>
    );
};

export default Watch;