import React, { ReactNode, ComponentType } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

// HOC để áp dụng Layout
export const withLayout = (Component: ComponentType) => {
  return () => (
    <Layout>
      <Component />
    </Layout>
  );
};
