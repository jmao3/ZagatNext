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
<<<<<<< HEAD
          <div className="row m-4">
            <div className="col-8">
              <div className="box box-padding">
                <h2>{thread.question}</h2>
                <div>
                  {thread.categories.map(category => (
                    <Category>{category.name}</Category>
                  ))}
                  <a />
                </div>
              </div>

              {thread.answers.map(answer => (
                <div className="box box-padding">
                  <Profile
                    name={answer.profile.name}
                    imgurl={`https://media.graphcms.com/resize=w:100,h:100/${
                      answer.profile.image.handle
                      }`}
                  />
                  <p>{answer.content}</p>
                </div>
              ))}
            </div>
            <div className="col-4">
              <div className="box box-padding">
                <h3>{thread.answers[0].profile.name}'s Recommendations</h3>
                {thread.answers[0].restaurants.map(restaurant => (
                  <RestaurntCard
                    name={restaurant.name}
                    imgurl={`https://media.graphcms.com/resize=w:300,h:300/${
                      restaurant.images[0].handle
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
=======
        <div>
          <h1>{thread.question}</h1>

          {thread.answers.map(answer => (
            <div>{answer.content}</div>
          ))}
        </div>
      )}
>>>>>>> parent of af25663... more
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
