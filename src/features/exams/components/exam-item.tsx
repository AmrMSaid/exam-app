import { Button } from "@/shared/components/ui/button";
import { slugify } from "@/shared/lib/utils/slugify";
import { CircleQuestionMark, MoveRight, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IExam } from "../lib/types/exams";

interface ExamItemProps {
  exam: IExam;
}

export default function ExamItem({ exam }: ExamItemProps) {
  return (
    // Card
    <article>
      <Link href={`/diplomas/${slugify(exam.title)}/${exam.id}`}>
        <div className="bg-blue-50 p-4 flex gap-4 relative group outline-0 hover:outline-1 outline-blue-200 outline-dashed h-31">
          {/* Image */}
          <div className="bg-blue-100 w-fit p-3.5 outline-1 outline-blue-300">
            {exam.image && (
              <Image
                src={exam.image}
                alt={exam.title}
                width={64}
                height={64}
                className="w-full h-auto object-cover object-center aspect-square"
                loading="eager"
              />
            )}
          </div>

          {/* Header and Description */}
          <div className="flex flex-col gap-1.5 w-full">
            {/* Header */}
            <div className="flex items-center justify-between">
              {/* Title */}
              <h3 className="text-blue-600 text-xl font-semibold">
                {exam.title}
              </h3>

              {/* Details */}
              <div className="flex items-center gap-1.5">
                <CircleQuestionMark size={18} />
                <p>{exam.questionsCount} Questions</p>
                <span className="outline-1 outline-gray-300 h-4"></span>
                <Timer size={18} />
                <p>{exam.duration} minutes</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm line-clamp-3">
              {exam.description}
            </p>
          </div>

          {/* Button */}
          <Button className="bg-blue-600 py-1.5 px-4 absolute bottom-0 right-0 m-2.5 hidden group-hover:flex gap-2.5 items-center uppercase cursor-pointer hover:bg-blue-700">
            start
            <MoveRight size={18} />
          </Button>
        </div>
      </Link>
    </article>
  );
}
