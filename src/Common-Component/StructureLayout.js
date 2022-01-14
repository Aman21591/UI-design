import TopHeader from "./TopHeader";
import BottomFooter from "./BottomFooter";
export default function StructureLayout({ children }) {
  return (
    <div className="bg-white font-GalanoGrotesque">
      <TopHeader />
      <main>{children}</main>
      <BottomFooter />
    </div>
  );
}
