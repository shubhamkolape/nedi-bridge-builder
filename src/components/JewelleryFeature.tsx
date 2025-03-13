
import React from 'react';
import { useScrollAnimation } from '../utils/animations';
import { ShoppingBag, ChevronRight, Star } from 'lucide-react';

const JewelleryFeature = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);
  const [contentRef, isContentVisible] = useScrollAnimation(0.2);
  const [imageRef, isImageVisible] = useScrollAnimation(0.3);

  const jewelryItems = [
    {
      name: "Tribal Silver Necklace",
      price: "₹12,500",
      tribe: "Naga",
      image: "https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1"
    },
    {
      name: "Traditional Earrings",
      price: "₹8,750",
      tribe: "Khasi",
      image: "https://images.unsplash.com/photo-1599459183200-21acdaad858c"
    },
    {
      name: "Heritage Bracelet",
      price: "₹9,200",
      tribe: "Mizo",
      image: "https://images.unsplash.com/photo-1633810541798-0343da964fc3"
    }
  ];

  return (
    <section 
      id="jewellery" 
      className="py-20 bg-nedi-ivory/30"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
    >
      <div className="nedi-container">
        <div className={`transition-all duration-1000 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="tag-pill bg-nedi-red/10 text-nedi-red mb-4 mx-auto block w-fit">Special Feature</span>
          <h2 className="section-title">BH Jewellery</h2>
          <p className="section-subtitle">
            Celebrating Northeast Tribal Art through exquisite handcrafted jewelry that tells stories of heritage and tradition.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div 
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ${isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-nedi-red">The Art of Tribal Craftsmanship</h3>
            <p className="text-lg mb-6">
              Each piece of BH Jewellery represents centuries of tribal craftsmanship and cultural heritage from Northeast India. Our artisans use traditional techniques passed down through generations, creating pieces that are not just jewelry, but wearable art and history.
            </p>
            <p className="text-lg mb-6">
              By supporting BH Jewellery, you contribute directly to preserving ancient crafts and providing sustainable livelihoods for artisan communities across the Northeast.
            </p>
            
            <div className="flex items-center space-x-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-nedi-green mb-1">8+</div>
                <div className="text-sm text-muted-foreground">Tribal Traditions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-nedi-green mb-1">200+</div>
                <div className="text-sm text-muted-foreground">Artisans Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-nedi-green mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Unique Designs</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="btn-primary inline-flex items-center">
                <ShoppingBag size={18} className="mr-2" />
                Explore Collection
              </a>
              <a href="#" className="btn-outline inline-flex items-center">
                Learn about Artisans
                <ChevronRight size={18} className="ml-1" />
              </a>
            </div>
          </div>

          <div 
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ${isImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {jewelryItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`glass-card overflow-hidden ${index === 0 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg">{item.name}</h4>
                      <span className="font-bold text-nedi-red">{item.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{item.tribe} Tradition</span>
                      <div className="flex items-center">
                        <Star size={14} className="text-amber-500 fill-amber-500" />
                        <Star size={14} className="text-amber-500 fill-amber-500" />
                        <Star size={14} className="text-amber-500 fill-amber-500" />
                        <Star size={14} className="text-amber-500 fill-amber-500" />
                        <Star size={14} className="text-amber-500 fill-amber-500" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JewelleryFeature;
