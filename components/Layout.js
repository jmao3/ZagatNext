import Navbar from "./Navbar";
import Head from "next/head";

const Layout = props => (
  <div>
    <Head>
      <title>Zagat Gourmet</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>
    <Navbar />
    <main>{props.children}</main>

    <style jsx global>{`
      * {
        font-family: calibre;
      }
      main {
        background-color: #f1f1f2;
        padding-top: 80px;
      }
      a:hover {
        color: #b70038 !important;
        text-decoration: none !important;
      }

      h1 {
        font-size: 52px !important;
      }
      h2 {
        font-size: 36px !important;
      }
      h3 {
        font-size: 24px !important;
      }
      h4 {
        font-size: 20px !important;
      }
      h5 {
        font-size: 15px !important;
      }
      p {
        font-size: 20px;
      }
      .subscript {
        color: #656666;
      }
      .box {
        background: white;
        margin: 20px 0;
      }
      .box-padding {
        padding: 40px;
      }
      .btn-outline-primary {
        color: #b70038 !important;
        border-color: #b70038 !important;
      }
      .btn-outline-primary:hover {
        background-color: #b70038 !important;
        color: white !important;
      }
    `}</style>
  </div>
);

export default Layout;
