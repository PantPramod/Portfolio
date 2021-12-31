import React from 'react'
import './Skills.css';
const arr = [
    {
        name: "HTML",
        value: "90%",
        color: "rgb(226, 24, 125)"
    },
    {
        name: "CSS",
        value: "80%",
        color: "rgb(209, 32, 233)"
    },
    {
        name: "JavaScript",
        value: "90%",
        color: "rgb(159, 230, 28)"
    },
    {
        name: "ReactJS",
        value: "75%",
        color: "rgb(43, 191, 218)"
    },
    {
        name: "Redux",
        value: "50%",
        color: "rgb(231, 123, 34)"
    },
    {
        name: "Node JS",
        value: "60%",
        color: "rgb(241, 24, 24)"
    },
    {
        name: "Express JS",
        value: "78%",
        color: "rgb(190, 207, 30)"
    },
    {
        name: "MongoDB",
        value: "60%",
        color: "rgb(12, 226, 59)"
    },
    {
        name: "GIT",
        value: "70%",
        color: "rgb(24, 27, 207)"
    },
    {
        name: "Firebase",
        value: "78%",
        color: "rgb(14, 230, 140)"
    },
    {
        name: "Responsiveness",
        value: "80%",
        color: "rgb(194, 115, 170)"
    },
]
const Skills = () => {
    return (
        <div className='skills'>
            {arr.map((item, id) =>
                <div className='skill'>
                    <p>{item.name}</p>
                    <div className='skill-box'>
                        <div className='fill' style={{ width: item.value, background: item.color }}>

                        </div>
                    </div>
                </div>
            )}

        </div >
    )
}

export default Skills

