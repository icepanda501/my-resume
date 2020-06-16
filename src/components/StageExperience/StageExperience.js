import React from 'react'
import Card from '../Card'
import './StageExperience.css'


const StageExperience = ({ time, detail, jobTitle, order}) => {
    return (
    <Card className={`stage-experience-wrapper job${order + 1}`}>
            <div className="job-title">{jobTitle}</div>
            <div className="job-time">{time}</div>
            <div className="job-detail">{detail}</div>
    </Card>
    )
}


export default StageExperience