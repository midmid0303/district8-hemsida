import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import "../styles.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
