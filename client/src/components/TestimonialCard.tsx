import { Card } from "@/components/ui/card";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-gray-200">
      <div className="relative">
        <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">
          {testimonial.id}
        </div>
        <img
          src={testimonial.image}
          alt={`Recommendation from ${testimonial.name}`}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    </Card>
  );
}
