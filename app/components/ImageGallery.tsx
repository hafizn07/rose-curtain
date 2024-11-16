import Image from "next/image";

interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ImageGalleryProps {
  images: ImageData[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="my-8">
      <div className="flex justify-center">
        <div className="columns-2 gap-3 lg:columns-3 lg:gap-5 [&>img:not(:first-child)]:mt-3 lg:[&>img:not(:first-child)]:mt-5">
          {images.map((image, index) => (
            <Image
              key={index}
              className="rounded-lg"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
