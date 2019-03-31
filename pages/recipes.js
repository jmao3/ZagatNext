import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Layout from '../components/MyLayout'
import withData from '../lib/withData'

import { Link } from '../routes'


const AllRecipes = ({ data: { loading, error, tests } }) => {
    if (error) return <h1>Error loading reviews.</h1>
    return (
        <Layout>
            {
                loading ? <div>Loading</div> :
                    (
                        <div>{tests.map((test, index) =>
                            <div key={index}>
                                <h1>
                                    <Link route='details' params={{ id: test.id }}>
                                        <a>{test.title}</a>
                                    </Link>
                                </h1>
                            </div>
                        )}</div>
                    )
            }
        </Layout>
    )
}

const allRecipes = gql`
    query AllTests {
        tests {
        id
        title
        }
    }
  `

export default withData(graphql(allRecipes)(AllRecipes))