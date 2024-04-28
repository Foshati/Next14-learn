"use client";

export default function Error({ error, reset }) {
  return (
    <>
      <div>{error.message}</div>
      <button onClick={reset}>try again</button>
    </>
  );
}
