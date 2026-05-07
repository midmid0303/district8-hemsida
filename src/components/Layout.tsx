import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import LoadingScreen from "./LoadingScreen";
import "../styles.css";
import { useLocation } from "@tanstack/react-router";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <>
      <LoadingScreen />
      {!isLanding && <SiteHeader />}
      {children}
      {!isLanding && <SiteFooter />}
    </>
  );
}
