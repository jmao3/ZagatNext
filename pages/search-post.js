import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Layout from "../components/Layout";
import withData from "../lib/withData";
import SubNav from "../components/SubNav";
import TextCard from "../components/Card";
import Profile from "../components/Profile";
import { Link } from "../routes";

const AllThreads = ({ data: { loading, error, threads } }) => {
  if (error) return <h1>Error loading reviews.</h1>;
  return (
    <Layout>
      <SubNav active="post" />
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="container">
          {threads.map((thread, index) => (
            <TextCard key={index}>
              <Link route="thread-details" params={{ id: thread.id }}>
                <a>
                  <h2>{thread.question}</h2>
                </a>
              </Link>
              <Profile
                name={thread.answers[0].profile.name}
                imgurl={`https://media.graphcms.com/resize=w:100,h:100/${
                  thread.answers[0].profile.image.handle
                }`}
              />
              <Link route="thread-details" params={{ id: thread.id }}>
                <p>{thread.answers[0].content}</p>
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
          a {
            color: black;
          }
        `}
      </style>
    </Layout>
  );
};

const allThreads = gql`
  query allThreads {
    threads {
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
export default withData(graphql(allThreads)(AllThreads));
