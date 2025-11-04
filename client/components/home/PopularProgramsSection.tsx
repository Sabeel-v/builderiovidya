export function PopularProgramsSection() {
  const programs = [
    {
      title: "Medical Laboratory\nTechnology (MLT)",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0686561e61a866a76b4d618779b9e3ee92874ed4?width=522",
      bg: "bg-vidya-gray-light",
    },
    {
      title: "BBA",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/fc60543b9a751284e374fbc7055fafd7ff5d45d1?width=450",
      bg: "bg-[#DBF8FA]",
    },
    {
      title: "B.com",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/5f20b79cfb5d2eff588d7d7582a6ce682cd208d9?width=504",
      bg: "bg-[#F9EFEE]",
    },
  ];

  return (
    <section className="bg-vidya-gray-light py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-bold text-vidya-blue mb-12">
          Popular Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className={`${program.bg} rounded-[30px] overflow-hidden`}
            >
              <div className="p-8">
                <img
                  src={program.image}
                  alt=""
                  className="w-full max-w-[260px] h-auto mx-auto mb-6"
                />
                <h3 className="text-3xl font-bold text-vidya-blue mb-4 whitespace-pre-line">
                  {program.title}
                </h3>
                <p className="text-lg text-gray-700 leading-7 mb-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <button className="text-vidya-blue text-xl font-semibold inline-flex items-center gap-2">
                  More
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
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button className="w-11 h-11 rounded-lg border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
              <path
                d="M9.5 11.1172L0.970703 6L9.5 0.882812V11.1172Z"
                fill="white"
                stroke="#AAB2B8"
              />
            </svg>
          </button>
          <button className="w-11 h-11 rounded-lg border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50">
            <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
              <path
                d="M9.5 6.0625L0.5 11.2588V0.865234L9.5 6.0625Z"
                fill="white"
                stroke="#AAB2B8"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
