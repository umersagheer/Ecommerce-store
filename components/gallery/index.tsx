"use client";

import { Image as ImageType } from "@/types";

import { Tab } from "@headlessui/react";
import GalleryTab from "./gallery-tab";
import Image from "next/image";

interface galleryProps {
  images: ImageType[];
}

const Gallery: React.FC<galleryProps> = async ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-4">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full sm:w-3/4">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square w-full relative rounded-lg overflow-hidden">
              <Image
                fill
                alt="image"
                src={image.url}
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
