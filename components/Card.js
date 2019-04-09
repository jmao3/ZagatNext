const TextCard = props => (
  <div className="my-4">
    {props.children}
    <style jsx>
      {`
        div {
          background-color: white;
          padding: 40px;
        }
      `}
    </style>
  </div>
);

export default TextCard;
