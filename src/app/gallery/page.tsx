import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    title: "Eternal Flow",
    medium: "Bronze Sculpture",
    year: "2023",
    dimensions: "120 x 80 x 60 cm",
    image: "/gallery-1.jpg"
  },
  {
    id: 2,
    title: "Urban Reflections",
    medium: "Mixed Media on Canvas",
    year: "2023",
    dimensions: "150 x 100 cm",
    image: "/gallery-2.jpg"
  },
  {
    id: 3,
    title: "Silent Dialogue",
    medium: "Marble Sculpture",
    year: "2022",
    dimensions: "90 x 70 x 50 cm",
    image: "/gallery-3.jpg"
  },
  {
    id: 4,
    title: "Abstract Harmony",
    medium: "Oil on Canvas",
    year: "2022",
    dimensions: "180 x 120 cm",
    image: "/gallery-4.jpg"
  },
  {
    id: 5,
    title: "Metamorphosis",
    medium: "Steel and Glass",
    year: "2021",
    dimensions: "200 x 150 x 100 cm",
    image: "/gallery-5.jpg"
  },
  {
    id: 6,
    title: "Cultural Fusion",
    medium: "Mixed Media Installation",
    year: "2021",
    dimensions: "Variable",
    image: "/gallery-6.jpg"
  }
]

export default function Gallery() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Gallery</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore a curated collection of past works, showcasing the evolution of my artistic journey
          through various mediums and themes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="group">
              <div className="relative aspect-square mb-4 overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-1">{item.medium}</p>
              <p className="text-gray-500 text-sm mb-1">{item.year}</p>
              <p className="text-gray-500 text-sm">{item.dimensions}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 