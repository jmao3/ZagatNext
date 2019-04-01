import Link from "next/link";

const NavLink = props => (
  <div className="mx-3">
    <Link href={`/${props.children}`}>
      <a>{props.children}</a>
    </Link>
    <style jsx>
      {`
        a {
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 1.2px;
          color: #656666 !important;
        }
      `}
    </style>
  </div>
);

const NavBar = () => (
  <div className="fixed-top">
    <nav className="d-flex w-100 border-bottom">
      <div className="w-50 d-flex align-items-center border-right">
        <div className="d-flex align-items-center p-2 border-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="zagat-logo-svg"
            width="120"
            height="60"
          >
            <g className="index-zagat-logo-paths" fill="#b70038">
              <path d="M32.484 38.378l-1.768 3.612h1.768l1.076-2.152h8.685l1 2.152h1.844l-1.768-3.612H32.484" />
              <path d="M37.787 17.395L25.413 41.99h1.844l10.684-21.598L48.625 41.99h1.921L38.095 17.395h-.308M5.736 23.083v1.537h7.686l-9.07 17.063v.307h18.985v-1.46H6.735l9.3-17.447H5.737" />
              <path d="M5.736 20.162h15.295l-9.3 17.447h11.606v-1.537h-9.07l9.147-17.14v-.307H5.736v1.537M37.94 29.923l2 4.535h-4.074zm-4.226 5.765h8.377l-4.15-8.532zM74.68 28.155H60.845v1.46h12.298v.539c0 6.072-4.304 10.914-10.376 10.914-5.918 0-10.53-4.689-10.53-10.76 0-6.073 4.765-10.761 10.914-10.761 2.767 0 5.457.845 7.686 2.613l.692-1.46c-2.383-1.768-5.303-2.613-8.378-2.613-7.07 0-12.605 5.303-12.605 12.22 0 6.918 5.38 12.221 12.221 12.298 7.148 0 11.913-5.534 11.913-12.682v-1.768M108.269 23.083V41.99h1.614V24.62h5.764v-1.537h-7.378M97.662 24.62h5.764v17.37h1.615V23.083h-7.38v1.537M97.662 18.625h17.985v1.537H97.662z" />
              <path d="M63.151 24.235c2.076 0 3.997.769 5.534 2.23l.692-1.461c-1.614-1.46-3.843-2.306-6.226-2.306-4.304 0-7.609 3.305-7.609 7.61 0 4.38 3.151 7.762 7.225 7.762 3.843 0 6.533-2.382 6.764-5.995h-8.686v1.46h6.841c-.692 1.999-2.613 3.075-4.919 3.075-3.151 0-5.61-2.767-5.61-6.303 0-3.458 2.612-6.072 5.994-6.072M86.901 17.395L74.527 41.99h1.844l10.684-21.598L97.74 41.99h1.921L87.21 17.395H86.9" />
              <path d="M81.598 38.378L79.83 41.99h1.768l1.076-2.152h8.685l1 2.152h1.844l-1.768-3.612H81.598M87.055 29.923l1.998 4.535H84.98zm-4.227 5.765h8.378l-4.15-8.532z" />
            </g>
          </svg>
          <h4 className="m-0 mt-2">Gourmet</h4>
        </div>
        <input
          className="w-100 h-100 border-0 pl-2"
          type="search"
          placeholder="Find a great place near you"
        />
      </div>
      <div className=" w-50 d-flex align-items-center justify-content-end">
        <NavLink>WHAT'S TRENDING</NavLink>
        <NavLink>WRITE A STORY</NavLink>
        <NavLink>ASK A QUESTION</NavLink>
        <NavLink>LOGIN/SIGN UP</NavLink>
      </div>
    </nav>
    <style jsx>
      {`
        nav {
          background: white;
          height: 80px;
        }
        h4 {
          font-family: futura;
          color: #b70038;
        }
      `}
    </style>
  </div>
);

export default NavBar;
