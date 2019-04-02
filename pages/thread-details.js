import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Layout from "../components/Layout";
import withData from "../lib/withData";

const Thread = ({ data: { loading, error, thread } }) => {
  // if (error) return <h1>Error loading reviews.</h1>;
  return (
    <Layout>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <h1>{thread.question}</h1>

          {thread.answers.map(answer => (
            <div>{answer.content}</div>
          ))}
        </div>
      )}
    </Layout>
  );
};

const threadDetails = gql`
  query thread($id: ID!) {
    thread(where: { id: $id }) {
      id
      question
      answers {
        id
        content
      }
    }
  }
`;

export default withData(
  graphql(threadDetails, {
    options: ({
      url: {
        query: { id }
      }
    }) => ({ variables: { id } })
  })(Thread)
);
