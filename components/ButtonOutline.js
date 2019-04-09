const ButtonOutline = props => (
  <div>
    <button className="btn btn-outline-primary w-100 h-100">
      <h4 className="m-0">{props.children}</h4>
    </button>
    <style jsx>{`
      div {
        width: 88px;
        height: 36px;
      }
      h4 {
        padding-top: 1.5px;
      }
    `}</style>
  </div>
);

export default ButtonOutline;
