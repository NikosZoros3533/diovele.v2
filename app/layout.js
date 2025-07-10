import Chillax from "next/font/local";
import Clash from "next/font/local";
import Cabinet from "next/font/local";
import "./globals.css";
import MenuButton from "@/components/MenuButton/MenuButton";
import Menu from "@/components/Menu/Menu";

const chillax = Chillax({
  variable: "--font-chillax",
  subsets: ["latin"],
  src: "../public/fonts/Chillax-Semibold.woff2",
});

const clash = Clash({
  variable: "--font-clash",
  subsets: ["latin"],
  src: "../public/fonts/ClashDisplay-Bold.woff2",
});

const cabinet = Cabinet({
  variable: "--font-cabinet",
  subsets: ["latin"],
  src: "../public/fonts/CabinetGrotesk-Variable.woff2",
});

export const metadata = {
  title: "DioVele",
  description: "Award-winning photography of DioVele",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${chillax.variable} ${cabinet.variable} ${clash.variable}`}
      >
        <Menu/>
        {children}
      </body>
    </html>
  );
}
