import "./DescriptionBox.scss";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-nav">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade"> Review (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ratione
          molestiae, asperiores debitis quibusdam rem doloremque dolorum iure,
          ut dolores blanditiis quis enim dolore officia quae saepe in placeat
          vel!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nobis
          exercitationem hic itaque corporis eaque modi, accusamus et minima
          nulla quam repellendus tempore placeat impedit dolores rerum
          similique! Atque, magnam.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
