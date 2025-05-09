import "./globals.css";

export const metadata = {
  title: "Rishik Reddy",
  description: "Rishik Reddy's professional portfolio website showcasing projects, skills, and achievements.",
  keywords: "Rishik Reddy, Rishik Tech, Reddy, Male Rishik Reddy, Software Developer, Software Engineer, Machine Learning, Portfolio",
  author: "Rishik Reddy",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="google-site-verification=OdfSIZvMCsMAHgX_vFiSoTEUweKVqN46D6DhH04vOBo" />
        
        {/* JSON-LD Schema Markup for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Rishik Reddy",
          "url": "https://rishik.tech",
          "sameAs": [
            "https://www.linkedin.com/in/rishikreddym/",
            "https://github.com/MRishikReddy",
            "https://x.com/malerishikreddy"
          ],
        }) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
