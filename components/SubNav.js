import Link from "next/link";
import React from "react";

class SubNav extends React.Component {
  state = {
    active: "post"
  };
  render() {
    this.state.active = this.props.active;
    return (
      <div className="d-flex align-items-center pl-4 fixed-top border-bottom">
        <Link href="search-post">
          {this.state.active == "post" ? (
            <a className="px-3 active">Post</a>
          ) : (
            <a className="px-3">Post</a>
          )}
        </Link>
        <Link href="search-map">
          {this.state.active == "map" ? (
            <a className="px-3 active">Map</a>
          ) : (
            <a className="px-3">Map</a>
          )}
        </Link>
        <style jsx>
          {`
            a {
              font-size: 20px;
              font-weight: 500;
              color: #656666;
              //   margin: ;
            }
            div {
              margin-top: 80px;
              width: 100%;
              height: 60px;
              background-color: white;
            }
            .active {
              padding: 14px 0;
              color: #b70038;
              border-bottom: 3px solid #b70038;
            }
          `}
        </style>
      </div>
    );
  }
}

export default SubNav;
