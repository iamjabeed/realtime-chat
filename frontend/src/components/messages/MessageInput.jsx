import { useState, useRef, useEffect } from "react";
import { BsEmojiSmile, BsSend } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";

import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { loading, sendMessage } = useSendMessage();

  const emojiPickerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  const handleEmojiClick = (emojiData, event) => {
    setMessage(message + emojiData?.emoji);
    // console.log(emojiData);
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="w-full h-14 px-14 border rounded bg-[#000000] placeholder-[#eaeaeab9] text-[#F6F6F6] outline-none border-[#3f3f41]"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="button"
          className="absolute inset-y-0 left-4 top-0 bottom-0 flex items-center justify-center cursor-pointer"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          <BsEmojiSmile size={26} />
        </button>
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner mx-auto"></span>
          ) : (
            <BsSend />
          )}
        </button>
        {showEmojiPicker && (
          <div
            className="absolute bottom-16 -left-[18rem] z-10 "
            ref={emojiPickerRef}
          >
            <EmojiPicker
              onEmojiClick={handleEmojiClick}
              // disableSearchBar
              // disableSkinTonePicker
              // height={500}
              // width={500}
              theme="dark"
              emojiStyle="apple"
              autoFocusSearch={false}
              lazyLoadEmojis={true}
              disableSearchBar={false}
              disableSkinTonePicker={true}
              skinTonesDisabled={false}
              searchDisabled={false}
            />
          </div>
        )}
      </div>
    </form>
  );
};

export default MessageInput;
