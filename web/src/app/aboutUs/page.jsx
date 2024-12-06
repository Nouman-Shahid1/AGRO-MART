import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import farm2 from "../../Assets/images/farm2-about.jpg";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-gradient-to-b from-green-100 via-white to-slate-100 min-h-screen  ">
        <div className="relative bg-gradient-to-t from-green-800 via-green-700 to-green-600 text-white py-24 px-8 lg:px-20">
          <div className="w-[88%] mx-auto flex flex-col mt-32 gap-12 lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-6xl font-extrabold mb-6 text-shadow-xl leading-tight font-serif animate__animated animate__fadeInUp">
                About Agro Mart
              </h1>
              <p className="text-lg lg:text-xl text-gray-100 mb-6 leading-relaxed opacity-90">
                At Agro Mart, we’re revolutionizing agriculture by blending
                cutting-edge technology with time-honored traditions, empowering
                farmers and businesses globally to achieve sustainable growth.
              </p>
              <p className="text-lg lg:text-xl text-gray-100 mb-6 leading-relaxed opacity-90">
                Our mission is to provide innovative solutions that enhance
                productivity, sustainability, and profitability, making
                agriculture smarter, more efficient, and future-ready. We
                believe in creating long-term partnerships with farmers,
                producers, and stakeholders to unlock the full potential of
                agriculture and contribute to a greener future.
              </p>
              <p className="text-lg lg:text-xl text-gray-100 mb-6 leading-relaxed opacity-90">
                With a focus on innovation, we offer smart farming tools,
                sustainable agricultural practices, and comprehensive solutions
                that are tailored to meet the evolving needs of modern-day
                farming. From precision farming technologies to supply chain
                optimization, Agro Mart is committed to driving agricultural
                progress through science and technology.
              </p>
              <p className="text-lg lg:text-xl text-gray-100 mb-6 leading-relaxed opacity-90">
                Our services extend beyond technology implementation. We provide
                training and resources to ensure that every farmer can adapt and
                thrive in the digital agricultural landscape. We believe in
                empowering farmers with the knowledge and tools they need to
                increase their yields, reduce waste, and create a more
                sustainable future for the generations to come.
              </p>
              <a
                href="#services"
                className="inline-block px-8 py-4 mt-4 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
              >
                Learn More
              </a>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <img
                src={farm2.src}
                alt="Agro Mart"
                className="w-full h-3/4 object-cover rounded-xl shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <section className="bg-[url('https://source.unsplash.com/1600x900/?nature,farmland')] bg-cover bg-center py-20">
          <div className="container mx-auto px-6 lg:px-16 bg-white bg-opacity-60 rounded-lg shadow-lg">
            <h2 className="text-5xl font-bold text-green-800 font-serif text-center mb-12 tracking-tight">
              Our Mission
            </h2>
            <p className="text-xl text-green-700 text-center max-w-3xl mx-auto leading-relaxed opacity-90">
              Our mission is to transform the future of farming by empowering
              farmers with the tools, knowledge, and resources they need to
              thrive sustainably. By fostering innovation, embracing
              eco-conscious practices, and leveraging cutting-edge technology,
              we are committed to cultivating a world where farmers not only
              achieve success but also safeguard our planet for future
              generations.
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
                <h1 className="text-xl font-serif text-green-600 font-bold">
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
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Join 🤝 the Agro Mart Revolution
            </h2>
            <p className="text-lg mb-8">
              Together, we can cultivate success, nurture growth, and harvest a
              sustainable future for agriculture.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition font-serif text-2xl"
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
