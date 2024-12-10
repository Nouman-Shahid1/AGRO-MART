"use client";
import React, { useState, useMemo } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import { FaPlus, FaMinus, FaStar } from "react-icons/fa";
import Newsletter from "@/Components/NewsLetter/Newsletter";

const ProductDetailsPage = () => {
  const [mainProduct, setMainProduct] = useState({
    id: 1,
    title: "Agricultural Farm Fertilizers",
    description:
      "Enhance your farm's productivity with premium-grade agricultural fertilizers designed for modern farming.",
    price: "$99.99",
    originalPrice: "$129.99",
    availability: "In Stock",
    image: "https://www.foodicine.co.in/img/products/humic-acid-fertilizer.jpg",
  });

  const relatedProducts = [
    {
      id: 1,
      title: "Agricultural Farm Fertilizers",
      image:
        "https://www.foodicine.co.in/img/products/humic-acid-fertilizer.jpg",
      price: "$99.99",
    },
    {
      id: 2,
      title: "Spray",
      image:
        "https://www.brightway.pk/cdn/shop/products/agricultural-knapsack-sprayer-500x500.jpg?v=1653640418",
      price: "$89.99",
    },
  ];
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      review: "Excellent product! Works as expected.",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      review: "Good quality but could be cheaper.",
    },
  ]);
  const [selectedRating, setSelectedRating] = useState(0); // Rating state
  const [newReview, setNewReview] = useState(""); // Review text state

  // Calculate the average rating
  const averageRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1);
  }, [reviews]);

  const handleRatingClick = (rating) => {
    console.log(`Clicked rating: ${rating}`); // Debugging
    setSelectedRating(rating);
  };

  const handleAddReview = () => {
    if (!newReview.trim() || selectedRating === 0) {
      alert("Please provide a valid review and rating.");
      return;
    }

    const newReviewObj = {
      id: reviews.length + 1,
      name: "Anonymous", // Placeholder name
      rating: selectedRating,
      review: newReview,
    };

    console.log("Adding review:", newReviewObj); // Debugging
    setReviews([...reviews, newReviewObj]); // Update state
    setNewReview(""); // Reset review input
    setSelectedRating(0); // Reset rating
  };

  return (
    <>
      <Navbar bground={true} />
      <div
        className="relative overflow-hidden py-20"
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(0, 128, 0, 0.6), rgba(255, 255, 255, 0.8)),
      url('https://static.vecteezy.com/system/resources/previews/001/431/110/non_2x/abstract-green-grass-in-bokeh-background-free-vector.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "brightness(1) contrast(1.1)",
        }}
      >
        <div className="absolute top-[-50px] right-[-50px] w-72 h-72 bg-green-200 rounded-full blur-2xl opacity-30"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-96 h-96 bg-lime-300 rounded-full blur-3xl opacity-40"></div>
        <section className="container mx-auto px-6">
          <div className="container mx-auto mt-28 p-10 bg-gradient-to-r from-green-100 to-white shadow-2xl rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[600px]">
              <div className="flex justify-center items-center">
                <div className="group">
                  <img
                    src={mainProduct.image}
                    alt={mainProduct.title}
                    className="w-[90%] max-h-[500px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-10 p-6">
                <div>
                  <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
                    {mainProduct.title}
                  </h1>
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < Math.round(averageRating) ? "" : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg">
                      {averageRating} ({reviews.length} reviews)
                    </p>
                  </div>
                </div>

                <p className="text-gray-600  text-md tmd:ext-lg leading-relaxed tracking-wide">
                  {mainProduct.description}
                </p>

                <div className="flex items-center space-x-6">
                  <span className="text-xl md:text-5xl font-extrabold text-green-600">
                    {mainProduct.price}
                  </span>
                  <span className="text-lg md:text-2xl text-gray-400 line-through">
                    {mainProduct.originalPrice}
                  </span>
                </div>

                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-4">
                    <button
                      className="p-2 md:p-4 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-shadow shadow-md"
                      onClick={() =>
                        setMainProduct((prev) => ({
                          ...prev,
                          quantity: Math.max((prev.quantity || 1) - 1, 1),
                        }))
                      }
                    >
                      <FaMinus />
                    </button>
                    <span className="text-ld md:text-2xl font-bold">
                      {mainProduct.quantity || 1}
                    </span>
                    <button
                      className="p-2 md:p-4 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-shadow shadow-md"
                      onClick={() =>
                        setMainProduct((prev) => ({
                          ...prev,
                          quantity: (prev.quantity || 1) + 1,
                        }))
                      }
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>

                <p
                  className={`${
                    mainProduct.availability === "Out of Stock"
                      ? "text-red-600"
                      : "text-green-600"
                  } text-xl font-semibold`}
                >
                  {mainProduct.availability}
                </p>

                <button className="w-full py-2 md:py-4 bg-green-600 text-white text-lg md:text-xl font-semibold rounded-lg hover:bg-green-700 shadow-xl hover:shadow-green-500/50 transition-transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <section className="mt-10 py-12 px-6 bg-gradient-to-br from-green-100 to-green-50 rounded-lg shadow-2xl">
            <h2 className="text-2xl md:text-5xl font-extrabold text-green-700 mb-10 text-center tracking-wide">
              What Our Customers Say
            </h2>
            <div className="space-y-10">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex items-start p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="w-10 md:w-16 h-10 md:h-16 flex items-center justify-center rounded-full bg-green-700 text-white font-bold text-lg text-lg md:text-2xl mr-6 shadow-md">
                    {review.profileImage ? (
                      <img
                        src={review.profileImage}
                        alt={review.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      review.name.charAt(0)
                    )}
                  </div>

                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <p className="font-bold text-gray-800 text-sm md:text-lg">
                        {review.name}
                      </p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`${
                              i < review.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            } text-md md:text-xl`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm md:text-md leading-relaxed">
                      {review.review}
                    </p>
                    <p className="text-sm text-gray-500 mt-3 italic">
                      Verified Purchase
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 bg-white py-10 px-8 rounded-2xl shadow-2xl border border-gray-200">
            <h3 className="text-xl md:text-3xl font-extrabold text-green-700 mb-6 text-center">
              Share Your Experience
            </h3>

            <div className="flex items-center justify-center mb-6">
              <span className="font-medium text:md md:text-lg text-gray-700 mr-3">
                Rate Us:
              </span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer text-xl md:text-3xl transition-transform transform ${
                      star <= selectedRating
                        ? "text-yellow-400 scale-110"
                        : "text-gray-300 hover:text-yellow-400 hover:scale-110"
                    }`}
                    onClick={() => handleRatingClick(star)}
                  />
                ))}
              </div>
            </div>

            <textarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Tell us about your experience..."
              rows="4"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent resize-none"
            ></textarea>

            <button
              onClick={handleAddReview}
              className="mt-6 w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-2 md:py-3 rounded-lg font-bold text:md md:text-lg hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Submit Review
            </button>
          </section>

          <section className="mt-10">
            <h2 className="text-4xl font-bold text-center mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <h3 className="mt-4 text-lg font-bold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-green-600 font-semibold">
                    {product.price}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
