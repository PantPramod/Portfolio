import React from 'react'
import './Projects.css';

const Projects = () => {
    return (
        <div class="pro">
            <div className='projects summary'>
                <p>Projects</p>
                <div className='project-title'>Social Media App</div>
                <div className='description'>
                    <b>Description:</b> It is like a soial media web app , where any person can create account .
                    it gives functionality of authentication. User can upload their post, with caption.
                    It provides realtime comment loading of all the users.
                    <br />
                    <a href="https://instagram-clone-react-6b064.web.app/ ">https://instagram-clone-react-6b064.web.app/ </a>
                    <ul>
                        <li className="tech"><b>Technology</b>:React, JavaScript, JSX, firebase (authentication, firestore database)</li>
                    </ul>

                </div>

                <div className='project-title'>School Management System</div>
                <div className='description'>
                    <b>Description:</b>
                    Optimum Solution to solve the school management effectively.From Student admission, Updating Information, Attendence, and displaying all students information.
                    All data is saved in NoSQL database.
                    <br />
                    <a href="https://school-management-system-demo.web.app/">https://school-management-system-demo.web.app/</a>
                    <ul>
                        <li className='tech'><b>Technology</b>:    Technology:React JS, Context API, Node JS, Express, Mongodb, mongoose</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Projects

