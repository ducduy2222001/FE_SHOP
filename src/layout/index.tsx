import React, { ReactNode, ComponentType } from "react";
import Header from "./components/header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "../common/components/scrollToTop";

type LayoutProps = {
  children: ReactNode;
  headerProps: object;
};

const Layout: React.FC<LayoutProps> = ({ children, headerProps }) => {
  return (
    <div className="layout">
      <Header {...headerProps} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

// HOC để áp dụng Layout
export const withLayout = (Component: ComponentType, headerProps: object) => {
  return () => (
    <Layout headerProps={headerProps}>
      <Component />
      <ScrollToTop />
    </Layout>
  );
};
