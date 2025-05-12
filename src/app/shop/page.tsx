import Image from 'next/image'

const shopItems = [
  {
    id: 1,
    title: "Whispers of Time",
    price: 4500,
    medium: "Bronze Sculpture",
    dimensions: "80 x 60 x 40 cm",
    image: "/shop-1.jpg",
    available: true
  },
  {
    id: 2,
    title: "Urban Dreams",
    price: 3200,
    medium: "Mixed Media on Canvas",
    dimensions: "120 x 90 cm",
    image: "/shop-2.jpg",
    available: true
  },
  {
    id: 3,
    title: "Eternal Balance",
    price: 2800,
    medium: "Marble Sculpture",
    dimensions: "70 x 50 x 30 cm",
    image: "/shop-3.jpg",
    available: true
  },
  {
    id: 4,
    title: "Abstract Emotions",
    price: 3800,
    medium: "Oil on Canvas",
    dimensions: "150 x 100 cm",
    image: "/shop-4.jpg",
    available: false
  }
]

export default function Shop() {
  return (
    <div className="min-h-screen py-20 px-4 bg-[#F5E6D3]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#2C3E50]">Shop</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Browse and purchase available artworks. Each piece comes with a certificate of authenticity
          and detailed care instructions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#2C3E50]">{item.title}</h3>
                <p className="text-gray-600 mb-1">{item.medium}</p>
                <p className="text-gray-500 text-sm mb-4">{item.dimensions}</p>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-[#2C3E50]">${item.price.toLocaleString()}</p>
                  {item.available ? (
                    <button className="bg-[#B4A7D6] text-white px-6 py-2 rounded-full hover:bg-[#2C3E50] transition-colors">
                      Purchase
                    </button>
                  ) : (
                    <span className="text-gray-500">Sold</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Interested in commissioning a custom piece? Contact me to discuss your vision.
          </p>
          <a 
            href="/contact"
            className="inline-block border-2 border-[#B4A7D6] text-[#B4A7D6] px-6 py-2 rounded-full hover:bg-[#B4A7D6] hover:text-white transition-colors"
          >
            Contact for Commissions
          </a>
        </div>
      </div>
    </div>
  )
} 