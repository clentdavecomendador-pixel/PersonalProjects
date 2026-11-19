import styled from "styled-components";
import { Reset } from "../../styles/reset";

export const SkillsStyled = styled.section`
    ${Reset}
    padding: 2rem 4rem 3rem;
    font-family: "Inter", sans-serif;

    .title {
        margin-bottom: 2rem;

        .eyebrow {
            color: #d6a84f;
            font-size: 0.75rem;
            margin: 0 0 1rem;
        }

        h1 {
            color: #ffffff;
            font-size: clamp(2rem, 4vw, 3rem);
            margin: 0 0 0.75rem;
        }

        > p:last-child {
            color: #b3b3b3;
            font-size: 0.95rem;
            margin: 0;
        }
    }
    .cards {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
        margin-top: 2rem;
    }

    .card {
        box-sizing: border-box;
        min-width: 0;
        padding: 1.25rem;
        border: 1px solid #2b2820;
        border-radius: 0.7rem;
        background-color: #14130f;

        .category {
            color: #d6a84f;
            font-size: 0.65rem;
            margin: 0 0 0.8rem;
        }

        h2 {
            color: #ffffff;
            font-size: 1.15rem;
            margin: 0 0 0.5rem;
        }

        .description {
            color: #b3b3b3;
            font-size: 0.85rem;
            line-height: 1.5;
            margin: 0;
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            list-style: none;
            margin: 1rem 0 0;
            padding: 0;

            li {
                padding: 0.4rem 0.7rem;
                border-radius: 2rem;
                background-color: #242116;
                color: #d6a84f;
                font-size: 0.7rem;
            }
        }
    }

    .closing {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        margin-top: 2.5rem;

        h2 {
            color: #ffffff;
            font-size: 1.5rem;
            margin: 0 0 0.75rem;
        }

        p {
            max-width: 34rem;
            color: #b3b3b3;
            font-size: 0.9rem;
            line-height: 1.5;
            margin: 0;
        }

        a {
            display: inline-block;
            flex-shrink: 0;
            padding: 0.75rem 1.25rem;
            border: 2px solid #d6a84f;
            border-radius: 10rem;
            color: #d6a84f;
            text-decoration: none;
            transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;

            &:hover {
                transform: scale(1.08);
                background-color: #d6a84f;
                color: #ffffff;
            }
        }
    }

    @media (max-width: 700px) {
        padding: 2rem 1.5rem;

        .cards {
            grid-template-columns: 1fr;
        }

        .closing {
            align-items: flex-start;
            flex-direction: column;
        }
    }
`;
