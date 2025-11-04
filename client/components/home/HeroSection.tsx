export function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/060149da999319e4ebdd7675c1099daf12e4a9a2?width=3840"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/66529e60482c332070222143938559ee7b4beaf4?width=2126"
          alt=""
          className="w-full max-w-[1063px] h-auto mx-auto"
        />
      </div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/510773ece19cc626d10e846c5edf99e5364a11da?width=1124"
              alt="Student with books"
              className="w-full max-w-[500px] mx-auto lg:mx-0"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-[59px] font-bold text-vidya-blue leading-tight">
              Lorem Ipsum is
              <br />
              simply dummy text
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="bg-vidya-teal text-white px-8 py-3.5 rounded-[31px] text-xl font-semibold hover:bg-vidya-teal-light transition-colors inline-flex items-center gap-3">
              Enquire Now
              <span className="w-10 h-10 rounded-full bg-vidya-blue flex items-center justify-center">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 6.5L1 6.5M15 6.5L9.5 1M15 6.5L9.5 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
