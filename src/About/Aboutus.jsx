import React from 'react';

const Aboutus = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 space-y-8 bg-gray-50">
      {/* Welcome Section */}
      <section className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">
          Welcome to <span className="text-orange-600">RK-FOOD</span>
        </h1>
        <p className="text-gray-700 leading-relaxed text-justify">
          RK-FOOD is a Bangladeshi brand committed to delivering natural and raw food products that promote a healthy lifestyle. Our journey began with a simple yet powerful goal: to provide consumers with pure, unadulterated products sourced from the finest local ingredients. We believe in the healing power of nature and aim to bring this purity to your table through our carefully curated range of food products.
        </p>
      </section>

      {/* Mission Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          At RK Trading, our mission is to ignite the senses and elevate culinary experiences through the enchanting world of spices. We are dedicated to sourcing the finest ingredients from around the globe, ensuring unparalleled quality and freshness in every blend. With a passion for flavor and a commitment to authenticity, we strive to inspire creativity in the kitchen and enrich the lives of our customers.
        </p>
      </section>

      {/* Products Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Our Products
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          All our products are either produced under our direct supervision or sourced from trusted suppliers who share our commitment to quality. From cold-pressed mustard oil, pure ghee, and coconut oil to premium peanuts, honey, and black seed oil, our offerings are 100% natural and raw, prepared using traditional methods to ensure authenticity and nutrient richness.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          What We Stand For
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <span className="font-medium">Quality:</span> Strict quality control ensures that every product meets the highest standards of purity.
          </li>
          <li>
            <span className="font-medium">Transparency:</span> We are committed to transparency in every step, from sourcing ingredients to packaging.
          </li>
          <li>
            <span className="font-medium">Sustainability:</span> Supporting local farmers and promoting sustainable agricultural practices.
          </li>
          <li>
            <span className="font-medium">Health and Wellness:</span> Our products are designed to nourish the body and promote overall well-being.
          </li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Why Choose RK-FOOD?
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          When you choose RK-FOOD, you’re not just purchasing a product—you’re committing to health and the environment. Our range of oils, spices, nuts, and other natural products supports a balanced lifestyle. Whether you’re cooking a meal, snacking, or seeking a natural health boost, our products provide the nutrients and flavors you need.
        </p>
      </section>

      {/* Vision Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Our Vision
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          Our vision at RK Trading is to become the go-to destination for spice lovers worldwide, known for our unwavering commitment to quality, innovation, and sustainability. We aim to redefine the spice industry by pushing the boundaries of flavor exploration and setting new standards for excellence. We envision a future where every kitchen is infused with the aroma of our premium spices, inspiring creativity and delighting taste buds around the globe.
        </p>
      </section>
    </div>
  );
};

export default Aboutus;
