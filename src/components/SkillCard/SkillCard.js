import React from 'react'
import SkillTag from '../SkillTag'

import './SkillCard.css'

const SkillCard = ({ skillList, title, order}) => {
    return (
    <div className={`skill${order + 1}`}>
        <div>
            {title}
        </div>
        <div className="skill-list-wrapper">
            {skillList.map(skill=> <SkillTag skill={skill} />)}
        </div>
    </div>
    )
}

export default SkillCard