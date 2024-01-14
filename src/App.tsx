import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Comment from "./Components/Comment/Comment";

function App() {
  const [count, setCount] = useState(0);

  const data = [
    {
      name: "Ram Kumar",
      message:
        "Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year B",
      replies: [
        {
          name: "Shyam Prashad",
          message: "Thank You and same to you",
          replies: [
            {
              name: "Ram Kumar",
              message:
                "Party kaile dinxas tero birthday ko chai. Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you a very happy new year Brother.Wish you",
              replies: [
                {
                  name: "Shyam Prashad",
                  message: "Aaile ta paisa xaina yaar",
                  replies: [
                    {
                      name: "Shyam Prashad",
                      message: "Aaile ta paisa xaina yaar",
                      replies: [],
                    },
                    {
                      name: "Last ko",
                      message: "Aaile ta paisa xaina yaar",
                      replies: [],
                    },
                  ],
                },
                {
                  name: "Shyam Prashad 2222",
                  message:
                    "Aaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta pai",
                  replies: [],
                },
                {
                  name: "Shyam Prashad 2222",
                  message:
                    "Aaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaarAaile ta paisa xaina yaar",
                  replies: [],
                },
              ],
            },
            {
              name: "Ram Kumar",
              message: "Party kaile dinxas tero birthday ko chai",
              replies: [],
            },
          ],
        },
        {
          name: "test",
          message:
            "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest testv testtestvtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest testv testtestvtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest testv testtestvtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest testv testtestvtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest testv testtestvtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest testv testtestvtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest testv testtestvtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest testv testtestvtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest testv testtestv",
          replies: [],
        },
      ],
    },
    {
      name: "Jorge Parker",
      message: "Wish you a very happy new year Brother",
      replies: [
        {
          name: "Jorge Parker",
          message: "Wish you a very happy new year Brother",
          replies: [],
        },
      ],
    },
    {
      name: "Jorge Parker",
      message: "Wish you a very happy new year Brother",
      replies: [],
    },
  ];

  return (
    <>
      <div className="message-area">
        {/* <div className="message-block">
          <div className="img">
            .<div className="l-shaped-line"></div>
          </div>
          <div className="right-area">
            <div className="message">
              <div>Jorge Parker</div>
              <section>Wish you a very happy new year Brother</section>
            </div>
            <div className="reply">Reply</div>

            <div className="message-block">
              <div className="img">
                .<div className="l-shaped-line"></div>
              </div>
              <div className="right-area">
                <div className="message">
                  <div>Jorge Parker</div>
                  <section>Wish you a very happy new year Brother</section>
                </div>
                <div className="reply">Reply</div>
              </div>
            </div>

            <div className="message-block">
              <div className="img">
                .<div className="l-shaped-line"></div>
              </div>
              <div className="right-area">
                <div className="message">
                  <div>Jorge Parker</div>
                  <section>Wish you a very happy new year Brother</section>
                </div>
                <div className="reply">Reply</div>
                <div className="message-block">
                  <div className="img">
                    .<div className="l-shaped-line"></div>
                  </div>
                  <div className="right-area">
                    <div className="message">
                      <div>Jorge Parker</div>
                      <section>Wish you a very happy new year Brother</section>
                    </div>
                    <div className="reply">Reply</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {data.map((e, i) => {
          return (
            <Comment
              name={e.name}
              message={e.message}
              replies={e.replies}
              id={i}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
