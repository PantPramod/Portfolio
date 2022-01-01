import "./Certification.css";
import frontend from '../images/frontend.png';

const listOfCertfication = [
    {
        name: "Frontend GFG",
        link: "https://media.geeksforgeeks.org/courses/certificates/28b77cc6026292a408316b4c12cf0a40.pdf",
        image: frontend,

    },
    {
        name: "Award Participating GFG",
        link: "https://media.geeksforgeeks.org/auth-certificates/1635445800/f7d719dd0512315c6a761f4d4cd8f61c.png",
        image: "https://media.geeksforgeeks.org/auth-certificates/1635445800/f7d719dd0512315c6a761f4d4cd8f61c.png",

    },
    {
        name: "Python 101 for Data Science",
        link: "https://courses.cognitiveclass.ai/certificates/0e81bdfa254248f4843faf4947c03023",
        image: "",

    },
    {
        name: "React JS",
        link: "",
        image: "",
    }

]
const Certifications = () => {
    return (
        <div className="certifications">
            {listOfCertfication.map((certficate) => (<a href={certficate.link} className='certficate'>
                <div className="c-img-box">
                    <img className="c-img" alt={certficate.name} src={certficate.image} />
                </div>

                <h2>{certficate.name}</h2>


            </a>))}

        </div>
    )
}

export default Certifications

