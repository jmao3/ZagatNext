import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Layout from "../components/Layout";
import withData from "../lib/withData";

// import { withRouter } from "next/router";
// import Layout from "../components/Layout";

// const questionDetail = withRouter(props => (
//   <Layout>
//     <h1>{props.router.query.title}</h1>
//     <p>This is the blog post content.</p>
//   </Layout>
// ));

// export default questionDetail;

const Question = ({ data: { loading, error, question } }) => {
  if (error) return <h1>Error loading reviews.</h1>;
  return (
    <Layout>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <h1>{question.id}</h1>
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

export default withData(
  graphql(questionDetails, {
    options: ({
      url: {
        query: { id }
      }
    }) => ({ variables: { id } })
  })(Question)
);
