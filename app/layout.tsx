import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://slack-support-stage.ringover-crm.xyz/js-livechat-iframe/main.js"
          userCdnId="0m13psBX7J5Av4qEOaJBD"
        ></script>
        <link
          rel="stylesheet"
          href="https://slack-support-stage.ringover-crm.xyz/css-livechat-iframe/main.css"
        />
      </head>

      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
