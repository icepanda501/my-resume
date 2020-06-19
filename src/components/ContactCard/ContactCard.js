import React from 'react'

import Card from '../Card'

import './ContactCard.css'

const ContactCard = ({ className="" }) => {
    return (
        <div className={`contact-card ${className}`}>
            <div>
                phone: 097-010-9263
            </div>
            <div>
                email: icepanda501@gmail.com
            </div>
        </div>
    )
}

export default ContactCard