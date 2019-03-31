import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Layout from '../components/Layout'
import withData from '../lib/withData'
import Profile from '../components/Profile'
import { Link } from '../routes'


const AllQuestions = ({ data: { loading, error, questions } }) => {
  if (error) return <h1>Error loading reviews.</h1>
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
                <h2>
                  <Link route='question-detail' params={{ id: question.id }}>
                    <a>{question.answers[0].id}</a>
                  </Link>
                </h2>
                <Profile name={question.answers[0].profile.name} url={`https://media.graphcms.com/resize=w:100,h:100/${question.answers[0].profile.image.handle}`} />
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
        answers {
          id
          profile{
            id
            name
            image{
              handle
            }
          }
        }
        }
    }
  `
export default withData(graphql(allQuestions)(AllQuestions))