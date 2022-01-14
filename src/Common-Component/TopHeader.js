import Image from "next/image";
import BoxContainer from "./BoxContainer";
export default function TopHeader() {
  return (
    <header className="p-4 pb-32 bg-primary-blue">
      <BoxContainer classname="flex flex-row items-center justify-between gap-4 flex-wrap">
        <Image
          src="/public/logo.svg"
          alt="logo"
          width={156 * 0.75}
          height={44 * 0.75}
        />
        <nav className="flex flex-row items-center justify-end gap-8">
          <a href="#" className="text-white">
            Sign In
          </a>
          <a href="#" className="rounded px-4 py-2 bg-white text-primary-blue">
            Dukaan for PC
          </a>
        </nav>
      </BoxContainer>
    </header>
  );
}
