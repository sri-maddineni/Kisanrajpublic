import Card from "./Card";
import "./Cardcol.css";
const Cardcollection = () => {
  return (
    <>
      <h1 className="h">Transaction History</h1>
      <div className="coll">
        <Card
          title={"Recently Purchased"}
          imglink="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg"
          btnname="View All"
          item="Tomatoes"
        />
        <Card
          title={"Recently Sold"}
          imglink="https://5.imimg.com/data5/FY/PB/CM/SELLER-4058790/bengal-gram-dal.jpg"
          btnname="View All"
          item="Bengal gram"
        />
        <Card
          title={"Recently Hired"}
          imglink="https://media.istockphoto.com/id/146785820/photo/combine-harvesting-in-a-field-of-golden-wheat.jpg?s=612x612&w=0&k=20&c=hVYemGMpkPi83EHEC-Br-UlK9o7C4YWfVSCQGl_Dx78="
          btnname="View All"
          item="Harvestor"
        />
      </div>
    </>
  );
};

export default Cardcollection;
