import React from "react";

export default function Layout(props) {
  return (
    <div className="flex gap-8">
      {props.children}
      {props.team}
      {props.analytics}
    </div>
  );
}
