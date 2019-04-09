import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Layout from "../components/Layout";
import ButtonOutline from "../components/ButtonOutline";
import withData from "../lib/withData";
import { Link } from "../routes";

const NavLink = props => (
  <Link href="">
    <a>{props.children}</a>
  </Link>
);

const profile = () => (
  <Layout>
    <div>
      <img className="hero" src="https://via.placeholder.com/150" />
    </div>
    <div className="row m-4">
      <div className="col-8">
        <div className="box box-padding d-flex">
          <img src="https://via.placeholder.com/150" />
          <div className="d-flex flex-column">
            <div className="d-flex flex-row">
              <h2>Jeff</h2>
              <ButtonOutline>Follow</ButtonOutline>
              <button className="btn btn-outline-primary">
                <h4>Message</h4>
              </button>
            </div>
            <p>This is a short description.</p>
          </div>
        </div>
        <div className="box box-padding">
          <div>
            <NavLink>All Posts</NavLink>
            <NavLink>Answers</NavLink>
            <NavLink>Questions</NavLink>
            <NavLink>Stories</NavLink>
            <NavLink>Favorites</NavLink>
          </div>
          <div className="box box-padding border">
            <Link href="">
              <a>
                <h2>thread.question</h2>
              </a>
            </Link>
            <Link href="">
              <p>thread.answers[0].content</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="box box-padding">
          <h3>Jeff's Favorite Restaurants</h3>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .hero {
          width: 100%;
          height: 300px;
          position: absolute;
          top: 80px;
          left: 0;
        }
        .row {
          position: relative;
          top: 120px;
        }
      `}
    </style>
  </Layout>
);

export default profile;
