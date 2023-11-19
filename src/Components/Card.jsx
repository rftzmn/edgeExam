import { Link } from "react-router-dom";

function Card(props) {
  // console.log(props);
  const { title, description, price, id } = props.cardData;

  return (
    <div className="card w-96 bg-base-100glass">
      <figure>
        <img src="shoe.jpg" alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">$ {price}</button>
          <button className="btn btn-primary">
            <Link to={`products/${id}`}>Details</Link>
          </button>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
//
