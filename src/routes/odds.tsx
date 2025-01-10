import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/odds")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-2">
      <p className="text-xl text-center font-bold">
        This is work in progress as there is a lot i still need to do before
        even thinking about getting the odds calcualtor done :P
      </p>
    </div>
  );
}
