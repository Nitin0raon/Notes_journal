import "./globals.css";
import { Inter } from "next/font/google";
const inter=Inter({subsets:["latin"]});
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata = {
  title: "notes",
  description: "A note app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
    layout: {
      socialButtonsPlacement: 'bottom',
      socialButtonsVariant: 'iconButton',
      termsPageUrl: 'https://clerk.com/terms'
    }
  }}>
    <html lang="en">
      <body
        className={`${inter.className} `}>
          <div className="bg-[url('/bg.jpg)] opacity-50 fixed -z-10 inset-0"/>
          <Header/>
          <main className="min-h-screen">{children}</main>
          {/* <footer className="bg-orange-300 py-12 bg-opacity-1">
            <div className="mx-auto px-4 text-center text-gray-900"><p>made with love</p></div>
          </footer> */}
          
      </body>
    </html>
    </ClerkProvider>
  );
}
