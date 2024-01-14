// @typescript-eslint/no-explicit-any
import { useEffect, useState } from "react";

interface Reply {
  name: string;
  message: string;
  replies?: Reply[];
}

interface CommentProps {
  name: string;
  message: string;
  replies: Reply[];
  id: string;
}

const ReplyComment: React.FC<CommentProps> = ({
  name,
  message,
  replies = [],
  id,
}: CommentProps) => {
  const [displayReplies, setDisplayReplies] = useState(false);
  const [lastHeight, setLastHeight] = useState<number>(0);

  useEffect(() => {
    if (displayReplies && replies.length) {
      const lastEle = document.querySelector(`#mb-${id}${replies.length - 1}`);
      lastEle?.classList.add("last-reply");

      if (replies.length === 1) {
        const forSingle = document.querySelector(
          `#mb-${id} > .right-area > .message-block`
        ) as HTMLElement;
        forSingle?.classList.add("for-single");
        setLastHeight(forSingle?.clientHeight ?? 0);
      } else {
        setLastHeight(Number(lastEle?.clientHeight));
      }
    } else {
      setLastHeight(0);
    }
  }, [displayReplies, id, replies.length]);

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
            ? replies.map((e: Reply, i: number) => (
                <ReplyComment
                  replies={e.replies || []}
                  key={i}
                  name={e.name}
                  message={e.message}
                  id={`${id}${i}`}
                />
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

const Comment: React.FC<CommentProps> = ({
  name,
  message,
  replies = [],
  id,
}: CommentProps) => {
  const [displayReplies, setDisplayReplies] = useState(true);
  const [lastHeight, setLastHeight] = useState<number>(0);

  useEffect(() => {
    if (displayReplies && replies.length) {
      //   const ele = document.querySelector("#mb-" + id);
      const lastEle = document.querySelector(`#mb-${id}${replies.length - 1}`);
      setLastHeight(Number(lastEle?.clientHeight));
    } else {
      setLastHeight(0);
    }
  }, [displayReplies, id, replies.length]);

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
            replies.map((e: Reply, i: number) => (
              <ReplyComment
                replies={e.replies || []}
                key={i}
                name={e.name}
                message={e.message}
                id={`${id}${i}`}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Comment;
