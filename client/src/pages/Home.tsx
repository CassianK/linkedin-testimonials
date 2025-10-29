import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { LinkedinIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-3">
            <LinkedinIcon className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              LinkedIn Testimonials
            </h1>
          </div>
          <p className="text-center text-gray-600 mt-4 text-lg">
            Professional recommendations and endorsements
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p className="text-sm">
            {testimonials.length} Professional Recommendations
          </p>
        </div>
      </footer>
    </div>
  );
}
