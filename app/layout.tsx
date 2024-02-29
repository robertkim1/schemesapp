import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Schemes App",
  description: "A Productivity App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// import Link from 'next/link';

// const Header = ({ user }) => {
//   return (
//     <header>
//       <nav>
//         <div className="logo">
//           <Link href="/">
//             <a>My App</a>
//           </Link>
//         </div>
//         <div className="nav-links">
//           {user ? (
//             <>
//               <span>Welcome, {user.username}!</span>
//               <button>Sign Out</button>
//             </>
//           ) : (
//             <>
//               <Link href="/signin">
//                 <a>Sign In</a>
//               </Link>
//               {/* Add sign-up link if needed */}
//             </>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// const Footer = () => {
//   return (
//     <footer>
//       <div className="copyright">
//         <p>&copy; 2024 Your App. All rights reserved.</p>
//       </div>
//       <div className="about-section">
//         <h3>About Us</h3>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget justo sed quam euismod rutrum.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;