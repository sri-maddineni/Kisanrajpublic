import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer/Footer";
import Cardcollection from "../Components/Cardcollection";
import Valuecardhome from "../Components/Cards/Valuecardhome";
import "../Components/Cards/Valuecardhome.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        title="Buy and Sell in advance"
        imglink="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWxhbmR8ZW58MHx8MHx8fDA%3D"
        btnclass="show"
        url="/"
        cname="hero"
        linktitle="Travel Plan"
      />

      <div className="collection">
        <Valuecardhome title="Quintals sold" count={125} />
        <Valuecardhome title="Transactions done" count={125} />
        <Valuecardhome title="Hours of Equipment Hired" count={125} />
      </div>

      <Cardcollection />

      <Footer />
    </>
  );
}

export default Home;
