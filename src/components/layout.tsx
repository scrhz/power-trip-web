import NavBar from './navbar';
import Footer from './footer';

export default ({children}) => {
  return (
    <div className="content">
      <NavBar />
      <h1 title={children.title} />
      {children}
      <Footer />
    </div>
  );
};
