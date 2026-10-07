import { Space_Grotesk } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={spaceGrotesk.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}