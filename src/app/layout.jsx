import { Gilda_Display, Poppins } from "next/font/google";
import "./globals.css";

const gilda = Gilda_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gilda",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Rawal Kothi | Luxury Heritage Hotel & Rooftop Restaurant in Chittorgarh",
  description:
    "Experience regal living at Rawal Kothi, Chittorgarh's premier heritage hotel featuring luxury royal suites, ornate Rajasthani architecture, and spectacular starlit rooftop dining with panoramic fort and city vistas.",
  keywords: [
    "Rawal Kothi",
    "Rawal Kothi Chittorgarh",
    "Heritage Hotel Chittorgarh",
    "Best Resort in Chittorgarh",
    "Rooftop Restaurant Chittorgarh",
    "Luxury Stay Chittorgarh Rajasthan",
  ],
  icons: {
    icon: "/113503.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${gilda.variable} ${poppins.variable} scroll-smooth`}>
      <body className="antialiased font-sans bg-[#FDFBF7] text-[#2C2725]">
        {children}
      </body>
    </html>
  );
}
