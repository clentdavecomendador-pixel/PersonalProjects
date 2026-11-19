import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/homepage/homepage"
import { About } from "../pages/about/about"
import { Skills } from "../pages/skills/skills"
import { Contact } from "../pages/contact/contact"

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<HomePage  />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}