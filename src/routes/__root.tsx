import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/value" className="[&.active]:font-bold">
          Value Calculator
        </Link>
        <Link to="/odds" className="[&.active]:font-bold">
          Odds Calculator
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => (
    <div className="text-center font-bold text-2xl">404 Not Found</div>
  ),
});
