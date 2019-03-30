import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Layout from '../components/MyLayout'
import withData from '../lib/withData'

import {Link} from '../routes'


const AllRecipes = ({data: { loading, error, recipes }}) => {
    if (error) return <h1>Error loading reviews.</h1>
    return (
        <Layout>
        {
            loading ? <div>Loading</div> :
            (
                <div>{recipes.map((recipe, index) => 
                    <div key={index}>
                        <h1>
                            <Link route='details' params={{id: recipe.id}}>
                                <a>{recipe.title}</a>
                            </Link>
                        </h1>
                        <h2>{recipe.description}</h2>
                    </div>
                )}</div>
            )
        }
        </Layout>
    )
    return null;
}

const allRecipes = gql`
    query allRecipes {
        recipes(orderBy: createdAt_DESC) {
            id
            createdAt
            title
            description
        }
    }`

export default withData(graphql(allRecipes)(AllRecipes))