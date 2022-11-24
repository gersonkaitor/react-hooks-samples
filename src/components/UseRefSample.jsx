import { useRef } from "react";

function UseRefSample() {
  const inputRef = useRef();
  const paraRef = useRef();

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = 'Hello';
    inputRef.current.style.backgroundColor = 'green';
    paraRef.current.innerText = 'World'
  }

  return (
    <div>
    <h1>useRef - Create DOM References</h1>
    <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>Hello</p>
      </form>
    </div>
  );
}

export default UseRefSample;
