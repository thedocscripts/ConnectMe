
import Providers from "./providers";
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";



export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      
      <body>
        
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
