// "use-client";
import Navbar from "@/Components/Navbar/Navbar";
import React from "react";
import Rent1 from "../../Assets/images/rent1.jpg";
import Rent2 from "../../Assets/images/rent2.jpg";
import Rent3 from "../../Assets/images/rent3.jpg";
import Rent4 from "../../Assets/images/rent4.jpg";
import Rent5 from "../../Assets/images/rent5.jpg";
import Rent6 from "../../Assets/images/rent6.jpg";
import Footer from "@/Components/Footer/Footer";

const RentalMachines = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="min-h-screen relative overflow-hidden font-sans">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed filter brightness-50"
          style={{
            backgroundImage:
              "url('https://www.marketwatch.com/story/american-farmers-urgently-need-new-technology-to-keep-food-on-the-worlds-table-56a4798a')",
          }}
        ></div>

        <div className="absolute inset-0 z-10">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-800/30 to-black opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent opacity-40 animate-gradient-x"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-20 animate-bounce-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20 animate-bounce-slow-reverse"></div>
        </div>

        <div className="relative mt-80 z-20 flex flex-col items-center justify-center h-full text-center px-6 space-y-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 animate-fade-in">
            Let's Cultivate Productivity 🌱
          </h2>

          <h1 className="text-[45px] sm:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-wide drop-shadow-2xl animate-slide-in">
            Connect with{" "}
            <span className="text-green-400 underline decoration-wavy">
              AgroMart
            </span>
            <h1 className="text-[45px] sm:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-wide drop-shadow-2xl animate-slide-in">
              for Your Rental Equipment Brands
            </h1>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl leading-relaxed drop-shadow-md animate-fade-in-delayed">
            Whether you're looking to rent agricultural machinery, a farmer in
            need of support, or a potential partner, we’re here to help. Contact
            us and let’s work together to foster a thriving agricultural future.
          </p>

          <div className="flex items-center space-x-6">
            <div className="w-16 h-1 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-bold text-lg tracking-wider uppercase animate-bounce">
              Need a Rental? Let’s Talk Equipment Solutions!
            </span>
            <div className="w-16 h-1 bg-green-500 rounded-full animate-pulse"></div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 mt-6 pb-8">
            <a
              href="#contact-form"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-16 rounded-full shadow-2xl transition-transform transform hover:scale-110 hover:shadow-green-500/50 animate-fade-up"
            >
              Reach Out to Us!
            </a>
          </div>
        </div>

        <div className="absolute top-0 w-full h-64 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      {/* Rental section */}
      <div className="pt-14 bg-gradient-to-tr to-slate-400 via-slate-100 from-slate-200">
        <div>
          <div className="flex justify-center items-center flex-col space-y-6">
            <h1 className="text-center text-5xl text-green-700 font-bold font-serif">
              Rental Machines Agro Mart
            </h1>
            <span className="w-[900px] text-lg font-serif text-black text-center ">
              At AgroMart, we offer a wide range of high-quality agricultural
              machinery for rent, providing farmers and businesses with the
              equipment they need to succeed. From tractors to harvesters, our
              rental solutions ensure you have the right tools for every task,
              helping you work efficiently and cost-effectively. Explore our
              fleet and find the perfect machine for your next project!
            </span>
            <label htmlFor="search"></label>
            <input
              type="search"
              name="search"
              placeholder="Search your item here"
              className="w-[620px] p-3 m-4 border focus:border-green-700 rounded-xl "
            />
          </div>
          {/* cards */}
          <div className="flex justify-center items-center flex-wrap space-x-6 rounded-2xl pb-14">
            <div className="w-[460px] border space-y-3 mt-10">
              <img
                className="w-[460px] h-[250px]  border-spacing-4"
                src={Rent1.src}
                alt="rent1"
              />
              <div className=" flex justify-around items-start flex-col space-y-4">
                <h1 className="text-3xl font-bold text-center text-green-700 font-serif">
                  PREET Harvester
                </h1>
                <span className="text-black font-serif ">
                  For over 80 years, PREET has been dedicated to serving farmers
                  with innovative and dependable agricultural machinery. PREET's
                  products empower the agriculture sector by providing reliable
                  solutions for harvesting and other farming needs, ensuring
                  efficiency and productivity in every field.
                </span>
                <button className="bg-[#47b881] hover:bg-[#3a9149] text-white font-bold py-4 px-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-[#66bb6a]/50">
                  BROWSE PREET HARVESTER EQUIPMENT
                </button>
              </div>
            </div>
            <div className="w-[460px] border space-y-3 mt-10">
              <img
                className="w-[460px] h-[250px]  border-spacing-4"
                src={Rent2.src}
                alt="rent1"
              />
              <div className=" flex justify-around items-start flex-col space-y-4">
                <h1 className="text-3xl font-bold text-center text-green-700 font-serif">
                  GEO GRUND
                </h1>
                <span className="text-black font-serif ">
                  GEO GRUND ZAXIS is a well-known name in the agricultural and
                  construction equipment industry, delivering cutting-edge
                  solutions that combine innovation, efficiency, and
                  reliability. Designed to meet the needs of modern farming and
                  industrial operations, GEO GRUND ZAXIs machines are versatile
                  and built for superior performance in demanding conditions.
                </span>
                <button className="bg-[#47b881] hover:bg-[#3a9149] text-white font-bold py-4 px-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-[#66bb6a]/50">
                  BROWSE GEO GRUND AGRICULTURAL CONSTRUCTION MACHINE EQUIPMENT
                </button>
              </div>
            </div>
            <div className="w-[460px] border space-y-3 mt-10">
              <img
                className="w-[460px] h-[250px]  border-spacing-4"
                src={Rent3.src}
                alt="rent1"
              />
              <div className=" flex justify-around items-start flex-col space-y-4">
                <h1 className="text-3xl font-bold text-center text-green-700 font-serif">
                  KOMATSU
                </h1>
                <span className="text-black font-serif ">
                  KOMATSU, a global leader in construction, mining, and
                  industrial machinery, has been at the forefront of innovation
                  and reliability for nearly a century. Established in 1921 in
                  Japan, KOMATSU started as a small manufacturer and has grown
                  into one of the most trusted names in the heavy equipment
                  industry. With a commitment to quality, sustainability, and
                  technological advancement, KOMATSU delivers machinery
                  solutions that empower industries worldwide to operate
                  efficiently and productively.
                </span>
                <button className="bg-[#47b881] hover:bg-[#3a9149] text-white font-bold py-4 px-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-[#66bb6a]/50">
                  BROWSE KAMATSU CONSTRUCTION MACHINE EQUIPMENT
                </button>
              </div>
            </div>
            <div className="w-[460px] border space-y-3 mt-10">
              <img
                className="w-[460px] h-[250px]  border-spacing-4"
                src={Rent4.src}
                alt="rent1"
              />
              <div className=" flex justify-around items-start flex-col space-y-4">
                <h1 className="text-3xl font-bold text-center text-green-700 font-serif">
                  HORSCH
                </h1>
                <span className="text-black font-serif ">
                  HORSCH is a globally recognized name in the agricultural
                  machinery industry, dedicated to providing innovative
                  solutions that empower farmers to achieve exceptional
                  productivity and efficiency. Founded in 1984 in Germany,
                  HORSCH combines cutting-edge technology with a passion for
                  farming, making it a trusted partner for agricultural
                  professionals worldwide. HORSCH’s equipment is designed with a
                  deep understanding of modern farming challenges, focusing on
                  precision, sustainability, and reliability.
                </span>
                <button className="bg-[#47b881] hover:bg-[#3a9149] text-white font-bold py-4 px-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-[#66bb6a]/50">
                  BROWSE HORSCH MACHINE EQUIPMENT
                </button>
              </div>
            </div>
            <div className="w-[460px] border space-y-3 mt-10">
              <img
                className="w-[460px] h-[250px]  border-spacing-4"
                src={Rent5.src}
                alt="rent1"
              />
              <div className=" flex justify-around items-start flex-col space-y-4">
                <h1 className="text-3xl font-bold text-center text-green-700 font-serif">
                  HORSCH Disc Machines
                </h1>
                <span className="text-black font-serif ">
                  HORSCH disc machines are renowned for their versatility,
                  durability, and precision in modern farming operations.
                  Designed to handle the demanding tasks of soil preparation,
                  residue management, and seedbed creation, HORSCH disc machines
                  deliver superior performance while promoting sustainable
                  farming practices. These machines are equipped with advanced
                  features to enhance efficiency and ensure excellent results,
                  making them an essential tool for agricultural professionals
                  aiming for higher productivity.
                </span>
                <button className="bg-[#47b881] hover:bg-[#3a9149] text-white font-bold py-4 px-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-[#66bb6a]/50">
                  BROWSE HORSH DISC MACHINE EQUIPMENT
                </button>
              </div>
            </div>
            <div className="w-[460px] border space-y-3 mt-10">
              <img
                className="w-[460px] h-[250px]  border-spacing-4"
                src={Rent6.src}
                alt="rent1"
              />
              <div className=" flex justify-around items-start flex-col space-y-4">
                <h1 className="text-3xl font-bold text-center text-green-700 font-serif">
                  NEW HOLLAND
                </h1>
                <span className="text-black font-serif ">
                  New Holland is a global leader in agricultural and
                  construction machinery, recognized for its innovation,
                  reliability, and commitment to sustainable farming practices.
                  Established in 1895 in New Holland, Pennsylvania, the brand
                  has grown into one of the most trusted names in agriculture,
                  offering a comprehensive range of equipment designed to meet
                  the diverse needs of modern farmers. From tractors and
                  harvesters to advanced precision farming solutions, New
                  Holland’s machines are built to enhance productivity,
                  efficiency, and environmental stewardship.
                </span>
                <button className="bg-[#47b881] hover:bg-[#3a9149] text-white font-bold py-4 px-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-[#66bb6a]/50">
                  BROWSE NEW HOLLAND MACHINE EQUIPMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RentalMachines;
