import Link from "next/link";
import Profile from "./Profile";

const TextCard = props => (
  <div className="my-4">
    <Link href="question-detail">
      <h2>
        <a>{props.question}</a>
      </h2>
    </Link>
    <Profile name={props.name} url={props.url} />
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
