import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import { IconFileBroken } from "@tabler/icons-react";
import Image from 'next/image';

export function BentoGridDemo() {
  return (
    <BentoGrid className="w-full mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-100 dark:to-neutral-200 to-neutral-100"></div>
// );
const NewSkeleton = ( ) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl relative justify-center items-center" style={{ backgroundColor: '#0c74f4' }}>
      <Image
        src="/evolvelogo.png"
        alt="Skeleton image"
        width={100}
        height={100}
        className="object-cover rounded-xl"
        priority
      />
  </div>
);
const items = [
  {
    title: (
      <>
        Software Engineer at <a href="https://evolvebrasil.com/" className="text-blue-500" target="_blank">Evolve</a>
      </>
    ),
    description: "We transform challenges into solutions for your company.",
    header: <NewSkeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
];
