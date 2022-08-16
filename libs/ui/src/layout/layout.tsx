import NavBar from '../nav-bar/nav-bar';
import SocialLinks from '../social-links/social-links';

export interface LayoutProps {
  children: any;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={'relative'}>
      <NavBar />
      <SocialLinks />
      <div className={'w-full flex flex-row '}>{children}</div>
    </div>
  );
}
export default Layout;
