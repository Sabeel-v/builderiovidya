export function OurCoursesSection() {
  const courses = [
    {
      title: "Medical Coaching\n& Admission\nGuidence",
      bg: "bg-vidya-gray-medium",
      textColor: "text-vidya-blue",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0686561e61a866a76b4d618779b9e3ee92874ed4?width=522",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/84bc4ed1c363905e500183695b6bb405229227c5?width=106",
    },
    {
      title: "Management",
      bg: "bg-vidya-blue",
      textColor: "text-white",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/a3e428879078fbbedb2bb7f04c235061d89f1cf3?width=1520",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/044dafdd0e989f348272986a64bcf7056ec76702?width=134",
    },
    {
      title: "Allied\nHealth Science",
      bg: "bg-vidya-teal",
      textColor: "text-white",
      image: "",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/3b5ff426478917b97f60f3de6a9680bd183d8ba1?width=128",
    },
    {
      title: "Commerce",
      bg: "bg-vidya-blue",
      textColor: "text-white",
      image: "",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/2570feec8affdf378a64c4830a0b07082d838fe6?width=92",
    },
    {
      title: "Language\nLearning",
      bg: "bg-vidya-coral",
      textColor: "text-white",
      image: "",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/8a8cf47b5dbb0d3c8d33c5c60ab90cbb77bd28da?width=126",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-12">
          <p className="text-vidya-coral text-xl md:text-2xl font-semibold mb-3">
            Our Courses
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-vidya-blue max-w-sm">
            Lorem Ipsum
            <br />
            is simply
            <br />
            dummy text
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className={`${courses[0].bg} rounded-[30px] p-8 relative overflow-hidden`}
          >
            <img src={courses[0].icon} alt="" className="w-14 h-auto mb-6" />
            <h3
              className={`text-3xl font-bold ${courses[0].textColor} whitespace-pre-line mb-4`}
            >
              {courses[0].title}
            </h3>
            <p className="text-lg leading-7 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            {courses[0].image && (
              <img
                src={courses[0].image}
                alt=""
                className="w-64 h-auto mx-auto mt-4"
              />
            )}
            <button className="mt-6 text-vidya-teal-light text-xl font-semibold inline-flex items-center gap-2">
              Apply Now
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

          <div
            className={`${courses[1].bg} rounded-[30px] p-8 relative overflow-hidden row-span-2`}
          >
            <img src={courses[1].icon} alt="" className="w-16 h-auto mb-6" />
            <h3 className={`text-3xl font-bold ${courses[1].textColor} mb-64`}>
              {courses[1].title}
            </h3>
            {courses[1].image && (
              <img
                src={courses[1].image}
                alt=""
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-auto"
              />
            )}
          </div>

          <div
            className={`${courses[2].bg} rounded-[30px] p-8 relative overflow-hidden row-span-2`}
          >
            <img src={courses[2].icon} alt="" className="w-16 h-auto mb-6" />
            <h3
              className={`text-3xl font-bold ${courses[2].textColor} whitespace-pre-line`}
            >
              {courses[2].title}
            </h3>
          </div>

          <div
            className={`${courses[3].bg} rounded-[30px] p-8 relative overflow-hidden`}
          >
            <img src={courses[3].icon} alt="" className="w-12 h-auto mb-6" />
            <h3 className={`text-3xl font-bold ${courses[3].textColor}`}>
              {courses[3].title}
            </h3>
          </div>

          <div
            className={`${courses[4].bg} rounded-[30px] p-8 relative overflow-hidden`}
          >
            <img src={courses[4].icon} alt="" className="w-16 h-auto mb-6" />
            <h3
              className={`text-3xl font-bold ${courses[4].textColor} whitespace-pre-line`}
            >
              {courses[4].title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
