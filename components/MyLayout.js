import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


const Layout = (props) => (
  <div>
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />
    {props.children}
    <Footer />
    <style global jsx>{`
            body {
                margin: 0;
            }
          `}</style>
  </div>
)

export default Layout
