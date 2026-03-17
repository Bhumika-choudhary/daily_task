// Child1.jsx
import Child2 from "./Child2";

function Child1(props) {
  return (
    <div>
      <h2>Child1 Component</h2>
      <Child2 data={props.data} />
    </div>
  );
}

export default Child1;