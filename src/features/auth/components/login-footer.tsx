import Link from 'next/link';

export default function LoginFooter() {
  return (
    <div className="font-medium mt-4 text-gray-500 text-sm self-center">
      Don’t have an account?{" "}
      <Link
        className="text-blue-600 hover:text-blue-700 hover:underline "
        href={"/register"}
      >
        Create yours
      </Link>
    </div>
  );
}
