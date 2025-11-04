import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-vidya-blue text-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Management</h3>
            <ul className="space-y-2.5 text-vidya-gray-blue">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vidya-teal-light mt-2 flex-shrink-0" />
                <span>BBA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vidya-teal-light mt-2 flex-shrink-0" />
                <span>BCA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vidya-teal-light mt-2 flex-shrink-0" />
                <span>BA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vidya-teal-light mt-2 flex-shrink-0" />
                <span>MBA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vidya-teal-light mt-2 flex-shrink-0" />
                <span>MCA</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Allied Health Science</h3>
            <ul className="space-y-2.5 text-vidya-gray-blue">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vidya-teal-light mt-2 flex-shrink-0" />
                <span>Medical Laboratory Technology (MLT)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vidya-teal-light mt-2 flex-shrink-0" />
                <span>Radiology & Imaging Technology</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vidya-teal-light mt-2 flex-shrink-0" />
                <span>Operation Theatre & Anesthesia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vidya-teal-light mt-2 flex-shrink-0" />
                <span>Optometry</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Medical Coaching</h3>
            <ul className="space-y-2.5 text-vidya-gray-blue">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vidya-teal-light mt-2 flex-shrink-0" />
                <span>MBBS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vidya-teal-light mt-2 flex-shrink-0" />
                <span>BDS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vidya-teal-light mt-2 flex-shrink-0" />
                <span>BAMS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vidya-teal-light mt-2 flex-shrink-0" />
                <span>Nursing</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Language Learning</h3>
            <ul className="space-y-2.5 text-vidya-gray-blue">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vidya-teal-light mt-2 flex-shrink-0" />
                <span>IELTS Coaching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vidya-teal-light mt-2 flex-shrink-0" />
                <span>German Language</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vidya-teal-light mt-2 flex-shrink-0" />
                <span>Spoken English</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0b9b4c1fb9d543255d1463047c57cdf948f00f70?width=316"
              alt="Vidya Academy"
              className="h-14 w-auto mb-4"
            />
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                  aria-label="Social media"
                >
                  <span className="sr-only">Social {i}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-vidya-coral mb-3 font-normal">Contact</h4>
            <p className="text-2xl font-bold mb-2">+91 9072514040</p>
            <p className="text-2xl font-bold mb-3">+91 9072524040</p>
            <p className="text-vidya-gray-blue">hello@myvidyaacademy.com</p>
          </div>

          <div>
            <h4 className="text-vidya-coral mb-3 font-normal">Location</h4>
            <p className="text-vidya-gray-blue leading-7">
              1st Floor, Adattil Complex,
              <br />
              OPP Aryavaidyasala OP Dept Changuvetty,
              <br />
              SH 71, Kottakkal, Kerala 676501
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-vidya-gray-darker">
          <p>Copyright ©2025 Vidya Academy. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
