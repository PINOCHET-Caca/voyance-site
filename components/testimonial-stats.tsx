export default function TestimonialStats() {
  return (
    <section className="bg-indigo-950 py-12 px-4 rounded-lg mb-0 max-w-6xl mx-auto relative z-10">
      <div className="flex flex-col items-center">
        <div className="max-w-3xl text-center mb-10 relative">
          <span className="text-purple-300 text-8xl font-serif absolute -left-8 -top-10 opacity-50">&quot;</span>
          <p className="text-gray-200 text-lg italic relative z-10">
            Précise et toujours pertinente. Elle ne m&apos;a jamais dit ce qui n&apos;était pas vrai. L&apos;homme qu&apos;elle a choisi
            pour moi parmi tous mes prétendants est celui qui m&apos;a demandée en mariage et je me marie cette année. Il est
            exactement comme elle l&apos;avait prédit avant que je ne commence à le fréquenter. Elle est vraiment
            exceptionnelle.
          </p>
          <span className="text-purple-300 text-8xl font-serif absolute -right-8 -bottom-16 opacity-50">&quot;</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <div className="bg-indigo-900/50 p-6 rounded-lg text-center">
            <h3 className="text-purple-300 text-3xl font-bold">60 millions</h3>
            <p className="text-gray-200">d&apos;utilisateurs satisfaits</p>
          </div>

          <div className="bg-indigo-900/50 p-6 rounded-lg text-center">
            <h3 className="text-purple-300 text-3xl font-bold">93,4%</h3>
            <p className="text-gray-200">de précision selon nos utilisateurs</p>
          </div>

          <div className="bg-indigo-900/50 p-6 rounded-lg text-center">
            <h3 className="text-purple-300 text-3xl font-bold">4,8/5</h3>
            <p className="text-gray-200">score de satisfaction</p>
          </div>

          <div className="bg-indigo-900/50 p-6 rounded-lg text-center">
            <h3 className="text-purple-300 text-3xl font-bold">500+</h3>
            <p className="text-gray-200">médiums rigoureusement sélectionnés</p>
          </div>
        </div>
      </div>
    </section>
  )
}