interface TestimonialCardProps {
  quote: string
  author: string
  rating: number
}

export default function TestimonialCard({
  quote,
  author,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-600 mb-4 italic">"{quote}"</p>
      <p className="font-semibold text-herb-dark">{author}</p>
    </div>
  )
}
