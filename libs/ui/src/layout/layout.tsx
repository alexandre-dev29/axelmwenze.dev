import NavBar from '../nav-bar/nav-bar';

export interface LayoutProps {
  children: any;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <NavBar />
      <div className={'w-full flex flex-row '}>{children}</div>
    </div>
  );
}
export default Layout;
