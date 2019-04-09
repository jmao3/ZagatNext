<<<<<<< HEAD
import { Link } from "../routes";
=======
import Link from "next/link";
>>>>>>> parent of af25663... more
import ButtonOutline from "./ButtonOutline";

const Profile = props => (
  <div className="d-flex align-items-center mb-2">
    <div>
      <Link href="profile">
        <img className="rounded-circle" src={props.imgurl} alt={props.name} />
      </Link>
    </div>
    <div className="mx-2">
      <div className="d-flex align-items-baseline">
        <Link route="profile" params={{ id: props.id }}>
          <a>
            <h3>{props.name}</h3>
          </a>
        </Link>
        <h5 className="text-uppercase ml-2">Expert on Los Angeles</h5>
      </div>
      <div>
        <h5 className="subscript">Published 5h ago</h5>
      </div>
    </div>
    <div>
      <ButtonOutline>Follow</ButtonOutline>
    </div>
    <style jsx>{`
      img {
        width: 48px;
        height: 48px;
      }
      h3,
      h5,
      p {
        margin: 0;
      }
      a {
        color: black;
      }
      h5 {
        font-weight: 100;
      }
    `}</style>
  </div>
);

export default Profile;
