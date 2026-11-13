import { NavLink } from "react-router-dom"
import { HomepageStyled } from "./homepage.styled"

export const HomePage = () => {
    return(
        <HomepageStyled>
            <div className="title">
                <p>Hello I'm</p>
                <h1>Clent Dave <span>Comendador</span></h1>
            </div>
            <div className="content">
                <h2>Frontend Developer</h2>
                <p>
                    I build modern and responsive web experiences
                    <br />
                    using React, Typescript and more
                </p>

                <div className="links">
                    <p><NavLink to="/projects">View My Projects</NavLink></p>
                    <p><NavLink to="/about">More About Me</NavLink></p>
                </div>
            </div>
        </HomepageStyled>
    )
}