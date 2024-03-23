import "./NewCollections.scss";
import new_collections from '../assets/new_collections';
import Items from '../items/Items';

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item) => (
          <Items key={item.id} {...item}/>
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
