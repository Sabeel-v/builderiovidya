export function WhyChooseSection() {
  const features = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/462c6c9760f88eeb1e274fbb1ce3ad6ea74c45a9?width=46",
      title: "Modern Learning\nEnvironment",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/462c6c9760f88eeb1e274fbb1ce3ad6ea74c45a9?width=46",
      title: "Industry-Oriented\nCourses",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/462c6c9760f88eeb1e274fbb1ce3ad6ea74c45a9?width=46",
      title: "Dedicated Faculty\n& Mentors",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/462c6c9760f88eeb1e274fbb1ce3ad6ea74c45a9?width=46",
      title: "Career Support &\nPlacement Assistance",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/462c6c9760f88eeb1e274fbb1ce3ad6ea74c45a9?width=46",
      title: "Affordable Fee\nStructure",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/462c6c9760f88eeb1e274fbb1ce3ad6ea74c45a9?width=46",
      title: "Inclusive Support for\nNewcomers",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/462c6c9760f88eeb1e274fbb1ce3ad6ea74c45a9?width=46",
      title: "Value-Based\nEducation",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/462c6c9760f88eeb1e274fbb1ce3ad6ea74c45a9?width=46",
      title: "Strong Community &\nCampus Culture",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/462c6c9760f88eeb1e274fbb1ce3ad6ea74c45a9?width=46",
      title: "Safe & Student -\nFriendly Campus",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/462c6c9760f88eeb1e274fbb1ce3ad6ea74c45a9?width=46",
      title: "Strategic\nLocation",
    },
  ];

  return (
    <section className="bg-vidya-blue py-16 md:py-24 relative overflow-hidden">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/d92ee10ffbe9f2a6e41f3e8c10d3a9b065a48f71?width=1048"
        alt=""
        className="absolute left-0 top-1/2 -translate-y-1/2 w-auto h-[600px] opacity-80"
      />

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why
              <br />
              Choose us
            </h2>
            <p className="text-white text-xl leading-7 mb-8 max-w-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="bg-vidya-coral text-white px-8 py-3.5 rounded-[31px] text-xl font-semibold hover:bg-vidya-coral-dark transition-colors inline-flex items-center gap-3">
              Apply Now
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

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-vidya-blue-light/20 border border-vidya-blue-light rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-vidya-teal-light flex items-center justify-center flex-shrink-0">
                  <img src={feature.icon} alt="" className="w-6 h-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white whitespace-pre-line leading-tight">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
