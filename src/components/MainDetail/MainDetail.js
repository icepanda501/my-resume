import React from 'react'
import Card from '../Card'
import ContactCard from '../ContactCard'

import myImage from '../../images/my.png'

import './MainDetail.css'

const MainDetail = ({ title, name, image, detail}) => {
    return (
    <Card className={"main-detail"}>
        <div className="image"><img src={myImage}></img></div>
        <div className="title">{title}</div>
        <div className="name">{name}</div>
        <div className="detail">{detail}</div>
        <ContactCard />
    </Card>
    )
}

export default MainDetail