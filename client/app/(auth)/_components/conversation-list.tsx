import { Fragment } from "react";
import ConversationItem from "./conversation-item";

const ConversationList = () => {
  return (
    <Fragment>
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <ConversationItem key={index} conversationId={index} />
        ))}
    </Fragment>
  );
};

export default ConversationList;
