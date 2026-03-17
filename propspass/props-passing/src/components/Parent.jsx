// Parent.jsx
import Child1 from "./Child1";

function Parent() {
  const message = "Hello from Parent 👋";

  return (
    <div>
      <h1>Parent Component</h1>
      <Child1 data={message} />
    </div>
  );
}

export default Parent;