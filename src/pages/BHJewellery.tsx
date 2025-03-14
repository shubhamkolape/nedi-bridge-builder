
import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroSection from '../components/HeroSection';
import CTAButton from '../components/CTAButton';
import { useScrollAnimation } from '../utils/animations';
import { ShoppingBag, Users, MessageSquare } from 'lucide-react';

const BHJewellery = () => {
  const [contentRef, isContentVisible] = useScrollAnimation();
  const [productsRef, isProductsVisible] = useScrollAnimation();
  
  // Simulated jewelry products
  const jewelryProducts = [
    {
      id: 1,
      name: "Traditional Arunachal Necklace",
      price: 3200,
      image: "https://images.unsplash.com/photo-1620656798579-1984d7767bab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tribe: "Nyishi",
      description: "Hand-crafted silver necklace with traditional tribal motifs",
    },
    {
      id: 2,
      name: "Naga Tribal Earrings",
      price: 1800,
      image: "https://images.unsplash.com/photo-1633810253710-caedb4d51a06?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tribe: "Angami",
      description: "Authentic hand-beaten brass earrings with tribal symbolism",
    },
    {
      id: 3,
      name: "Manipuri Silver Bangle",
      price: 2500,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tribe: "Meitei",
      description: "Elegant silver bangle with intricate Manipuri patterns",
    },
    {
      id: 4,
      name: "Khasi Beaded Choker",
      price: 1600,
      image: "https://images.unsplash.com/photo-1635767798638-3875b31e0afc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tribe: "Khasi",
      description: "Colorful beaded choker representing Khasi cultural heritage",
    },
    {
      id: 5,
      name: "Assamese Gold-plated Junbiri",
      price: 4500,
      image: "https://images.unsplash.com/photo-1629735979067-4f0c2146daa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tribe: "Assamese",
      description: "Traditional gold-plated Junbiri necklace with cultural significance",
    },
    {
      id: 6,
      name: "Mizo Silver Headgear",
      price: 5200,
      image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tribe: "Mizo",
      description: "Ceremonial silver headgear worn during traditional Mizo festivals",
    },
  ];
  
  return (
    <PageLayout>
      <HeroSection
        title="BH Jewellery"
        subtitle="Celebrating Northeast Tribal Art Through Authentic Handcrafted Jewelry"
        backgroundImage="https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton href="#products" variant="primary">
            Shop Collection
          </CTAButton>
          <CTAButton href="#artisans" variant="outline">
            Meet the Artisans
          </CTAButton>
        </div>
      </HeroSection>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div ref={contentRef as React.RefObject<HTMLDivElement>} className={`max-w-4xl mx-auto transition-all duration-1000 ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-nedi-green">The Art of Tribal Jewelry</h2>
            
            <p className="text-lg mb-6 text-gray-700">
              BH Jewellery is a celebration of Northeast India's rich tribal heritage, translated into exquisite handcrafted jewelry pieces. Each creation tells a story of centuries-old traditions, skilled craftsmanship, and cultural symbolism.
            </p>
            
            <p className="text-lg mb-12 text-gray-700">
              Our collection features authentic designs from various tribes across the seven sisters of Northeast India, including Naga, Khasi, Manipuri, Mizo, and many more. Every piece is meticulously crafted by skilled local artisans using traditional techniques passed down through generations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-nedi-blue">Authentic Craftsmanship</h3>
                <p className="text-gray-700">
                  Each piece is handmade by skilled artisans using traditional techniques that have been preserved for generations.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-nedi-blue">Cultural Heritage</h3>
                <p className="text-gray-700">
                  Our jewelry represents the rich cultural heritage and symbolism of Northeast India's diverse tribal communities.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-nedi-blue">Economic Empowerment</h3>
                <p className="text-gray-700">
                  By supporting BH Jewellery, you're directly contributing to the economic empowerment of tribal artisans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-nedi-green">Featured Collection</h2>
          <p className="text-lg mb-12 text-center text-gray-700 max-w-3xl mx-auto">
            Discover our handcrafted pieces that blend traditional designs with contemporary elegance.
          </p>
          
          <div 
            ref={productsRef as React.RefObject<HTMLDivElement>}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${isProductsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {jewelryProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-nedi-blue">{product.name}</h3>
                    <span className="text-nedi-orange font-medium">₹{product.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Tribe: {product.tribe}</p>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <button className="w-full flex items-center justify-center gap-2 bg-nedi-green text-white py-2 rounded-md hover:bg-nedi-green/90 transition-colors">
                    <ShoppingBag size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <CTAButton href="/bh-jewellery/all-products" variant="secondary">
              View Entire Collection
            </CTAButton>
          </div>
        </div>
      </section>
      
      <section id="artisans" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-nedi-green">Meet Our Artisans</h2>
          <p className="text-lg mb-12 text-center text-gray-700 max-w-3xl mx-auto">
            Behind every piece of BH Jewellery is a skilled artisan with years of experience in traditional craftsmanship.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((artisan) => (
              <div key={artisan} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={`https://i.pravatar.cc/300?img=${artisan + 10}`} 
                    alt={`Artisan ${artisan}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-nedi-blue">Artisan Name</h3>
                  <p className="text-sm text-nedi-orange mb-3">Tribe: Angami</p>
                  <p className="text-gray-700 mb-4">
                    With over 20 years of experience, our artisan specializes in traditional jewelry making techniques passed down through generations.
                  </p>
                  <button className="flex items-center gap-2 text-nedi-green hover:text-nedi-green/80 transition-colors">
                    <Users size={16} />
                    Read Full Story
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto mt-16 bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-full min-h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1594671517394-050230aaca35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Jewelry Crafting Process" 
                  className="absolute w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-nedi-blue">Behind the Scenes</h3>
                <p className="text-gray-700 mb-6">
                  Take a glimpse into the traditional jewelry-making process, where our skilled artisans transform raw materials into exquisite pieces of wearable art.
                </p>
                <CTAButton href="#" variant="outline" className="inline-flex items-center gap-2">
                  <Play size={16} />
                  Watch the Process
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-nedi-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Custom Design Inquiry</h2>
            <p className="text-lg mb-12 text-center">
              Looking for a custom-designed piece or interested in bulk orders? Fill out the form below and our team will get back to you.
            </p>
            
            <form className="bg-white/10 backdrop-blur-md p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="inquiry-name" className="block text-sm font-medium text-white/90 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="inquiry-name"
                    name="name"
                    className="w-full p-3 bg-white/20 border border-white/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/60"
                    placeholder="Full Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiry-email" className="block text-sm font-medium text-white/90 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="inquiry-email"
                    name="email"
                    className="w-full p-3 bg-white/20 border border-white/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/60"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="inquiry-type" className="block text-sm font-medium text-white/90 mb-1">Inquiry Type</label>
                <select
                  id="inquiry-type"
                  name="inquiryType"
                  className="w-full p-3 bg-white/20 border border-white/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="" disabled selected className="text-gray-700">Select an option</option>
                  <option value="custom" className="text-gray-700">Custom Design</option>
                  <option value="bulk" className="text-gray-700">Bulk Order</option>
                  <option value="collaboration" className="text-gray-700">Collaboration</option>
                  <option value="other" className="text-gray-700">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="inquiry-message" className="block text-sm font-medium text-white/90 mb-1">Your Message</label>
                <div className="relative">
                  <textarea
                    id="inquiry-message"
                    name="message"
                    rows={4}
                    className="w-full p-3 pl-10 bg-white/20 border border-white/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/60"
                    placeholder="Please describe what you're looking for..."
                  ></textarea>
                  <MessageSquare size={18} className="absolute left-3 top-3 text-white/60" />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-nedi-orange text-white font-medium py-3 px-4 rounded-md hover:bg-nedi-orange/90 transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BHJewellery;
