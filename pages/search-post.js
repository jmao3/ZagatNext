import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Layout from "../components/Layout";
import withData from "../lib/withData";
import SubNav from "../components/SubNav";
import TextCard from "../components/Card";
import Profile from "../components/Profile";
import { Link } from "../routes";

const AllQuestions = ({ data: { loading, error, questions } }) => {
  if (error) return <h1>Error loading reviews.</h1>;
  return (
    <Layout>
      <SubNav active="post" />
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="container">
          {questions.map((question, index) => (
            <TextCard key={index} question={question.question}>
              <Profile
                name={question.answers[0].profile.name}
                imgurl={`https://media.graphcms.com/resize=w:100,h:100/${
                  question.answers[0].profile.image.handle
                }`}
              />
              <Link route="question-details" params={{ id: question.id }}>
                <p>{question.answers[0].content}</p>
              </Link>
            </TextCard>
          ))}
        </div>
      )}
      <style jsx>
        {`
          .container {
            padding-top: 60px;
          }
        `}
      </style>
    </Layout>
  );
};

const allQuestions = gql`
  query allQuestions {
    questions {
      id
      question
      answers {
        id
        content
        profile {
          id
          name
          image {
            handle
          }
        }
      }
    }
  }
`;
export default withData(graphql(allQuestions)(AllQuestions));
