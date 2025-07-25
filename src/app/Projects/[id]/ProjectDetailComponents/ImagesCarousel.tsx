import Image from "next/image";
import { useEffect, useState } from "react";

const ImagesCarousel = ({
  projectImages,
}: {
  projectImages: string[];
}): JSX.Element => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % projectImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [projectImages.length]);

  return (
    <section className="mb-8">
      <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden bg-cyan-900/20 border border-cyan-700/50">
        <Image
          src={projectImages[currentImage] || "/placeholder.svg"}
          alt={`Captura del proyecto ${currentImage + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {projectImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImage ? "bg-cyan-400" : "bg-cyan-600/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImagesCarousel;
