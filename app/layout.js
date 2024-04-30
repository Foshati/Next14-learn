import Header from "@/components/Header";
import "./globals.css";
import { Roboto } from "next/font/google";

const RobotoFont = Roboto({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

export const metadata = {
  title: "next.js14-learn",
  description: "this is the best course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={RobotoFont.className}>
      <body>
        <div>
          <Header />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
