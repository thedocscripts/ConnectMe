
import Providers from "./providers";
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import OffcanvasExample from "@/components/Navbar";


export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      
      <body>
        
        <Providers>
          <OffcanvasExample />
          {children}
        </Providers>
      </body>
    </html>
  )
}
