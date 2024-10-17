import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMessages } from "../../store/chatSlice";
import Message from "../Message";

const MessageList = () => {
  const isMounted = useRef(true);
  const { messages, error, isPending } = useSelector((store) => store.chat);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = false;
      dispatch(getAllMessages());
    }
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, [messages.length]);
  const showMessage = (msg) => <Message key={msg._id} msg={msg} />;
  if (isPending) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>MessageList Error!!! {error}</p>;
  }
  return (
    <section>
      {messages.length === 0 ? <p>No messages</p> : messages.map(showMessage)}
    </section>
  );
};

export default MessageList;
