import "@styles/globals.css";

import Nav from "@Components/Nav";
import Provider from "@Components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompt",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
