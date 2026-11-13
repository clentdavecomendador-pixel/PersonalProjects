import styled from "styled-components";
import { Reset } from "../../../styles/reset";

export const HeaderStyled = styled.header`
 ${Reset}
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 0 4rem;
 font-family: "Poppins", sans-serif;
 .theLogo{
    display: flex;
    align-items: center;
    svg{
        display: block;
        width: 25%;
        }
        
        p{
            color: #FFFFFF;
            text-align: center;
        }
    }
`