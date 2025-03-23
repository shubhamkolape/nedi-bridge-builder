import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const InitiativesShowcase = () => {
  const carouselItems = [
    {
      title: "Heritage on Wheels",
      description:
        "Bringing history & culture to villages across Northeast India, making heritage accessible to all.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      tag: "Cultural Preservation",
      path: "/heritage-on-wheels",
    },
    {
      title: "Cinematic Bridges",
      description:
        "Showcasing Northeast stories on global platforms and creating opportunities for local filmmakers.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      tag: "Film & Entertainment",
      path: "/cinematic-bridges",
    },
    {
      title: "North East Connect",
      description:
        "A comprehensive course for policymakers & corporates to better understand the region.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      tag: "Education",
      path: "/ne-connect",
    },
    {
      title: "Youth Power",
      description:
        "Training & employment initiatives in creative industries for the youth of Northeast India.",
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31",
      tag: "Youth Empowerment",
      path: "/youth-power",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 w-full">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to Our Platform
      </h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
        Discover our flagship programs that are transforming communities and
        creating new opportunities.
      </p>

      {/* Full Width Carousel */}
      <div className="w-full max-w-full relative">
        <Carousel className="w-full">
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem
                key={index}
                className={`transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                <div className="p-1 w-full">
                  <Card className="overflow-hidden w-full">
                    <div className="relative h-[500px] md:h-screen">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                      <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="inline-block px-3 py-1 text-xs font-medium bg-blue-500 rounded-full mb-2">
                          {item.tag}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="mb-4 text-white/80">{item.description}</p>
                        <Button
                          variant="default"
                          onClick={() => window.open(item.path, "_blank")}
                          className="relative z-10"
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Custom Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default InitiativesShowcase;
