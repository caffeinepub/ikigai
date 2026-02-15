import { Outlet } from '@tanstack/react-router';
import SiteHeader from '../navigation/SiteHeader';
import SiteFooter from '../navigation/SiteFooter';
import YogaMorphBackground from './YogaMorphBackground';

export default function SiteLayout() {
  return (
    <div className="site-background flex min-h-screen flex-col">
      <YogaMorphBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
