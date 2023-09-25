/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Creator } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ProfileCard from "./ProfileCard";
import { Collection } from "@aws-amplify/ui-react";
export default function ProfileCardCollection(props) {
  console.log("Recieved props:",props)
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Creator,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateRows="1fr 1fr"
      autoFlow="column"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "ProfileCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <ProfileCard
          creatorCard={item}
          height="auto"
          width="auto"
          margin="5% 0 0 5%"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ProfileCard>
      )}
    </Collection>
  );
}
