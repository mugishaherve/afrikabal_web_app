import React from 'react'
import { FaLightbulb, FaPhone} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function FeatureCard() {
    const features = [
        {
            icon: <FaLightbulb />, 
            title: "Buy meter units from any electricity distribution company."
        },
        {
            icon: <MdEmail />, 
            title: "Get your meter token by email."
        },
        {
            icon: <FaPhone />, 
            title: "Top up your meter units any time."
        },
      
    ];
  return (
   
        <section className="bg-white py-10 px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 text-center transition-transform hover:scale-105"
                    >
                        {/* Icon */}
                        <div className="icon-wrapper bg-green-100 text-lime-600 text-md p-1  w-fit h-fit rounded-full">
                            {feature.icon}
                        </div>

                        {/* Title */}
                        <p className="text-gray-800 font-medium">{feature.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
  
}

export default FeatureCard
