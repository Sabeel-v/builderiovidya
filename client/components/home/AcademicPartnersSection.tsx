export function AcademicPartnersSection() {
  const partners = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/c88e32ba33e60272e147c28f1e702eb6861420bc?width=598",
      alt: "JAIN Online",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/8336ac381e67fcbe98215ff95a95fc823699caf1?width=530",
      alt: "Vidyasagar",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/30881dc62eb9900e331589e4db2e59200307ab41?width=442",
      alt: "DYP Online",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/80aede2ae8287d1781cddd4d08abf3665760a0be?width=348",
        alt: "ISDC",
    },
  ];

  return (
    <section className="bg-vidya-gray-light py-16 md:py-24 relative">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/3810cadd6617a911b266ff1b18f977ef03127746?width=1898"
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 w-auto h-64 opacity-30"
      />

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-vidya-blue mb-12">
          Academic Partners
          <br />& University Collaborations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-lg p-8 flex items-center justify-center min-h-[200px]"
            >
              <img
                src={partner.image}
                alt={partner.alt}
                className="w-full h-auto max-w-[220px]"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-vidya-teal text-white px-8 py-3.5 rounded-[31px] text-xl font-semibold hover:bg-vidya-teal-light transition-colors inline-flex items-center gap-3">
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
      </div>
    </section>
  );
}
