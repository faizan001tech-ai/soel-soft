import { Target, Users, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About SoleStyle
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your premium destination for quality shoes, clothing, and accessories since 2015
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Founded in 2015, SoleStyle began with a simple mission: to provide high-quality, stylish footwear and apparel that doesn't break the bank. What started as a small online store has grown into a trusted brand serving customers worldwide.
              </p>
              <p>
                We believe that everyone deserves to look and feel their best. That's why we carefully curate our collections, partnering with top manufacturers to bring you the latest trends and timeless classics.
              </p>
              <p>
                Our commitment to quality, customer satisfaction, and sustainable practices has made us a favorite among fashion-conscious shoppers who refuse to compromise on style or values.
              </p>
            </div>
          </div>
          <div className="bg-primary-100 dark:bg-primary-900/20 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">500K+</div>
                <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">10K+</div>
                <div className="text-gray-600 dark:text-gray-400">Products</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">4.8</div>
                <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Quality First</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We never compromise on quality. Every product meets our high standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Customer Focus</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Your satisfaction is our priority. We're here to help every step of the way.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We stay ahead of trends to bring you the latest styles and technologies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Sustainability</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We're committed to reducing our environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</h3>
            <p className="text-primary-600 text-sm mb-2">Founder & CEO</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Visionary leader with 15+ years in fashion retail
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Michael Chen</h3>
            <p className="text-primary-600 text-sm mb-2">Head of Operations</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Ensuring smooth operations and customer satisfaction
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Emma Rodriguez</h3>
            <p className="text-primary-600 text-sm mb-2">Creative Director</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Curating the latest trends and collections
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
