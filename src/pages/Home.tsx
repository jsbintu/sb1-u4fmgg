import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      <section className="hero-section text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Professional Cleaning Services in Mississauga</h1>
          <p className="text-2xl mb-8">Experience the difference with Clean the Six</p>
          <Link to="/booking" className="bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center">
            Book Now <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Residential Cleaning</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Thorough cleaning of all rooms</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Dusting and vacuuming</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Bathroom and kitchen deep clean</li>
              </ul>
              <p className="font-semibold">Starting at $55/hour (3-hour minimum)</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Commercial Cleaning</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Office spaces and workstations</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Common areas and break rooms</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Restroom sanitation</li>
              </ul>
              <p className="font-semibold">Starting at $55/hour (2-hour minimum)</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Airbnb Cleaning</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Quick turnovers for guests</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Linen change and laundry</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Restocking essentials</li>
              </ul>
              <p className="font-semibold">Starting at $55/hour (2-hour minimum)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-12 text-center">Before & After</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img src="https://hellamaid.ca/wp-content/uploads/2023/03/before-1.jpg" alt="Before Cleaning" className="rounded-lg shadow-md" />
              <p className="text-center mt-2 font-semibold">Before</p>
            </div>
            <div>
              <img src="https://hellamaid.ca/wp-content/uploads/2023/03/after-1.jpg" alt="After Cleaning" className="rounded-lg shadow-md" />
              <p className="text-center mt-2 font-semibold">After</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-12">Why Choose Clean the Six?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Experienced Team</h3>
              <p>Our professional cleaners are trained to deliver top-quality results.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Eco-Friendly Products</h3>
              <p>We use environmentally safe cleaning products for your health and the planet.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4">100% Satisfaction</h3>
              <p>We're not happy unless you're completely satisfied with our service.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;