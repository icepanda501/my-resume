import React from 'react'
import StageExperience from '../StageExperience'
import SkillCard from '../SkillCard'
import MainDetail from '../MainDetail'

import './ResumeLayout.css'

const experienceList =  [
    {
        jobTitle: 'PART TIME DEVELOPER AT FIVELOOP',
        time: '2014',
        detail: `I was working as a part time developer for fiveloop company with a php, codeigniter, sql. 
            FIVELOOP is a start up to help programmer find a job and help company to find a good programmer and At that time I help FIVELOOP to create a joblist website for programmer.`,
    },
    {
        jobTitle: 'JUNIOR SOFTWARE DEVELOPER AT FIVELOOP',
        time: '2015 - 2017',
        detail: `I decide to work at fiveloop becuase I think I like a startup culture and I can decide every thing 
            about technology for create a software in this company, At this time I start the project called "Cerebro", 
            it idea was scraping all programmer data from job list web or social media like a linkedin, 
            github and then I collect it in our database for searching about job candidate, 
            this software help my company to send a potential candidate to other company.  `
    },
    {
        jobTitle: 'SENIOR SOFTWARE DEVELOPER AT FIVELOOP',
        time: '2018-2019',
        detail: `I use Node.js, React, MariaDB to make a software for my company called "Wisible", 
            that is a sales automation software for team sales or anyone who need to track sales process 
            and manage sales work flow like a salesforce but easy to use and easy to customize. and 
            This is the most proundly project becuase I choose tech stack called Appollo (Graphql) ,
            at that time I lernining about this stack from zero. I expect it help my work to easier 
            than older project and it was expect `
    },
    {
        jobTitle: 'SENIOR SOFTWARE DEVELOPER AT ATVANTAGE',
        time: '2019-2020',
        detail: `I use Node.js, React lambda, dynamodb to build a platform called "FULLOOP". Actual they have a old platform but 
        It too old. They need me to build a new one follow the old project. The feature is the same as a old one but tech stack
        is new technology (React, Node, dynamo). That project is a platform for suvey and report. For this job I have lerned a lot about 
        AWS Stack (EC2, Memcached, Lambda, DynamoDB, CloudFront, CloudFormation, CloudWatch ) and lerned about ElasticSearch Kibana also
        `
    },
]

const skillSet = [
    {
        title: 'Skill',
        skillList : [
            "html", 
            "css", 
            "node.js", 
            "sql" , 
            "mongo",
            "java", 
            "python" , 
            "php(codeigniter)", 
            "react", 
            "angularJS", 
            "nginx", 
            "docker", 
            "apollo",
            "github"]
    },
    {
        title: 'Confident Skill',
        skillList : [
            "Node.js", 
            "Apollo(grahpql)", 
            "React", 
            "Sql" , 
            "mongo",
        ]
    }
]

const mainDetail = {
    title: 'SOFTWARE DEVELOPER',
    name: 'ISOON LAOHASOOT',
    detail: `
        Software Developer with 3 years of experience and 1 years for part time Software Developer,
        I love programming becuase it's exciting and challenge for myself, for now I interest to 
        improve my programming skill with Node.js and Graphql
    `
}


const ResumeLayout = () => {
    return (
    <div className="resume-layout">
        <MainDetail title={mainDetail.title} name={mainDetail.name} detail={mainDetail.detail} />
        {experienceList.map((experience, i)=> {
            return (<StageExperience key={i} jobTitle={experience.jobTitle} time={experience.time} detail={experience.detail} order={i} />)
        })}
        {skillSet.map((skill, i)=> <SkillCard key={i} title={skill.title} skillList={skill.skillList} order={i} />  )}
    </div>
    )

}

export default ResumeLayout