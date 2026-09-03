import { useContext } from "react";
import NameContext from "./NameContext";

function NameDisplay() {
  const { name } = useContext(NameContext);

  return <h2>Hello, {name}</h2>;
}

export default NameDisplay;