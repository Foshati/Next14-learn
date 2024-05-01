import Script from "next/script";

export default function page() {
  const TextColor = {
    color: "red",
  };
  return (
    <div>
      <p style={{ color: "blue", fontSize: "30px" }}>blog</p>
      <p style={TextColor}>blog2</p>

      {/* Script in next.js */}
      <Script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js" /> {/* cdn */}
      <Script id="inline-script">{`console.log("fa inLine")`}</Script> {/* inline */}
      <Script src="/js/test.js" /> {/* external */}
    </div>
  );
}
