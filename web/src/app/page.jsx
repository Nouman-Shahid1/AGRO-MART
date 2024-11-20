import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import Benifits from "@/components/Benifits";
import { GiBarbedSpear } from "react-icons/gi";

export default function Page() {
  return (
    <>
      <div className="h-screen relative">
        <div className="absolute inset-0 bg-[url('https://images6.alphacoders.com/134/thumb-1920-1347850.png')] bg-cover bg-center bg-top"></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-30">
          <Navbar />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 ">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Welcome to AgroMart</h1>
          <p className=" text-md md:text-lg max-w-3xl">
            Explore the best agricultural products, tools, and services. Empowering farmers with quality and sustainability.
          </p>
        </div>
      </div>

      {/* Featured Products  */}
      <div className="w-[80%] mx-auto py-12">
        <div className="w-full text-center">
          <p className="font-bold text-3xl text-[#1fb025]">Featured Products</p>
          <p className="-mt-4 mb-6">
                    <GiBarbedSpear
                        size={40}
                        className="w-full py-2 h-[60px] -mt-2"
                        style={{ transform: 'rotate(310deg)', color: '#1fb025' }}
                    />
                    </p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          <ProductCard src="https://img.freepik.com/free-photo/close-up-box-with-vegetables-hands-mature-man_329181-4600.jpg?t=st=1732103540~exp=1732107140~hmac=fd69a316e63c80f87c6c6c1aced72256b8e40a3d454e0ac94b740b6ce4f9d28d&w=1060" />
          <ProductCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJPsEXB2wfWSZD5DAD98sHzPct0q1JAAkZQ&s" />
          <ProductCard src="https://in.thedollarbusiness.com/assets/articles/2015/12/shutterstock_231916573_650.jpg" />
          <ProductCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_nIaZR3vC-_Yz5NKSlYYsE26XSVCaWAlww&s" />
        </div>
      </div>

      {/* Featured Categories */}
      <div className="w-[80%] mx-auto pb-12">
        <div className="w-full text-center">
        <p className="font-bold text-3xl text-[#1fb025] pt-6">Featured Categories</p>
        <p className="-mt-4 mb-6">
                    <GiBarbedSpear
                        size={40}
                        className="w-full py-2 h-[60px] -mt-2"
                        style={{ transform: 'rotate(310deg)', color: '#1fb025' }}
                    />
                    </p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          <CategoryCard
            name="Fertilizer"
            src="https://image.made-in-china.com/202f0j00zlprGMCoYkqP/Herbicide-Bensulfuron-Methyl-10-Bentazole-45-Wp-Hot-Sales-Keep-Grass-Products.webp"
            description="Enhance crop growth and maximize yield with premium fertilizers."
          />
          <CategoryCard
            name="Pesticide"
            src="https://image.made-in-china.com/2f0j00RfLqdFvkCgpV/Best-Selling-Agriculture-Pesticides-Emamectin-Benzoate-Abamectin-Insektisida-Abamectin-95-Tc-1-8c.webp"
            description="Protect crops from pests with our effective pesticides."
          />
          <CategoryCard
            name="Farm Machinery"
            src="https://image.made-in-china.com/2f0j00gvHqFsQlEhbe/Agricultural-Machine-and-Farm-Equipment-Rice-Wheat-Combine-Harvester.webp"
            description="Modern farm machinery to make your work easier and more efficient."
          />
          <CategoryCard
            name="Seeds"
            src="https://i.brecorder.com/large/2024/03/6604aab2bf8c4.jpg"
            description="High-quality seeds for sustainable and productive farming."
          />
        </div>
      </div>

      {/* Benefits  */}
      <div>
        <Benifits />
      </div>

      {/* Testimonials */}
      <div >
        <Testimonial />
      </div>

      {/* Newsletter  */}
      <div className="w-full">
        <Newsletter />
      </div>

      {/* Footer Section */}
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}
