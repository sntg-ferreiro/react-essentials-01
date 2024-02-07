import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const descriptors = ["MuyMuyGroso", "Fundamental viejooo", "Crucial vite"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function Header() {
  const description = descriptors[genRandomInt(descriptors.length)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
