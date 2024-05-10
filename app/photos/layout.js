export default function layout(props) {
  return (
    <div>
      <div className="z-10"> {props.show}</div>

      {props.children}
    </div>
  );
}
