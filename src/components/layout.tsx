import NavBar from './navbar'
import Footer from './footer'
import { ThemeProvider } from './ui/theme-provider'

export default ({ children }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="content">
                <NavBar />
                <h1 title={children.title} />
                {children}
                <Footer />
            </div>
        </ThemeProvider>
    )
}
