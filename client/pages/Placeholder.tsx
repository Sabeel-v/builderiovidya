import { Link } from "react-router-dom";

export default function Placeholder({ pageName }: { pageName: string }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-vidya-gray-light">
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-vidya-blue mb-4">
          {pageName}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          This page is coming soon. Continue exploring to help build it!
        </p>
        <Link
          to="/"
          className="inline-block bg-vidya-teal text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-vidya-teal-light transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
