
"use client"
import Footer from "./Footer";
import Header from "./Header";
import '../assets/styles/globals.css'
import { useRouter } from "next/navigation";
import { AppProps } from "@/types/type";

 const AppLayout:React.FC<AppProps> = ({children}) => {

  return (
    <html lang="en">
      <body>
        <div className="appLayout">
          <Header />
          <div className="mainContent">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
export default AppLayout;
