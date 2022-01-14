import SloganMaker from "../Common-Component/Main-Components/SloganMaker";
import HelpBar from "../Common-Component/Main-Components/HelpBar";
import SimilarProduct from "../Common-Component/Main-Components/SimilarProduct";

export default function MainPage() {
  return (
    <div>
      <HelpBar />
      <SimilarProduct />
      <SloganMaker />
    </div>
  );
}
