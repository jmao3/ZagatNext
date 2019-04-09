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
<<<<<<< HEAD
          {threads.map(
            (thread, index) =>
              thread.answers.length > 0 && (
                <div key={index} className="row no-gutters box">
                  {thread.answers[0].images.length > 0 && (
                    <div className="col-6 image-frame">
                      <img
                        src={`https://media.graphcms.com/${
                          thread.answers[0].images[0].handle
                        }`}
                      />
                    </div>
                  )}
                  <div className="col text box-padding">
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
                      id={thread.answers[0].profile.id}
                    />
                    <Link route="thread-details" params={{ id: thread.id }}>
                      <p>{thread.answers[0].content}</p>
                    </Link>
                  </div>
                </div>
              )
          )}
=======
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
>>>>>>> parent of af25663... more
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
