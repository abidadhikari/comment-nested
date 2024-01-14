import { useEffect, useState } from "react";

const ReplyComment = (props: any) => {
  const { name, message, replies, id } = props;
  const [displayReplies, setDisplayReplies] = useState(false);
  const [lastHeight, setLastHeight] = useState(0);
  useEffect(() => {
    if (displayReplies) {
      const ele = document.querySelector("#mb-" + id);
      const lastEle = document.querySelector(`#mb-${id}${replies.length - 1}`);
      lastEle?.classList.add("last-reply");
      const toIgnore = document.querySelector(
        `#mb-${id}${replies.length - 1} .right-area`
      );
      if (replies.length == 1) {
        //for single reply
        const forSingle = document.querySelector(
          `#mb-${id}> .right-area > .message-block`
        );
        forSingle?.classList.add("for-single");
        setLastHeight(forSingle?.clientHeight);
      } else {
        //for multiple replies
        setLastHeight(Number(lastEle?.clientHeight));
      }
    } else {
      setLastHeight(0);
    }
  }, [displayReplies, id]);
  return (
    <>
      <div className="message-block message-block-inner" id={`mb-${id}`}>
        {replies && displayReplies && replies.length ? (
          <div
            className="straight-shaped-line straight-shaped-line-reply"
            style={{ height: `calc(100% - ${lastHeight}px)` }}
          ></div>
        ) : (
          ""
        )}
        <div className="img">
          <div className="l-shaped-line"></div>
        </div>
        <div className="right-area">
          <div className="message">
            <div>{name}</div>
            <section>{message}</section>
          </div>
          <div className="reply">Reply</div>
          {replies.length ? (
            <button
              className="list-replies"
              type="button"
              onClick={() => setDisplayReplies(!displayReplies)}
            >
              {displayReplies
                ? "Hide Replies"
                : `show ${replies.length} Replies`}
            </button>
          ) : (
            ""
          )}
          {displayReplies && replies && replies.length
            ? replies.length > 0 &&
              replies.map((e: any, i) => {
                return (
                  <>
                    <ReplyComment
                      replies={e.replies}
                      key={i}
                      name={e.name}
                      message={e.message}
                      id={`${id}${i}`}
                    />
                  </>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

function Comment(props: any) {
  const { name, message, replies, id } = props;
  const [displayReplies, setDisplayReplies] = useState(true);
  const [lastHeight, setLastHeight] = useState(0);
  useEffect(() => {
    if (displayReplies) {
      const ele = document.querySelector("#mb-" + id);
      const lastEle = document.querySelector(`#mb-${id}${replies.length - 1}`);
      console.log(ele?.clientHeight, ele, lastEle?.clientHeight, lastEle);
      setLastHeight(Number(lastEle?.clientHeight));
    } else {
      setLastHeight(0);
    }
  }, [displayReplies, id]);
  return (
    <>
      <div className="message-block message-block-root" id={`mb-${id}`}>
        {replies.length && displayReplies ? (
          <div
            className="straight-shaped-line"
            style={{
              height: `calc(100% - ${lastHeight}px )`,
            }}
          ></div>
        ) : (
          ""
        )}
        <div className="img"></div>
        <div className="right-area">
          <div className="message">
            <div>{name}</div>
            <section>{message}</section>
          </div>
          <div className="reply">Reply</div>
          {replies.length ? (
            <button
              className="list-replies"
              type="button"
              onClick={() => setDisplayReplies(!displayReplies)}
            >
              {displayReplies
                ? "Hide Replies"
                : `show ${replies.length} Replies`}
            </button>
          ) : (
            ""
          )}
          {displayReplies &&
            replies.length &&
            replies.length > 0 &&
            replies.map((e, i) => {
              return (
                <>
                  <ReplyComment
                    replies={e.replies}
                    key={i}
                    name={e.name}
                    message={e.message}
                    id={`${id}${i}`}
                  />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Comment;
