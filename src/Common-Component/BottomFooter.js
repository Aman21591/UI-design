import Image from "next/image";
import BoxContainer from "./BoxContainer";
function AnchorLink({ children }) {
  return (
    <div className="flex flex-col items-start justify-start gap-2">
      {children}
    </div>
  );
}
export default function BottomFooter() {
  return (
    <footer className="p-4 bg-[hsl(260,_11%,_11%)] text-white">
      <BoxContainer className="flex flex-col items-stretch justify-start gap-8">
        <div className="flex flex-row items-start justify-between gap-8 flex-wrap">
          <Image
            src="/public/logo.svg"
            alt="logo"
            width={156 * 0.75}
            height={44 * 0.75}
          />

          <div className="flex flex-row items-start justify-start gap-8 flex-wrap">
            <AnchorLink>
              <a href="#">Contact</a>
              <a href="#">{"FAQ's"}</a>
            </AnchorLink>
            <AnchorLink>
              <a href="#">Tutorials</a>
              <a href="#">Blog</a>
            </AnchorLink>
            <AnchorLink>
              <a href="#">Privacy</a>
              <a href="#">Banned Items</a>
            </AnchorLink>
            <AnchorLink>
              <a href="#">About</a>
              <a
                href="#"
                className="flex flex-row items-center justify-start gap-2"
              >
                <span>Jobs</span>
                <span className="rounded-full w-6 h-6 bg-white text-black text-sm leading-none grid place-items-center">
                  3
                </span>
              </a>
            </AnchorLink>
            <AnchorLink>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </AnchorLink>
          </div>
        </div>
        <div className="border-t border-white/20"></div>
        <div className="text-sm flex flex-row items-center justify-between gap-2 flex-wrap">
          <p>Dukaan 2020, All rights reserved.</p>
          <div className="flex flex-row items-center justify-end gap-2">
            <p>Made in</p>
            <Image
              src="/public/Flag.svg"
              alt="flag of india"
              width={24}
              height={24 * 0.75}
            />
          </div>
        </div>
      </BoxContainer>
    </footer>
  );
}
