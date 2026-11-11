import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="layout">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
