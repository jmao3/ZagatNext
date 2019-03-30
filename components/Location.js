import Link from 'next/link'

const Location = (props) => (
    <div key={props.index}>
        <Link href="">
            <button className={props.status}>{props.name}</button>
        
        </Link>
        <style jsx>{`
            button {
                width: 100%;
            }
            button.complete {
                background: green;
            }
            button.damaged {
                background: red;
            }
        `}</style>
    </div>
  )
  
  export default Location