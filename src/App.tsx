import React from "react";
import "./App.css";
import Comment from "./Components/Comment/Comment";

function App() {
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
    <div className="message-area">
      {data.map((comment, index) => (
        <Comment
          key={index} // Use a more unique identifier if possible
          name={comment.name}
          message={comment.message}
          replies={comment.replies}
          id={index.toString()} // Convert index to string for id
        />
      ))}
    </div>
  );
}

export default App;
