export default function productSegment({ params }) {
  console.log(params.id);
  return (
    <div>
      <p> segment:{params.id}</p>
      <p> JSONsegment:{JSON.stringify(params.id)}</p>
    </div>
  );
}
