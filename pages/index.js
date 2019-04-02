import Link from "next/link";

const index = () => (
  <div>
    <div>
      <Link href="search-post">
        <a>search post</a>
      </Link>
    </div>
    <div>
      <Link href="search-map">
        <a>search map</a>
      </Link>
    </div>
  </div>
);

export default index;
