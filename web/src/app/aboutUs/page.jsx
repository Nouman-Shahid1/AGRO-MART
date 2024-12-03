import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import farm2 from "../../Assets/images/farm2-about.jpg";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-gradient-to-b from-green-100 via-white to-slate-100 min-h-screen  ">
        <div className=""></div>
        {/* Hero Section */}
        <div className="relative bg-gradient-to-tr from-green-300 via-green-100 to-green-400 text-green-600 py-16 px-6 lg:px-16">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-center font-serif lg:text-left">
              About Agro Mart
            </h1>
            <p className="text-lg lg:text-xl  text-center lg:text-left">
              At Agro Mart, we’re revolutionizing agriculture by blending modern
              innovation with time-tested traditions to empower farmers and
              businesses across the globe.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <section className="container mx-auto py-16 px-6 lg:px-16">
          <h2 className="text-5xl font-serif  font-bold text-green-700 text-center mb-14">
            Who We Are
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center leading-8">
              <p className="text-green-600 font-serif text-lg">
                Agro Mart is a forward-thinking agricultural platform designed
                to support farmers, agribusinesses, and entrepreneurs in their
                journey toward sustainable growth. We believe agriculture is not
                just an industry—it’s the backbone of our world and the key to a
                brighter future.
              </p>
            </div>
            <div>
              <img
                src={farm2.src}
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-gradient-to-l to-green-200 via-white from-green-100 py-16">
          <div className="container mx-auto px-6 lg:px-16">
            <h2 className="text-3xl font-bold text-green-700 font-serif text-center mb-8">
              Our Mission
            </h2>
            <p className="text-green-600 text-lg text-center max-w-4xl font-serif mx-auto">
              Our mission is to create a world where farmers have access to the
              tools, knowledge, and resources they need to achieve sustainable
              success. By embracing eco-friendly practices and innovative
              technology, we aim to empower farmers while protecting our planet.
            </p>
          </div>
        </section>
        <div className="w-full flex justify-center items-center text-center mt-24 text-4xl font-bold font-serif ">
          <h1 className="w-1/2 text-green-700">
            In order to finance members. Some ecological element
          </h1>
        </div>
        {/* small cards */}
        <div className="w-full flex justify-center pb-16  mt-14 bg-gradient-to-tr to-slate-200 via-white from-gray-200">
          <div className="w-[80%]  flex flex-wrap gap-6 justify-center items-center mt-14 space-y-5">
            <div className="flex justify-center items-center ">
              <div>
                {" "}
                <img
                  className="w-[70x] h-[70px]"
                  src="https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-home-icon1.png"
                  alt="Butter logo"
                />
              </div>
              <div className="w-[300px] p-6 space-y-4 flex flex-col justify-center items-center">
                <h1 className="text-xl font-serif font-bold text-green-600">
                  Lorem ipsum
                </h1>
                <p className="text-black text-center">
                  Lorem ipsum dolor sit amet, consing eli do eiod.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <div>
                {" "}
                <img
                  className="w-[70x] h-[70px]"
                  src="https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-home-icon2.png"
                  alt="Butter logo"
                />
              </div>
              <div className="w-[300px] p-6 text-center space-y-4 flex flex-col justify-center items-center">
                <h1 className="text-xl font-serif text-green-600 font-bold">
                  Velit esse
                </h1>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consing eli do eiod.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <div>
                {" "}
                <img
                  className="w-[70x] h-[70px]"
                  src="https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-home-icon3.png"
                  alt="Butter logo"
                />
              </div>
              <div className=" w-[300px] p-6 text-center space-y-4 flex flex-col justify-center items-center">
                <h1 className="text-xl font-serif text-green-600 font-bold">
                  Voluptate
                </h1>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consing eli do eiod.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                {" "}
                <img
                  className="w-[70x] h-[70px]"
                  src="https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-home-icon4.png"
                  alt="Butter logo"
                />
              </div>
              <div className="w-[300px] p-6 text-center space-y-4 flex flex-col justify-center items-center">
                <h1 className="text-xl font-serif text-green-600 font-bold">
                  Aliquam erat
                </h1>
                <p className="text-black text-center">
                  Lorem ipsum dolor sit amet, consing eli do eiod.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <div>
                {" "}
                <img
                  className="w-[70x] h-[70px]"
                  src="https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-home-icon5.png"
                  alt="Butter logo"
                />
              </div>
              <div className="w-[300px] p-6 text-center space-y-4 flex flex-col justify-center items-center">
                <h1 className="text-xl font-serif text-gren-600 font-bold">
                  Hendrerit nulla
                </h1>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consing eli do eiod.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <div>
                {" "}
                <img
                  className="w-[70x] h-[70px]"
                  src="https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-home-icon6.png"
                  alt="Butter logo"
                />
              </div>
              <div className="w-[300px] p-6 text-center space-y-4 flex flex-col justify-center items-center">
                <h1 className="text-xl font-serif text-green-600 font-bold">
                  Curabitur
                </h1>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consing eli do eiod.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <section className="container mx-auto py-16 px-6 lg:px-16">
          <h2 className="text-4xl font-bold text-green-700 font-serif text-center mb-8">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg- p-8 rounded-2xl shadow-lg bg-gradient-to-bl from-green-100 via-white to-green-200 hover:bg-slate-200 ">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                🌱
              </div>
              <h3 className="text-xl font-semibold text-green-700 font-serif">
                Premium Products
              </h3>
              <p className="text-gray-600 mt-2">
                Access top-quality seeds, tools, and supplies to optimize your
                agricultural efforts.
              </p>
            </div>
            <div className="text-center bg- p-8 rounded-2xl shadow-lg bg-gradient-to-bl from-green-100 via-white to-green-200">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                📚
              </div>
              <h3 className="text-xl font-semibold text-green-700 font-serif">
                Knowledge Hub
              </h3>
              <p className="text-gray-600 mt-2">
                Learn from our curated resources, expert guides, and actionable
                insights.
              </p>
            </div>
            <div className="text-center bg- p-8 rounded-2xl shadow-2xl bg-gradient-to-bl from-green-100 via-white to-green-200">
              <div className="bg-green-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                🤝
              </div>
              <h3 className="text-xl font-semibold text-green-700 font-serif">
                Community Support
              </h3>
              <p className="text-gray-600 mt-2">
                Connect with other farmers and businesses to share knowledge and
                grow together.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-tr from-green-500 via-slate-200 to-green-400 text-green-700  py-16">
          <div className="container mx-auto text-center px-6 lg:px-16">
            <h2 className="text-3xl font-bold mb-4">
              Join 🤝 the Agro Mart Revolution
            </h2>
            <p className="text-lg mb-8">
              Together, we can cultivate success, nurture growth, and harvest a
              sustainable future for agriculture.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
