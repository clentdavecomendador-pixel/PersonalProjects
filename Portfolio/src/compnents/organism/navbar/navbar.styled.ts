import styled from "styled-components";
import { Reset } from "../../../styles/reset";

export const NavbarStyled = styled.nav`
 ${Reset}
 width: 65%;
 display: flex;
 justify-content: space-between;
    ul{
     display: flex;
     justify-content: center;
     gap: 2rem;
        li{
         list-style: none;
         align-items: center;
            a{
             display: inline-block;
             text-decoration: none;
             color: #FFFFFF;
             transition: color 0.2s ease, transform 0.2s ease;
                &:hover,
                &.active{
                 color: #F0C674;
                 text-decoration: underline;
                 transform: scale(1.25);
                }
            }
        }

        .github{
            a{
             position: relative;

                &::before{
                 content: "";
                 position: absolute;
                 inset: -1rem;
                 border: 2px solid white;
                 pointer-events: none;
                 border-radius: 10rem;
                }
            }
        }
    }
`