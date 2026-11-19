import styled from "styled-components";
import { Reset } from "../../styles/reset";

export const AboutStyled = styled.section`
 ${Reset}
 padding: 1rem 4rem;
 font-family: "Int", sans-serif;
    .title{
        .first{
         margin: 0;
         color: #D6A84F;
        }

        h1{
         color: #FFFFFF;
        }

        p{
         color: #B3B3B3;
        }
    }

    .content{
     display: flex;
     justify-content: space-between;
        .info{
            h2 {
             color: #FFFFFF;
             font-size: 2.5rem;
            }

            p{
             color: #FFFFFF;
            }

            .based{
             color: #D6A84F;
             font-size: 0.85rem;
            }

            .currently{
             color: #D6A84F;
             font-size: 0.85rem;
            }
        }

        .textInfo{
            .text{
             color: #FFFFFF;
             font-size: 1.5rem;
            }

            p{
             color: #B3B3B3;
            }

            a{
             margin: 5rem 0;
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

    .three{
        h2{
         color: #FFFFFF;
        }

        .cards{
         display: flex;
         gap: 2rem;

            > div{
             flex: 1;
             min-width: 0;
                hr{
                 width: 100%;
                 margin: 0 0 1rem;
                 border: 0;
                 border-top: 1px solid #D6A84F;
                }

                .number{
                 color: #D6A84F;
                }

                h3{
                 color: #FFFFFF;
                }

                p{
                 color: #B3B3B3;
                }
            }
        }
    }

    @media (max-width: 700px){
     padding: 1rem 2rem;

        .three .cards{
         flex-direction: column;
         gap: 1.5rem;
        }
    }
`