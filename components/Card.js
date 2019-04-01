import Link from "next/link";

const TextCard = props => (
  <div className="my-4">
    <Link href={`/question-details?title=${props.question}`}>
      <a>
        <h2>{props.question}</h2>
      </a>
    </Link>
    {props.children}
    <style jsx>
      {`
        a {
          color: black;
        }
        div {
          background-color: white;
          padding: 40px;
        }
      `}
    </style>
  </div>
);

export default TextCard;
