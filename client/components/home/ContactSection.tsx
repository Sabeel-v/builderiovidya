export function ContactSection() {
  return (
    <section className="bg-vidya-coral py-16 md:py-24 relative overflow-hidden">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/6934e2560e93c78bd037cee46e2aba3035a8df80?width=666"
        alt=""
        className="absolute left-8 bottom-0 w-auto h-96 opacity-90"
      />

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Get in touch
        </h2>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            className="bg-vidya-coral border border-white rounded-xl px-6 py-4 text-white placeholder:text-[#FFDCD8] focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-vidya-coral border border-white rounded-xl px-6 py-4 text-white placeholder:text-[#FFDCD8] focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="bg-vidya-coral border border-white rounded-xl px-6 py-4 text-white placeholder:text-[#FFDCD8] focus:outline-none focus:ring-2 focus:ring-white"
          />
          <textarea
            placeholder="Messages"
            rows={6}
            className="bg-vidya-coral border border-white rounded-xl px-6 py-4 text-white placeholder:text-[#FFDCD8] focus:outline-none focus:ring-2 focus:ring-white md:col-span-1 md:row-span-2"
          />
        </div>

        <div className="text-center mt-8">
          <button className="bg-vidya-blue text-white px-12 py-4 rounded-xl text-lg font-normal hover:bg-vidya-blue-dark transition-colors">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
