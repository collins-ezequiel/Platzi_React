import { useContext } from "react";
import { ThemeContext } from "./ContextApi";

const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemeToggler;