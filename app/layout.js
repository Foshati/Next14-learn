import Header from "@/components/Header";
import "./globals.css";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../public/fonts/OpenSans-VariableFont_wdth,wght.ttf",
});

export const metadata = {
  title: "next.js14-learn",
  description: "this is the best course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        <div>
          <Header />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
