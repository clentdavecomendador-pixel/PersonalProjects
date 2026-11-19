import { NavLink } from "react-router-dom";
import { SkillsStyled } from "./skills.styled";

const skillGroups = [
    {
        number: "01",
        category: "FRONTEND",
        title: "Interfaces that feel right",
        description: "From structure to styling, the foundations of every experience.",
        skills: ["HTML", "CSS", "JavaScript"],
    },
    {
        number: "02",
        category: "FRAMEWORKS",
        title: "Modern, reusable UI",
        description: "Component-driven development with a focus on clarity.",
        skills: ["React", "TypeScript", "Next.js"],
    },
    {
        number: "03",
        category: "STYLING",
        title: "Details make the difference",
        description: "Responsive layouts and styling that bring an interface to life.",
        skills: ["Styled-components", "Responsive design", "CSS"],
    },
    {
        number: "04",
        category: "WORKFLOW",
        title: "Build. Refine. Repeat.",
        description: "Version control and collaboration throughout the process.",
        skills: ["Git", "GitHub", "API Integration"],
    },
];

export const Skills = () => {
    return (
        <SkillsStyled>
            <div className="title">
                <p className="eyebrow">02 / MY SKILLS</p>
                <h1>The tools behind the experience.</h1>
                <p>
                    My growing toolkit for building responsive websites, thoughtful
                    interfaces and connected experiences.
                </p>
            </div>

            <hr />

            <div className="cards">
                {skillGroups.map((group) => (
                    <article className="card" key={group.number}>
                        <p className="category">
                            {group.number} / {group.category}
                        </p>
                        <h2>{group.title}</h2>
                        <p className="description">{group.description}</p>
                        <ul className="tags">
                            {group.skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>

            <section className="closing">
                <div>
                    <h2>Always a work in progress.</h2>
                    <p>
                        Every project is a chance to learn something new. I'm
                        growing my skills through practice, experimentation and
                        real-world problem solving.
                    </p>
                </div>
                <NavLink to="/projects">See My Projects <span aria-hidden="true">→</span></NavLink>
            </section>
        </SkillsStyled>
    );
};
