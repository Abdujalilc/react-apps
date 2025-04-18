import React from "react";
import { createRoot } from "react-dom/client";
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese", }),
    React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "Cockatiel", }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
  ]);
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));

/*
import React from "react";
import { createRoot } from "react-dom/client";

const Pet = ({ name, animal, breed }) => (
  <div> <h1>{name}</h1> <h2>{animal}</h2> <h2>{breed}</h2> </div>
);
const App = () => (
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese" />
    <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
    <Pet name="Doink" animal="Cat" breed="Mix" />
  </div>
);
createRoot(document.getElementById("root")).render(<App />);
*/