import bakingImg from "../assets/brigadeiro-brwn.png";
import "./Header.css";

const projectDescriptions = ["Culturally-rich", "Creative", "Exploratory"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = projectDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={bakingImg} alt="Stylized atom" />
      <h1>theSugarStack</h1>
      <p>
        {description} mapping of global desserts while learning essential web
        development concepts.
      </p>
    </header>
  );
}
