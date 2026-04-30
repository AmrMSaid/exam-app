import { slugify } from "@/shared/lib/utils/slugify";
import Image from "next/image";
import Link from "next/link";
import { IDiploma } from "../lib/types/diploma";

interface DiplomaItemProps {
  diploma: IDiploma;
}

export default function DiplomaItem({ diploma }: DiplomaItemProps) {
  return (
    // Card
    <article>
      <Link
        href={`/diplomas/${slugify(diploma.title)}/${diploma.id}`}
        className="relative"
      >
        {/* Image */}
        <div className="h-52">
          {diploma.image && (
            <Image
              src={diploma.image}
              alt={diploma.title}
              width={400}
              height={300}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          )}
        </div>

        {/* Title and description */}
        <div className="absolute w-full max-h-full z-10 inset-0 p-4 text-white flex group">
          <div className="bg-blue-600/75 backdrop-blur-md p-2.5 max-h-fit w-full mt-auto">
            {/* Title */}
            <h3 className="text-xl font-semibold">{diploma.title}</h3>

            {/* Description */}
            <p className="text-sm line-clamp-1 group-hover:line-clamp-none opacity-80">
              {diploma.description}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
