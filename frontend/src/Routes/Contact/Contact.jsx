import Navbar from "/src/Components/Navbar/Navbar";
import Hero from "/src/Routes/Homepage/Hero";
import Footer from "/src/Components/Footer/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        title="Contact"
        url="/"
        cname="hero-mid"
        imglink="https://plus.unsplash.com/premium_photo-1664910125402-7972b1e12b79?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Footer />
    </>
  );
}

export default Contact;
