import Image from "next/image"

const ProductGalaray = () => {
  return (
    <div className="space-y-6">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl bg-section-bg border border-white/5">
              <Image
                src="/product.png" 
                alt="Culinary Masterpiece"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              {/* Artistic Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-background/60 backdrop-blur-xl border border-white/10 rounded-full">
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Chef's Signature</p>
              </div>
            </div>
            
            {/* Thumbnail Row (Optional Touch) */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square relative rounded-xl overflow-hidden bg-section-bg border border-white/5 cursor-pointer hover:border-primary/50 transition-colors">
                  <Image src="/product.png" alt="view" fill className="object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
  )
}

export default ProductGalaray