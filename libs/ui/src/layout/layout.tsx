import NavBar from '../nav-bar/nav-bar';
import Footer from '../footer/footer';

export interface LayoutProps {
  children: any;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
