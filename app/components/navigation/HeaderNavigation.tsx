import { Bars3Icon } from "@heroicons/react/24/outline";

import { WalletInput } from "@/app/components";

interface HeaderNavigationProps {
  setSidebarOpen: (open: boolean) => void;
}

const HeaderNavigation = ({ setSidebarOpen }: HeaderNavigationProps) => {
  return (
    <>
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-black bg-opacity-40 px-4 shadow-sm backdrop-blur-md sm:gap-x-6 sm:px-6 lg:px-8">
        <div className="flex  w-full items-center justify-between self-stretch">
          <div className="flex items-center">
            <button
              type="button"
              className="-m-2.5 mr-4 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>

            {/* Wallet Input */}
            <WalletInput source="navBar" />
          </div>

          <div className="hidden items-center gap-x-2 sm:flex lg:gap-x-4">
            {/* Heluis.dev button */}
            <a
              className="flex items-center justify-center rounded-full bg-indigo-100/5 px-1 py-1 text-xs font-semibold leading-6 text-accent ring-1 ring-inset ring-accent/10 transition duration-200 ease-in-out hover:ring-accent/30 md:px-3 lg:text-sm"
              href="https://metavegas.luvnft.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              🎰 MetaVegas
            </a>

            {/* Separator */}
            <div
              className="block h-6 w-px lg:bg-gray-300/40"
              aria-hidden="true"
            />

            {/* Heluis.dev button */}
            <a
              className="flex items-center justify-center rounded-full bg-indigo-100/5 px-1 py-1 text-xs font-semibold leading-6 text-white ring-1 ring-inset ring-white/10 transition duration-200 ease-in-out hover:ring-white/30 md:px-3 lg:text-sm"
              href="https://solsea.io/c/61abfcb7ef2d14bc378c5be4"
              target="_blank"
              rel="noreferrer noopener"
            >
              💈 5D LUVR Philly
            </a>

            {/* Separator */}
            <div
              className="block h-6 w-px lg:bg-gray-300/40"
              aria-hidden="true"
            />

            {/* View docs button */}
            <a
              className="flex items-center justify-center rounded-full bg-indigo-100/5 px-1 py-1 text-xs font-semibold leading-6 text-white ring-1 ring-inset ring-white/10 transition duration-200 ease-in-out hover:ring-white/30 md:px-3 lg:text-sm"
              href="https://docs.helius.dev/compression-and-das-api/digital-asset-standard-das-api"
              target="_blank"
              rel="noreferrer noopener"
            >
              🐦 SolBird
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderNavigation;
