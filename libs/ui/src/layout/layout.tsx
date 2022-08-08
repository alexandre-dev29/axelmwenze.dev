import NavBar from '../nav-bar/nav-bar';
import Footer from '../footer/footer';

export interface LayoutProps {
  children: any;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <NavBar />
      <div className={'w-full flex flex-row '}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
