import { Logo } from "../../../assets/svg/ccLogo"
import { Navbar } from "../../organism/navbar/navbar"
import { HeaderStyled } from "./header.styled"

export const Header = () => {
    return (
        <HeaderStyled>
            <div className="theLogo">
                {Logo}
                <p>Clent Dave Comendador</p>
            </div>

            <Navbar />
        </HeaderStyled>
    )
}