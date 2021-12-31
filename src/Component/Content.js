import React from 'react'
import photo from '../images/photo.jpg'
import './Content.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Content = ({ showResume }) => {
    return (
        <div className='content'>
            <div className="text">
                <h1> Hello, My name is Pramod Pant </h1>
                <p>I am a web developer lives in Uttarakhand, India.<br />
                    I make web apps usually with Javascript.<br />
                    Feel free to take a look at my latest projects.<br />
                    Contact me at.<br />
                    <div className='socialmedia'>
                        <a href="https://www.linkedin.com/in/pramod-pant-b170561a2">
                            <LinkedInIcon className='linkedIn' />
                        </a>
                        <a href="https://github.com/PantPramod?tab=repositories">
                            <GitHubIcon className='github' />
                        </a>

                        <button className='resumee' onClick={() => showResume()}>Resume</button>
                    </div>
                </p>
            </div>
            <div className='imag'>
                <img src={photo} />
            </div>

        </div>
    )
}

export default Content;

