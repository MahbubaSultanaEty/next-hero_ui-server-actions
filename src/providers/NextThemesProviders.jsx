import { ThemeProvider } from "next-themes";
import { Children } from "react";
const NextThemesProviders = ({children}) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            {children}
        </ThemeProvider>
    );
};

export default NextThemesProviders;