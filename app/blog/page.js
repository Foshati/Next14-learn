import Script from "next/script";
import Image from "next/image";

import imagePlaceHolder from "@/public/images/image.png";
import Link from "next/link";

export default function page() {
  const TextColor = {
    color: "red",
  };
  return (
    <div>
      {/* Script in next.js */}
      <Script
        strategy="afterInteractive"
        src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
      />
      {/* cdn */}
      <Script id="inline-script">{`console.log("fa inLine")`}</Script>
      {/* inline */}
      <Script src="/js/test.js" /> {/* external */}
      {/* image in next */}
      <div>
        {/* <img src="/images/image.png" alt="image" width={300} height={300} /> */}
        <Image src="/images/image.png" alt="image" width={300} height={300} />
        <Image
          src={imagePlaceHolder}
          placeholder="blur"
          alt="image"
          width={300}
          height={300}
        />
        \{/* style in next.js */}
        <p style={{ color: "blue", fontSize: "30px" }}>blog</p>
        <p style={TextColor}>blog2</p>
        {/*      <div>
          <Image
            src="/images/image.png"
            placeholder="blur"
            blurDataUrl=""
            alt="image"
            width={300}
            height={300}
          />
        </div> */}
      </div>
    </div>
  );
}
