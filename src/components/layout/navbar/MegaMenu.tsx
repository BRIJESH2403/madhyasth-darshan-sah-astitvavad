import { MENU_REGISTRY } from "./MenuRegistry";

export default function MegaMenu({ menuKey }: { menuKey: string }) {
  const Menu = MENU_REGISTRY[menuKey];
  if (!Menu) return null;

  return (
    <div className="absolute left-1/2 top-full -translate-x-1/2 z-40">
      <div className="h-6 w-full bg-transparent" />

      {/* MEGA MENU */}
      <div
        className="
          w-[92vw] xl:w-225
          rounded-2xl
          bg-white
          shadow-xl
          p-4
        "
      >
        {Menu}
      </div>
    </div>
  );
}
