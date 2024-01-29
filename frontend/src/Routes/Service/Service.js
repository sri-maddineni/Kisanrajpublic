import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        title="About"
        url="/"
        cname="hero-mid"
        imglink="https://plus.unsplash.com/premium_photo-1661833879387-1513bf753554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWJvdXR8ZW58MHx8MHx8fDA%3D"
      />
      <Footer />
    </>
  );
}

export default Service;
