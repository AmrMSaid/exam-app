import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex gap-2.5 items-center text-blue-600 mb-16">
      <Image
        src="/folder-code.svg"
        alt="Exam App logo"
        width={40}
        height={40}
      />
      <h2 className="font-mono font-semibold text-xl">Exam App</h2>
    </div>
  );
}
