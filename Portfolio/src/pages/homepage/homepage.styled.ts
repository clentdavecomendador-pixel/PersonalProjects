import styled from "styled-components";
import { Reset } from "../../styles/reset";

export const HomepageStyled = styled.section`
 ${Reset}
 font-family: "Inter", sans-serif;
 display: flex;
 flex-direction: column;
 align-items: center;
    .title{
     display: flex;
     flex-direction: column;
     align-items: center;
        p{
         color: #D6A84F;
        }
        
        h1{
         color: #FFFFFF;
         font-weight: 700;
         font-size: 3.5rem;
            span{
             color: #D6A84F;
            }
        }
    }

    .content{
     display: flex;
     flex-direction: column;
     align-items: center;
        h2{
         color: #FFFFFF;
         font-size: 2rem;
         font-weight: 600;
        }

        p{
         color: #FFFFFF;
         font-size: 1.25rem;
        }

        > p{
         text-align: center;
        }

        .links{
         display: flex;
         gap: 1.5rem;

            p{
             margin: 0;

                a{
                 display: inline-block;
                 padding: 0.75rem 1.25rem;
                 border: 2px solid #D6A84F;
                 border-radius: 10rem;
                 text-decoration: none;
                 color: #D6A84F;
                 transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;

                    &:hover{
                     transform: scale(1.08);
                     background-color: #D6A84F;
                     color: #FFFFFF;
                    }
                }
            }
        }
    }
`