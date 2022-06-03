import React from 'react'
import Header from '../components/Header'
import '../styles/style.css'


const Order = () => {
    return (

        <div className="success">
            <Header />

            <div className="center">

                <img src="https://uxwing.com/wp-content/themes/uxwing/download/48-checkmark-cross/success-green-check-mark.svg" height={300} />
                <br />
                <br />
                <h2>Order Succesful</h2>
            </div>
        </div>
    )
}

export default Order