import { NavLink } from "react-router-dom"
import { AboutStyled } from "./about.styled"

export const About = () => {
    return(
        <AboutStyled>
            <div className="title">
                <p className="first">01 / ABOUT ME</p>
                <h1>Curious by nature. Developer by choice.</h1>
                <p>A little about the person behind the pixels - and what keeps me building.</p>
            </div>
            <hr />
            <div className="content">
                <div className="info">
                    <h2>Hi, I'm Clent</h2>
                    <p className="based">BASED IN</p>
                    <p>Denmark</p>
                    <p className="currently">CURRENTLY</p>
                    <p>Web Developer Student</p>
                </div>

                <div className="textInfo">
                    <p className="text">I'm a 20-years-old developer with a passion for technology, web development and creating digital solutions.</p>
                    <p>I'm always curious, eager to learn and motivated to grow my skills through hands-on experience. I
                        <br /> enjoy turning ideas into thoughtful, responsive interfaces that feel good to use. I'm from the Philippines and speak Filipino/Cebuano, English and Danish.</p>

                    <p><NavLink to="/skills">Explore My Skills</NavLink></p>
                </div>
            </div>

            <div className="three">
                <h2>What I bring to every project</h2>
                <div className="cards">
                    <div>
                        <hr />
                        <p className="number">01</p>
                        <h3>Curiosity</h3>
                        <p>Always asking questions and exploring new ways to build.</p>
                    </div>

                    <div>
                        <hr />
                        <p className="number">02</p>
                        <h3>Attention to detail</h3>
                        <p>Thoughtful interfaces, from the first impression to the smallest interaction.</p>
                    </div>

                    <div>
                        <hr />
                        <p className="number">03</p>
                        <h3>A growth mindset</h3>
                        <p>Learning by doing, improving with every project.</p>
                    </div>
                </div>
            </div>
        </AboutStyled>
    )
}