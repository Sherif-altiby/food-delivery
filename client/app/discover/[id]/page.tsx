import ProductGalaray from "@/components/ui/discover/ProductGalaray";
import ProductInfo from "@/components/ui/discover/ProductInfo";

const ProductDetails = () => {
  

  return (
    <section className="bg-background min-h-screen pt-32 pb-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          
          {/* Left Side: Image Gallery */}
          <ProductGalaray />

          {/* Right Side: Sticky Content */}
           <ProductInfo />
           
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;