import Navbar from "@/Components/Navbar/Navbar";
import React from "react";
import Link from "next/link";
import Rent1 from "../../Assets/images/rent1.jpg";
import Rent2 from "../../Assets/images/rent2.jpg";
import Rent3 from "../../Assets/images/rent3.jpg";
import Rent4 from "../../Assets/images/rent4.jpg";
import Rent5 from "../../Assets/images/rent5.jpg";
import Rent6 from "../../Assets/images/rent6.jpg";
import Footer from "@/Components/Footer/Footer";
import Newsletter from "@/Components/NewsLetter/Newsletter";

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
          <div className="absolute inset-0 bg-gradient-to-b from-slate-400 via-green-800/30 to-black opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent opacity-40 animate-gradient-x"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-20 animate-bounce-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20 animate-bounce-slow-reverse"></div>
        </div>
        <div className="relative mt-32 sm:mt-48 z-20 flex flex-col items-center justify-center text-center px-6 space-y-6 sm:space-y-12">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-green-400 animate-fade-in">
            Let's Cultivate Productivity 🌱
          </h2>
          <h1 className="text-[35px] sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-wide drop-shadow-2xl animate-slide-in">
            Connect with{" "}
            <span className="text-green-400 underline decoration-wavy">
              AgroMart
            </span>
          </h1>
          <h1 className="text-[28px] sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-wide drop-shadow-2xl animate-slide-in">
            for Your Rental Equipment Brands
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-3xl sm:max-w-4xl leading-relaxed drop-shadow-md animate-fade-in-delayed">
            Whether you're looking to rent agricultural machinery, a farmer in
            need of support, or a potential partner, we’re here to help.
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-4">
            <div className="w-16 h-1 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-bold text-sm sm:text-lg tracking-wider uppercase animate-bounce">
              Need a Rental? Let’s Talk Equipment Solutions!
            </span>
            <div className="w-16 h-1 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 pb-8">
            <a
              href="#contact-form"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-12 rounded-full shadow-lg transition-transform transform hover:scale-105 animate-fade-up"
            >
              Reach Out to Us!
            </a>
          </div>
        </div>
      </div>
      {/* Rental Section */}
      <div className="py-14 bg-gradient-to-tr to-slate-400 via-slate-100 from-slate-200">
        <div className="flex flex-col items-center space-y-6 px-4 sm:px-8">
          <h1 className="text-center text-3xl sm:text-5xl text-green-700 font-bold font-serif">
            Rental Machines Agro Mart
          </h1>
          <p className="text-sm sm:text-base lg:text-lg font-serif text-black text-center max-w-4xl">
            At AgroMart, we offer a wide range of high-quality agricultural
            machinery for rent, providing farmers and businesses with the
            equipment they need to succeed.
          </p>
          <input
            type="search"
            placeholder="Search your item here"
            className="w-full sm:w-[620px] p-3 m-4 border focus:border-green-700 rounded-xl"
          />
        </div>
        {/*rental Cards */}
        <div className="flex flex-wrap justify-center gap-6 p-4">
          {[Rent1, Rent2, Rent3, Rent4, Rent5, Rent6].map((image, index) => (
            <div
              key={index}
              className="w-full sm:w-[460px] border space-y-3 rounded-xl overflow-hidden shadow-md bg-white"
            >
              <img
                className="w-full h-[200px] sm:h-[250px] object-cover"
                src={image.src}
                alt={`rent${index + 1}`}
              />
              <div className="p-4 flex flex-col space-y-4">
                <h1 className="text-xl sm:text-2xl font-bold text-center text-green-700 font-serif">
                  {/* inko  dynamically maintain content */}
                  {
                    [
                      "PREET Harvester",
                      "GEO GRUND",
                      "KOMATSU",
                      "HORSCH",
                      "HORSCH Disc Machines",
                      "NEW HOLLAND",
                    ][index]
                  }
                </h1>
                <p className="text-sm sm:text-base text-black font-serif">
                  {/* Maintain dynamic content */}
                  {
                    [
                      "For over 80 years, PREET has been dedicated...",
                      "GEO GRUND ZAXIS is a well-known name...",
                      "KOMATSU, a global leader in construction...",
                      "HORSCH is a globally recognized name...",
                      "HORSCH disc machines are renowned...",
                      "New Holland is a global leader...",
                    ][index]
                  }
                </p>
                <Link href="/rentalDetails">
                  <button className="bg-[#47b881] hover:bg-[#3a9149] text-white font-bold py-2 px-6 sm:py-3 sm:px-10 rounded-full shadow-lg transition-transform transform hover:scale-105">
                    Browse Equipment
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default RentalMachines;
