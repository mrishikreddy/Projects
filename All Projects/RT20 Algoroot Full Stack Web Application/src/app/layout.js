import "./globals.css";
import Navbar from "./Navbar"
import Cpr from "./copyright"
import { AuthProvider } from "./contexts/authContext";

export const metadata = {
  title: "Algo Root Assignment",
  description: "This is created by Rishik Reddy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <AuthProvider>
      <Navbar/>
      {children}
      <Cpr/>
    </AuthProvider>
      </body>
    </html>
  );
}