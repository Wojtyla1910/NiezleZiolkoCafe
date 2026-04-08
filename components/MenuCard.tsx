import Image from 'next/image'

interface MenuCardProps {
  name: string
  description: string
  price: number
  image?: string
  category?: string
}

export default function MenuCard({
  name,
  description,
  price,
  image,
  category,
}: MenuCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        {category && (
          <p className="text-xs text-herb-green font-semibold uppercase mb-1">
            {category}
          </p>
        )}
        <h3 className="font-serif font-bold text-lg mb-2 text-herb-dark">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>
        <p className="text-herb-green font-bold text-lg">
          {price.toFixed(2)} zł
        </p>
      </div>
    </div>
  )
}
