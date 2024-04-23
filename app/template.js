"use client";

import { useEffect } from "react";

function template({ children }) {
  useEffect(() => {
    console.log("fa");
  }, []);

  return <div>{children}</div>;
}

export default template;
