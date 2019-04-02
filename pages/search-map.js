import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Layout from "../components/Layout";
import withData from "../lib/withData";
import SubNav from "../components/SubNav";
import RestaurantCard from "../components/RestaurantCard";
import { Link } from "../routes";

const AllRestaurants = ({ data: { loading, error, restaurants } }) => {
  if (error) return <h1>Error loading reviews.</h1>;
  return (
    <Layout>
      <SubNav active="map" />
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="row mx-0 main">
          <div className="col-4">
            {restaurants.map((restaurant, index) => (
              <div key={index}>
                <RestaurantCard
                  name={restaurant.name}
                  category={restaurant.categories[0].name}
                  rating={restaurant.rating}
                  description={restaurant.description}
                  imgurl={`https://media.graphcms.com/resize=w:300,h:300/${
                    restaurant.images[0].handle
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="col-8">
            <img src="../static/map.png" className="position-fixed" />
          </div>
        </div>
      )}
      <style jsx>{`
        .main {
          padding-top: 60px;
        }
        img {
          height: 85%;
        }
      `}</style>
    </Layout>
  );
};

const allRestaurants = gql`
  query allRestaurants {
    restaurants {
      id
      name
      categories {
        name
      }
      description
      rating
      images {
        handle
      }
    }
  }
`;
export default withData(graphql(allRestaurants)(AllRestaurants));
