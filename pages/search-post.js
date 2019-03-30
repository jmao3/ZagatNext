import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Layout from '../components/Layout'
import withData from '../lib/withData'

import { Link } from '../routes'


const AllQuestions = ({ data: { loading, error, questions } }) => {
  // if (error) return <h1>Error loading reviews.</h1>
  return (
    <Layout>
      {
        loading ? <div>Loading</div> :
          (
            <div>{questions.map((question, index) =>
              <div key={index}>
                <h1>
                  <Link route='details' params={{ id: question.id }}>
                    <a>{question.question}</a>
                  </Link>
                </h1>
              </div>
            )}</div>
          )
      }
    </Layout>
  )
}

const allQuestions = gql`
    query AllQuestions {
        questions {
        id
        question
        
        }
    }
  `
export default withData(graphql(allQuestions)(AllQuestions))