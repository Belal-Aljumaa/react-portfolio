import { Header, Sidebar, Explorer, Footer, Tabsbar } from "../Index";
import './Layout.scss'

const Layout = ({ children }: any) => {
  return (
    <div className="layout">
      <Header />
      <div className="main">
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main className="content">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
