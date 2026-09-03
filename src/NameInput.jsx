import { useContext } from "react";
import NameContext from "./NameContext";

function NameInput() {
  const { name, setName } = useContext(NameContext);

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}

export default NameInput;