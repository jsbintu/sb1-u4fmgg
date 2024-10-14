import React from 'react';
import { Check } from 'lucide-react';

const ResidentialChecklist = [
  { title: "Kitchen", items: ["Clean and sanitize countertops", "Clean and sanitize sink", "Clean stovetop and oven exterior", "Clean microwave inside and out", "Clean and shine appliances", "Wipe down cabinet fronts", "Sweep and mop floors"] },
  { title: "Bathroom", items: ["Clean and sanitize toilet", "Clean and sanitize shower/bathtub", "Clean and shine mirrors", "Wipe down countertops and sink", "Sweep and mop floors"] },
  { title: "Bedrooms", items: ["Dust all surfaces", "Vacuum carpets and rugs", "Make beds (linens changed upon request)", "Empty trash bins"] },
  { title: "Living Areas", items: ["Dust all surfaces", "Vacuum carpets and rugs", "Sweep and mop hard floors", "Tidy and organize"] },
  { title: "General", items: ["Wipe down light switches and doorknobs", "Empty all trash bins", "Dust window sills and ledges", "Vacuum or sweep stairs"] },
];

const CommercialChecklist = [
  { title: "Office Areas", items: ["Dust and wipe down desks and surfaces", "Vacuum carpets and rugs", "Empty trash bins and replace liners", "Clean and sanitize phones and keyboards"] },
  { title: "Common Areas", items: ["Vacuum or mop floors", "Dust and wipe down furniture", "Clean glass surfaces and mirrors", "Sanitize high-touch areas"] },
  { title: "Restrooms", items: ["Clean and sanitize toilets", "Clean and sanitize sinks and countertops", "Restock paper products and soap", "Sweep and mop floors"] },
  { title: "Kitchen/Break Room", items: ["Clean and sanitize countertops", "Clean microwave inside and out", "Wipe down appliances", "Clean sink and faucet", "Sweep and mop floors"] },
  { title: "Entry/Reception", items: ["Vacuum carpets or mop floors", "Dust reception desk and furniture", "Clean glass doors", "Wipe down door handles"] },
];

const AirbnbChecklist = [
  { title: "Living Areas", items: ["Dust and wipe all surfaces", "Vacuum carpets and rugs", "Sweep and mop hard floors", "Tidy and organize", "Clean windows and mirrors"] },
  { title: "Kitchen", items: ["Clean and sanitize countertops and sink", "Clean appliances inside and out", "Wipe down cabinet fronts", "Sweep and mop floors", "Empty trash and replace liners"] },
  { title: "Bedrooms", items: ["Change all linens and make beds", "Dust all surfaces", "Vacuum carpets and floors", "Empty trash bins"] },
  { title: "Bathrooms", items: ["Clean and sanitize toilet, shower/tub, and sink", "Replace towels and toiletries", "Clean mirrors", "Sweep and mop floors"] },
  { title: "General", items: ["Restock essentials (toilet paper, soap, etc.)", "Check for damages or maintenance issues", "Ensure all amenities are in place", "Set out welcome items for guests"] },
];

const Pricing: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Pricing & Services</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Residential Cleaning</h2>
            <p className="text-4xl font-bold mb-4">$55<span className="text-lg font-normal">/hour</span></p>
            <p className="mb-6 text-gray-600">Minimum 3 hours per session</p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
              {ResidentialChecklist.map((section, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold mb-2">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">Perfect for apartments, houses, and condos</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Commercial Cleaning</h2>
            <p className="text-4xl font-bold mb-4">$55<span className="text-lg font-normal">/hour</span></p>
            <p className="mb-6 text-gray-600">Minimum 2 hours per session</p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
              {CommercialChecklist.map((section, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold mb-2">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">Ideal for offices, retail spaces, and more</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Airbnb Cleaning</h2>
            <p className="text-4xl font-bold mb-4">$55<span className="text-lg font-normal">/hour</span></p>
            <p className="mb-6 text-gray-600">Minimum 2 hours per session</p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
              {AirbnbChecklist.map((section, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold mb-2">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">Perfect for short-term rentals and vacation homes</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">All prices include cleaning supplies and equipment.</p>
          <p className="text-lg">Contact us for custom quotes on large spaces or special cleaning requirements.</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;