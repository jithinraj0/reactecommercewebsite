import React from 'react'
import { LineWave } from 'react-loader-spinner';
import '../styles/style.css'

const Loader = () => {
    return (
        <div className="progress"> <div className="center">
            <LineWave color="#000000" height={480} width={480} />
        </div></div>
    )
}

export default Loader