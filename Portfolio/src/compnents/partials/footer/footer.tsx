import { FooterStyled } from "./footer.styled"

export const Footer = () => {
    return (
        <FooterStyled>
            <p className="copy">© 2026 Clent Dave Comendador. All rights reserved.</p>
            <p className="location">Denmark / Frontend Developer</p>
            <div className="socials" aria-label="Social links">
                <a href="https://github.com/clentdavecomendador-pixel" target="_blank" rel="noreferrer">
                    GitHub <span>↗</span>
                </a>
                <a href="https://www.linkedin.com/in/clent-dave-comendador-a27373440/" target="_blank" rel="noreferrer">
                    LinkedIn <span>↗</span>
                </a>
            </div>
        </FooterStyled>
    )
}
