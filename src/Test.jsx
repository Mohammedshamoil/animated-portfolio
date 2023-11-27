import React, { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {
  const items = ["Homepage", "Services", "Portfolio", "About", "Contact"];

  const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React Js",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
      ],
    },

    {
      title: "Backend",
      skills: [
        {
          name: "Node Js",
          image: "https://nodejs.org/static/images/logo.svg",
        },
      ],
    },
  ];

  // const [open, setopen] = useState(false);
  const variants = {
    visible: {
      opacity: 1,
      x: 100,
      transition: { staggerChildren: 0.2, staggerDirection: -3 },
    },
    hidden: { opacity: 0 },
  };

  return (
    <div className="course">
      {/* <ul>
        {items.map(item=>(
          <li key={item}>{item}</li>
        ))}
      </ul> */}
      {/* {items.map((item) => (
        <h4 key={item}>{item}</h4>
      ))} */}

      <div className="skillconatiner">
        {skills.map((skill)=>(
          <div className=" skilltitle">
            <h2 key={skill}>{skill.title}</h2>
            {skill.skills.map(item=>(
              <div>{item.image}</div>
            ))}

          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
