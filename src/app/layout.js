import "./globals.css";

import Menu from "@/components/menu/Menu";

export const metadata = {
  title: "NextJS x GSAP Responsive Navigation",
  description: "by Codegrid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
