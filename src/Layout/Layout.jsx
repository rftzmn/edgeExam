import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}

export default Layout;
