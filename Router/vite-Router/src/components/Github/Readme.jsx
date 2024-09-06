import React from "react";
import { GoPencil } from "react-icons/go";

function Readme() {
  const items = ["Web Development", "JavaScript", "React"];
  const skill = [
    " C, C++, JAVA",
    " HTML5, CSS3,tailwind, JavaScript,React",
    "Git, GitHub",
  ];
  const inter = [
    "Creating responsive and interactive web applications",
    "Exploring new technologies and frameworks",
  ];
  const email = "gj701763@gmail.com";
  return (
    <>
      <div className="flex w-[1000px] h-fit border mb-2 pb-2 rounded-md mx-10 mt-5 pt-6 px-6 border-gray-300 flex-col">
        <span className="flex justify-between">
          <p className="text-xs opacity-90">gj701763 / README.md</p>
          <span>
            <GoPencil />
          </span>
        </span>
        <span className="pb-2 mt-5">
          <p className="text-3xl font-semibold"> Hi there! 👋 I'm Gajanan</p>
        </span>
        <hr />
        <span className="pb-2 mt-5">
          <p className="text-xl font-medium opacity-80">About Me</p>
        </span>
        <hr />
        <p className="pt-5 text-md opacity-90">
          Passionate Web Development Student proficient in various web
          technologies, including HTML, CSS, JavaScript, and more. Let's Code
          for a Better Tomorrow
        </p>

        <h1 className="py-3 text-lg font-medium opacity-80">
          🔭 Currently Learning
        </h1>

        <ul className="px-8 text-sm" style={{ listStyle: "disc" }}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h1 className="py-3 text-lg font-medium opacity-80">🧑‍💻 Skills</h1>
        <ul className="px-8 text-sm" style={{ listStyle: "disc" }}>
          {skill.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h1 className="py-3 text-lg font-medium opacity-80">🌱 Interests</h1>
        <ul className="px-8 text-sm" style={{ listStyle: "disc" }}>
          {inter.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h1 className="py-3 text-lg font-medium opacity-80">📫 Contact Me</h1>
        <ul className="px-8 text-sm" style={{ listStyle: "disc" }}>
          <li>
            <a
              className="text-blue-600 border-b border-blue-600"
              href="https://www.linkedin.com/in/gajanan-jadhav-999266228/"
            >
              Linkedin
            </a>
          </li>
          <li>
            <p>
              Email:{" "}
              <a
                className="text-blue-600 border-b border-blue-600"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Readme;
