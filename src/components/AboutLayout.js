import AboutNavbar from "./AboutNavbar";
import Footer from "./Footer";

export default function AboutLayout({ children }) {
  return (
    <>
      <AboutNavbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}