import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "next.js14-learn",
  description: "this is the best course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
