// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-20">
        <div className="flex gap-6 text-gray-600">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">Services</a>
          <a href="#" className="hover:text-black">Resume</a>
          <a href="#" className="hover:text-black">Work</a>
          <a href="#" className="hover:text-black">Contact</a>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-full">
          Hive no
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-start gap-8">
        <h2 className="text-2xl text-gray-500">Software Developer</h2>
        
        <h1 className="text-6xl font-bold leading-tight">
          Hello I'm<br/>
          <span className="text-blue-600">Luke Coleman</span>
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          I excel at crafting elegant digital experiences and<br/>
          I am proficient in various programming languages and<br/>
          technologies.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 items-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2">
            DOWNLOAD CV
            <span className="text-xl">💬</span>
          </button>
          <div className="flex gap-3 text-2xl">
            <span>🔍</span>
            <span>📞</span>
            <span>💬</span>
            <span>💬</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-8 mt-12 w-full">
          <div className="border-l-2 border-black pl-4">
            <h3 className="text-4xl font-bold">11</h3>
            <p className="text-gray-600">Years of experience</p>
          </div>
          <div className="border-l-2 border-black pl-4">
            <h3 className="text-4xl font-bold">24</h3>
            <p className="text-gray-600">Projects completed</p>
          </div>
          <div className="border-l-2 border-black pl-4">
            <h3 className="text-4xl font-bold">7</h3>
            <p className="text-gray-600">Technologies mastered</p>
          </div>
          <div className="border-l-2 border-black pl-4">
            <h3 className="text-4xl font-bold">460</h3>
            <p className="text-gray-600">Code commits</p>
          </div>
        </div>
      </div>
    </main>
  )
}