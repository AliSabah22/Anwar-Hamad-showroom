import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About the Artist</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-square">
            <Image
              src="/artist-portrait.jpg"
              alt="Anwar Hamad in studio"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
            <p className="text-gray-700 mb-4">
              Born and raised in a culturally rich environment, I developed a deep appreciation for
              artistic expression from an early age. My work explores the intersection of traditional
              techniques and contemporary concepts, creating pieces that bridge the past and present.
            </p>
            <p className="text-gray-700 mb-4">
              With over 15 years of experience in both sculpture and painting, I've developed a
              unique style that combines classical training with modern innovation. My pieces often
              incorporate elements of cultural heritage while addressing contemporary themes.
            </p>
            <p className="text-gray-700">
              Each artwork I create is a reflection of my ongoing dialogue with materials, form,
              and meaning. I believe in the power of art to connect people across boundaries and
              to inspire meaningful conversations.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Exhibitions & Recognition</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Solo Exhibitions</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>"Eternal Forms" - Contemporary Art Museum, 2023</li>
                <li>"Cultural Dialogues" - Modern Art Gallery, 2021</li>
                <li>"Material Memories" - International Art Center, 2019</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Group Exhibitions</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>International Sculpture Biennale, 2023</li>
                <li>Contemporary Art Fair, 2022</li>
                <li>Modern Masters Exhibition, 2021</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Artist Statement</h2>
          <p className="text-gray-700 mb-8">
            My work is driven by a fascination with the relationship between form and meaning,
            tradition and innovation. Through sculpture and painting, I explore how materials can
            convey emotion and tell stories that transcend language and cultural boundaries.
          </p>
          <p className="text-gray-700">
            I believe that art should challenge, inspire, and connect. Each piece I create is an
            invitation to engage in a dialogue about our shared human experience and the world
            we inhabit.
          </p>
        </div>
      </div>
    </div>
  )
} 