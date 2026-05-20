import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
