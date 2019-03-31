const ButtonOutline = props => (
    <div>
        <button className="btn btn-outline-primary w-100 h-100">
            <h4 className="m-0">{props.children}</h4>
        </button>
        <style jsx>{`
        .btn-outline-primary {
          color: #b70038 !important;
          border-color: #b70038 !important;
        }
        .btn-outline-primary:hover {
          background-color: #b70038 !important;
          color: white !important;
        }
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
