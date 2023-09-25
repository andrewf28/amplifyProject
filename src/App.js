import React, { useEffect } from "react";
import { ProfileCard, ProfileCardCollection } from "./ui-components";
import { Collection } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";

import './App.css';
 

function App() {

  const [items, setItems] = React.useState(undefined);

  useEffect(() => {
    API.graphql({
      query: `
        query getCreators {
          listCreators {
            items {
                id
                firstName
                lastName
                address
                profilePicture
                isInstagram
                isTikTok
                isYoutube
                isTwitter
                niches
                bio
                rating
                jobs_completed
                job_views
                job_shares
                job_clicks
                job_likes
                email
                phone
                createdAt
                randomString
            }
          }
        }
    `,
    }).then((res) => {
      console.log(res.data)
      setItems(res.data.listCreators.items)
    });
  }, []);
  return (
    <div>
      <h1> hi this is my web app </h1>
      {/* <ProfileCardCollection/> */}
      <Collection
        type="grid"
        searchPlaceholder="Search..."
        templateRows="1fr 1fr"
        autoFlow="column"
        alignItems="stretch"
        justifyContent="stretch"
        items={items || []}
      >
        {(item, index) => (
          <ProfileCard
            creatorCard={item}
            height="auto"
            width="auto"
            margin="5% 0 0 5%"
            key={item.id}
          ></ProfileCard>
        )}
      </Collection>
      <h1>Hi hello</h1>
    </div>
  );
}

export default App;
