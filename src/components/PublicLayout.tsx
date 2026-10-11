import { Outlet, Link } from "react-router-dom";
import { BackButton } from "@/components/BackButton";
const logoUrl = "/logo-caep.png";


export function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 bg-tactical-grid opacity-[0.05] pointer-events-none" />

      <header className="relative z-10 bg-sidebar text-sidebar-foreground border-b-2 border-primary">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoUrl} alt="Brasão do CAEP Sudeste" width={1024} height={1024} className="h-11 w-11 object-contain" />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-semibold tracking-wide">
                CAEP Sudeste
              </span>
              <span className="text-[11px] text-sidebar-foreground/65">
                Ações Especiais · Salve
              </span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <BackButton variant="light" />
          </div>
        </div>
      </header>


      <main className="relative z-10 flex-1 p-6 lg:p-10 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
