import Link from "next/link";

const RestaurantCard = props => (
  <div className="d-flex flex-row restaurant-card">
    <img src={props.imgurl} alt="HIHO CHEESEBURGER" />
    <div className="p-3">
      <h4 className="mb-1 name">{props.name}</h4>
      <h5 className="subscript mb-1">{props.category}</h5>
      <h5 className="mb-1">{props.rating}</h5>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </div>
    <style jsx>
      {`
        img {
          width: 150px;
          height: 150px;
        }
        h5 {
          font-weight: 300;
        }
        .restaurant-card {
          background-color: white;
          height: 150px;
          margin: 20px 0 20px 20px;
        }
        .name {
          text-transform: uppercase;
        }
        .description {
          overflow: hidden;
          height: 40px;
        }
      `}
    </style>
  </div>
);

export default RestaurantCard;
