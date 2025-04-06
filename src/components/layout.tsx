import NavBar from './navbar';
import Footer from './footer';

export default ({ children }) => {
    return (
        <div className="max-w-[1080px] m-2.5">
            <NavBar />
            <h1 title={children.title} />
            {children}
            <Footer />
        </div>
    );
};
