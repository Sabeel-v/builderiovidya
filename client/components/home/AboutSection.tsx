export function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-vidya-coral rounded-[30px] overflow-hidden relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4e70503eb739e62d29f7897eabcc34e69cf4c8f4?width=912"
                alt="Student"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-vidya-coral text-xl md:text-2xl font-semibold">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-vidya-blue">
              Lorem Ipsum is simply
              <br />
              dummy text of the printing
            </h2>
            <p className="text-xl text-gray-700 leading-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border border-gray-300 rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-vidya-blue mb-2">
                  35<span className="text-vidya-coral">+</span>
                </div>
                <div className="text-3xl font-bold text-vidya-blue">
                  Programs
                </div>
              </div>
              <div className="border border-gray-300 rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-vidya-blue mb-2">
                  100<span className="text-vidya-coral">%</span>
                </div>
                <div className="text-3xl font-bold text-vidya-blue leading-tight">
                  Dedicated
                  <br />
                  Mentors
                </div>
              </div>
            </div>

            <button className="text-vidya-teal-light text-xl font-semibold inline-flex items-center gap-2 pt-4">
              More About Us
              <span className="w-7 h-7 rounded-full bg-vidya-coral flex items-center justify-center">
                <svg
                  width="11"
                  height="9"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 4.5L1 4.5M10 4.5L6.5 1M10 4.5L6.5 8"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
