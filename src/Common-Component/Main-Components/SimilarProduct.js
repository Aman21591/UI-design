import Image from "next/image";
import BoxContainer from "./../BoxContainer";
function ShowCard({ title, imgSrc, imgAlt, children }) {
  return (
    <div className="max-w-[300px] flex flex-col items-start justify-start gap-2">
      <Image src={imgSrc} img={imgAlt} width={280} height={280 * 0.6} />
      <p className="font-medium text-lg">{title}</p>
      <p className="text-[hsl(0,_0%,_30%)]">{children}</p>
    </div>
  );
}
export default function SimilarProduct() {
  return (
    <div className="px-4 py-12">
      <BoxContainer className="flex flex-col items-stretch justify-start gap-8">
        <h2 className="font-semibold text-3xl">Try our other free products</h2>
        <div className="grid grid-rows-none sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
          <ShowCard
            title="Privacy Policy Generator"
            imgSrc="/public/images/privacy.png"
            imgAlt="image privacy"
          >
            Stock your store with 100s of products and start selling to
            customers in minutes, without the hassle of inventory or packaging.
          </ShowCard>
          <ShowCard
            className="Terms & Conditions Generator"
            imgSrc="/public/images/terms.png"
            imgAlt="image terms"
          >
            Stock your store with 100s of products and start selling to
            customers in minutes, without the hassle of inventory or packaging.
          </ShowCard>
          <ShowCard
            className="Domain Name Generator"
            imgSrc="/public/images/domain.png"
            imgAlt="image domain"
          >
            Stock your store with 100s of products and start selling to
            customers in minutes, without the hassle of inventory or packaging.
          </ShowCard>
          <ShowCard
            className="Invoice Generator"
            imgSrc="/public/images/invoice.png"
            imgAlt="image invoice"
          >
            Stock your store with 100s of products and start selling to
            customers in minutes, without the hassle of inventory or packaging.
          </ShowCard>
        </div>
      </BoxContainer>
    </div>
  );
}
