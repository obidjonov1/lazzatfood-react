import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Avatar, Box, Button, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { SocketContext } from "../../context/socket";
import {
  ChatGreetMsg,
  ChatInfoMsg,
  ChatMessage,
} from "../../screens/types/others";
import { verifiedMemberData } from "../../apiServices/verify";
import {
  sweetErrorHandling,
  sweetFailureProvider,
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import moment from "moment";
import { RippleBadge } from "../../MaterialTheme/styled";
import ScrollableFeed from "react-scrollable-feed";
import CloseIcon from "@mui/icons-material/Close";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import { AiFillMessage } from "react-icons/ai";

const NewMessage = (data: any) => {
  if (data.new_message.mb_id == verifiedMemberData?._id) {
    return (
      <Box
        flexDirection={"row"}
        style={{ display: "flex" }}
        alignItems={"flex-end"}
        justifyContent={"flex-end"}
        sx={{ m: "10px 0px" }}
      >
        <div className={"msg_right"}>{data.new_message.msg}</div>
      </Box>
    );
  } else {
    return (
      <Box
        flexDirection={"row"}
        style={{ display: "flex" }}
        sx={{ m: "10px 0px" }}
      >
        <Avatar
          alt={data.new_message.mb_nick}
          src={data.new_message.mb_image}
        />
        <div className={"msg_left"}>{data.new_message.msg}</div>
      </Box>
    );
  }
};

export function CommunityChats() {
  /** INITIALIZATIONS **/
  const [messagesList, setMessagesList] = useState([]);
  const socket = useContext(SocketContext);
  const [onlineUsers, setOnlineUsers] = useState<number>(0);
  const textInput = useRef(null);
  const [message, setMessage] = useState<string>("");

  const chatContentRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [openButton, setOpenButton] = useState(false);
  const handleOpenChat = () => {
    setOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOpenButton(true);
      // setOpen(true);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    socket.connect();
    console.log("SOCKET PRINT");

    socket?.on("connect", function () {
      console.log("CLIENT: connected");
    });

    socket?.on("newMsg", (new_message: ChatMessage) => {
      console.log("CLIENT: new message");
      messagesList.push(
        // @ts-ignore
        <NewMessage new_message={new_message} key={messagesList.length} />
      );
      setMessagesList([...messagesList]);
    });

    socket?.on("greetMsg", (msg: ChatGreetMsg) => {
      console.log("CLIENT: greet message");
      messagesList.push(
        // @ts-ignore
        <p
          style={{
            textAlign: "center",
            fontSize: "large",
            fontFamily: "serif",
            textTransform: "capitalize",
          }}
        >
          {msg.text}, {verifiedMemberData?.mb_nick ?? "guest"}
        </p>
      );
      setMessagesList([...messagesList]);
    });

    socket?.on("infoMsg", (msg: ChatInfoMsg) => {
      console.log("CLIENT: info message");
      setOnlineUsers(msg.total);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  /* HANDLERS */
  const getInputMessageHandler = useCallback(
    (e: any) => {
      const text = e.target.value;
      setMessage(text);
    },
    [message]
  );

  const getKeyHandler = (e: any) => {
    try {
      if (e.key == "Enter") {
        assert.ok(message, Definer.input_err3);
        onClickHandler();
      }
    } catch (err: any) {
      sweetErrorHandling(err).then();
    }
  };

  const onClickHandler = () => {
    try {
      if (!verifiedMemberData) {
        // @ts-ignore
        textInput.current.value = "";
        sweetFailureProvider("Please login first!", true);
        return false;
      }

      // @ts-ignore
      textInput.current.value = ""; //  <--  clean input
      assert.ok(message, Definer.input_err3);

      const mb_image_url =
        verifiedMemberData?.mb_image ?? "/images/default_user.svg";

      // send message to socket
      socket.emit("createMsg", {
        msg: message,
        mb_id: verifiedMemberData?._id,
        mb_nick: verifiedMemberData?.mb_nick,
        mb_image: mb_image_url,
      });
      setMessage("");
    } catch (err: any) {
      console.log("ERROR::: onClickHandler", err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Stack className="chatting">
      {openButton ? (
        <button className="chat_button" onClick={handleOpenChat}>
          {open ? (
            <CloseIcon />
          ) : (
            <AiFillMessage
              className="top-btn_arrow"
              style={{ transform: "scaleX(-1)" }}
            />
          )}
        </button>
      ) : null}
      <Stack className={`chat_frame ${open ? "open" : ""}`}>
        <Box className={"chat_top"}>
          <div>Online Chat</div>
          <RippleBadge
            style={{ margin: "-30px 0 0 20px" }}
            badgeContent={onlineUsers}
          />
        </Box>
        <Box className={"chat_content"} id="chat_content" ref={chatContentRef}>
          <ScrollableFeed>
            <Stack className={"chat_main"}>
              <Box
                flexDirection={"row"}
                style={{ display: "flex" }}
                sx={{ m: "10px 0px" }}
              >
                <div className={"msg_left"}>Welcome to Live chat!</div>
              </Box>
              {messagesList}
            </Stack>
          </ScrollableFeed>
        </Box>
        <Box className={"chat_bott"}>
          <input
            ref={textInput}
            type={"text"}
            name={"message"}
            className={"msg_input"}
            placeholder={"Type message"}
            onChange={getInputMessageHandler}
            onKeyDown={getKeyHandler}
          />
          <button className={"send_msg_btn"} onClick={onClickHandler}>
            <SendIcon style={{ color: "#fff" }} />
          </button>
        </Box>
      </Stack>
    </Stack>
  );
}
