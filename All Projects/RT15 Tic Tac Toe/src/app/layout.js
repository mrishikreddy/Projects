import "./globals.css";

export const metadata = {
  title: "Rishik Tech Projects",
  description: "These projects are created by Rishik Reddy",
  keywords: "Rishik Reddy, Rishik Tech, Reddy, Male Rishik Reddy, Software Developer, Software Engineer, Machine Learning, Portfolio",
  author: "Rishik Reddy",
  icons: {
    icon: "./favicon.png",
  },
};


// ✅ Correct way to define viewport separately
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
