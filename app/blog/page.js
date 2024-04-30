import React from "react";

export default function page() {
  const TextColor = {
    color: "red",
  };
  return (
    <div>
      <p style={{ color: "blue", fontSize: "30px" }}>blog</p>
      <p style={TextColor}>blog2</p>
    </div>
  );
}
