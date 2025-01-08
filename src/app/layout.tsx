"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
// import DefaultLayout from "./default-layout";
// import UserLayout from './user/user-layout';
import AdminLayout from './admin/admin-layout';
import { usePathname } from 'next/navigation';
import { Header } from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { AuthProvider } from "@/context/auth/AuthContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const excludedRoutes = ['/login', '/sign-up'];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdminPath = pathname.startsWith('/admin');
  const isExcludedRoute = excludedRoutes.includes(pathname);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          {isAdminPath ? (
            <AdminLayout>{children}</AdminLayout>
          ) : isExcludedRoute ? (
            <div>{children}</div>
          ) : (
            <div>
              <Header />
              {children}
              <Footer />
            </div>
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
