import { Leaf, Recycle, Heart, Globe } from 'lucide-react';

const Sustainability = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: "Carbon Neutral Shipping",
      description: "We offset 100% of carbon emissions from shipping by investing in verified environmental projects.",
      stat: "100%",
      statLabel: "Carbon Offset"
    },
    {
      icon: Recycle,
      title: "Sustainable Packaging",
      description: "All packaging is made from 100% recycled materials and is fully recyclable or biodegradable.",
      stat: "100%",
      statLabel: "Recycled Materials"
    },
    {
      icon: Heart,
      title: "Ethical Sourcing",
      description: "We partner only with suppliers who meet our strict ethical labor and environmental standards.",
      stat: "50+",
      statLabel: "Partner Audits"
    },
    {
      icon: Globe,
      title: "Zero Waste Goal",
      description: "Working towards zero waste operations through recycling, composting, and circular economy practices.",
      stat: "75%",
      statLabel: "Waste Diverted"
    }
  ];

  const goals = [
    { title: "Reduce Carbon Footprint", target: "50% by 2026", status: "On Track" },
    { title: "Use Renewable Energy", target: "100% by 2025", status: "In Progress" },
    { title: "Eliminate Single-Use Plastics", target: "100% by 2024", status: "Achieved" },
    { title: "Sustainable Product Lines", target: "50% by 2027", status: "On Track" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="h-16 w-16 text-white/90 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Commitment to Sustainability
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're dedicated to reducing our environmental impact and creating a more sustainable future for fashion retail.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Our Sustainability Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            At SoleStyle, we believe that fashion and sustainability can go hand in hand. Our mission is to provide high-quality products while minimizing our environmental footprint. From sourcing to shipping, every decision we make considers its impact on our planet.
          </p>
        </div>
      </div>

      {/* Initiatives */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Our Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <initiative.icon className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-1">{initiative.stat}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">{initiative.statLabel}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{initiative.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2024 Goals */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our 2024 Goals
          </h2>
          <div className="space-y-4">
            {goals.map((goal, index) => (
              <div key={index} className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{goal.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Target: {goal.target}</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  goal.status === "Achieved" 
                    ? "bg-green-100 dark:bg-green-900/20 text-green-600" 
                    : goal.status === "On Track"
                    ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600"
                    : "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600"
                }`}>
                  {goal.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Our Certifications
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">B Corp Certified</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Meeting highest standards of social and environmental performance</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Recycle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Cradle to Cradle</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Products designed for circular economy</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Climate Neutral</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Measuring and offsetting all carbon emissions</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Fair Trade</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Supporting fair wages and working conditions</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-white/90 mb-8">
            Every purchase supports our sustainability initiatives. Together, we can create a more sustainable future.
          </p>
          <button className="px-8 py-3 bg-white text-green-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Shop Sustainable Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
