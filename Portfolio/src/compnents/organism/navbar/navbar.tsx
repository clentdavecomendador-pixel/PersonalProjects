import { NavLink } from "react-router-dom"
import { NavbarStyled } from "./navbar.styled"
import { GitHubLogo } from "../../../assets/svg/github"

export const Navbar = () => {
    return(
        <NavbarStyled>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>

            <ul>
                {GitHubLogo}
                <li className="github">
                    <NavLink
                        to="https://github.com/clentdavecomendador-pixel">
                        View on Github
                    </NavLink>
                </li>
            </ul>
        </NavbarStyled>
    )
}