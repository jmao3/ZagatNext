import Link from 'next/link'

const Footer = () => (
    <div className="footer">
        <Link href="/">
          <a>Inbox</a>
        </Link>
        <Link href="/about">
          <a>Calendar</a>
        </Link>
        <Link href="/about">
          <a>Listings</a>
        </Link>
        <Link href="/about">
          <a>Profile</a>
        </Link>
        <style jsx>{`
            .footer {
                position: fixed;
                background: grey;
                bottom: 0;
                width: 100%;
                display: flex;
                text-transform: uppercase;
                font-size: 10px;
                justify-content: space-around;
            }
            a {
                text-decoration: none;
                height: 40px;
            }
            `}</style>
    </div>
)

export default Footer