import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

const Press = () => {
  const pressReleases = [
    {
      date: "March 15, 2024",
      title: "SoleStyle Announces Global Expansion into 25 New Markets",
      excerpt: "Leading fashion retailer continues international growth strategy with launch in key European and Asian markets."
    },
    {
      date: "February 28, 2024",
      title: "SoleStyle Partners with Sustainable Fashion Initiative",
      excerpt: "New partnership aims to reduce carbon footprint by 50% across supply chain by 2026."
    },
    {
      date: "January 10, 2024",
      title: "SoleStyle Opens New Flagship Store in New York City",
      excerpt: "State-of-the-art retail location features immersive shopping experience and sustainable design."
    },
    {
      date: "December 5, 2023",
      title: "SoleStyle Launches Mobile App with AR Try-On Feature",
      excerpt: "New technology allows customers to virtually try on shoes before purchasing."
    },
    {
      date: "November 20, 2023",
      title: "SoleStyle Reports Record Q3 Revenue Growth",
      excerpt: "E-commerce sales up 45% year-over-year driven by customer experience improvements."
    }
  ];

  const mediaFeatures = [
    { publication: "Vogue", title: "The Future of Online Fashion Retail", date: "March 2024" },
    { publication: "Forbes", title: "How SoleStyle Built a $100M Business", date: "February 2024" },
    { publication: "TechCrunch", title: "AR Shopping Goes Mainstream", date: "January 2024" },
    { publication: "Business Insider", title: "Retail Disruptors to Watch", date: "December 2023" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Newspaper className="h-16 w-16 text-white/90 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Press & Media
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Latest news, press releases, and media coverage about SoleStyle
          </p>
        </div>
      </div>

      {/* Press Releases */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Press Releases
        </h2>
        <div className="space-y-6">
          {pressReleases.map((release, index) => (
            <article key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                {release.date}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {release.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {release.excerpt}
              </p>
              <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                Read More
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Media Features */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            In The News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaFeatures.map((feature, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                <div className="text-sm text-primary-600 font-medium mb-2">
                  {feature.publication}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {feature.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Press Kit */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Media Resources
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Download our press kit for brand assets, logos, and executive photos.
          </p>
          <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors">
            Download Press Kit
          </button>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Press Inquiries
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            For media inquiries, interview requests, or additional information, please contact our communications team.
          </p>
          <a 
            href="mailto:press@solestyle.com" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            press@solestyle.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Press;
