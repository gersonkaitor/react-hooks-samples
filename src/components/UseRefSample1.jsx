import { useState, useEffect, useRef } from "react";

function UseRefSample1() {
  const [name, setName] = useState("");

  const renders = useRef(1);
  const prevName = useRef('');

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name
  },[name]);

  return (
    <div>
        <h1>useRef - Get Previous State</h1>
        <hr />
      <h3>Renders: {renders.current}</h3>
      <h3>Previous Name State: {prevName.current}</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-3"
      />
    </div>
  );
}

export default UseRefSample1;
