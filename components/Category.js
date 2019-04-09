const Category = props => (
  <div>
    <a>{props.children}</a>
    <style jsx>
      {`
        div {
          display: inline;
          color: #656666;
          border: 1px solid #d0d2d3;
          padding: 12px;
          margin-right: 15px;
        }
        div:hover {
          border: 1px solid #b70038;
          color: #b70038;
        }
      `}
    </style>
  </div>
);

export default Category;
