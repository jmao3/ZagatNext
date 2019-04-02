import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Layout from "../components/Layout";
import withData from "../lib/withData";

const Question = ({ data: { loading, error, question } }) => {
  // if (error) return <h1>Error loading reviews.</h1>;
  return (
    <Layout>
      {loading ? (
        <div>Loading</div>
      ) : (
          <div>
            <h1>{question.question}</h1>
          </div>
        )}
    </Layout>
  );
};

const questionDetails = gql`
  query question($id: ID!) {
    question(where: { id: $id }) {
      id
      question
      answers {
        id
      }
    }
  }
`;

export default withData(graphql(questionDetails, {
  options: ({ url: { query: { id } } }) => ({ variables: { id } })
})(Question))
