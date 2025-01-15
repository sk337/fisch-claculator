import { ModeToggle } from "@/components/mode-toggle";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex justify-between items-center p-2">
        <div className="flex flex-row gap-2">
          <Link
            to="/"
            className="[&.active]:font-bold border-r-2 border-border p-2"
          >
            Home
          </Link>
          <Link
            to="/value"
            className="[&.active]:font-bold border-r-2 border-border p-2"
          >
            Value Calculator
          </Link>
          <Link to="/odds" className="[&.active]:font-bold p-2">
            Odds Calculator
          </Link>
        </div>

        <div>
          <ModeToggle />
        </div>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => (
    <div className="text-center font-bold text-2xl">404 Not Found</div>
  ),
  pendingComponent: () => (
    <div className="text-center font-bold text-2xl">Loading...</div>
  ),
});
