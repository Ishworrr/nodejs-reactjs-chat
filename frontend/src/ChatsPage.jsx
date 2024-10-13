// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatlogic,
// } from "react-chat-engine-advanced";

// const chatsPage = (props) => {
//   const chatProps = useMultiChatlogic(
//     "0232cc55-6736-4845-89e2-42492ecc1204",
//     props.user.username,
//     props.user.secret
//   );
//   return (
//     <div style={{ height: "100vh" }}>
//       <MultiChatSocket {...chatProps} />
//       <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
//     </div>
//   );
// };

// export default chatsPage;

import { PrettyChatWindow } from "react-chat-engine-pretty";

const chatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="0232cc55-6736-4845-89e2-42492ecc1204"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default chatsPage;
