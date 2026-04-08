interface MenuItem {
  name: string
  price: number | null
}

interface MenuSectionProps {
  title: string
  items: MenuItem[]
  note?: string
}

export default function MenuSection({ title, items, note }: MenuSectionProps) {
  return (
    <div className="mb-8">
      <h2 className="font-serif font-semibold text-2xl text-herb-dark mb-6">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-warm-beige last:border-b-0">
            <span className="text-herb-dark font-medium">{item.name}</span>
            <span className="text-herb-green font-semibold">
              {item.price !== null ? `${item.price} zł` : 'Zapytaj obsługę'}
            </span>
          </div>
        ))}
      </div>
      {note && (
        <p className="text-sm text-gray-500 mt-4 italic">
          {note}
        </p>
      )}
    </div>
  )
}