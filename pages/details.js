import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Layout from '../components/MyLayout'
import withData from '../lib/withData'



const Recipe = ({data: { loading, error, recipe }}) => {
    if (error) return <h1>Error loading reviews.</h1>
    return (
        <Layout>
        {
            loading ? <div>Loading</div> :
            (
            <div>
                <h1>{recipe.title}</h1>
                <h2>{recipe.description}</h2>
            </div>
            )
        }
        </Layout>
    )
    return null;
}

const recipeDetails = gql`
    query recipe($id: ID!) {
        recipe(where: {id: $id})
        {
        id
        title
        description
        }
    }`


export default withData(graphql(recipeDetails, {
options: ({ url: { query: { id } } }) => ({ variables: { id } })
})(Recipe))