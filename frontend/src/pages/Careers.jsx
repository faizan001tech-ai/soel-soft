import { Briefcase, Heart, Coffee, GraduationCap } from 'lucide-react';

const Careers = () => {
  const benefits = [
    { icon: Heart, title: "Health & Wellness", description: "Comprehensive health, dental, and vision insurance for you and your family" },
    { icon: Coffee, title: "Work-Life Balance", description: "Flexible working hours, remote work options, and generous PTO" },
    { icon: GraduationCap, title: "Growth & Development", description: "Learning stipend, mentorship programs, and career advancement opportunities" },
    { icon: Briefcase, title: "Employee Discounts", description: "40% discount on all products and early access to new collections" },
  ];

  const openings = [
    { title: "Senior Frontend Developer", department: "Engineering", location: "Remote", type: "Full-time" },
    { title: "Marketing Manager", department: "Marketing", location: "New York, NY", type: "Full-time" },
    { title: "Customer Support Specialist", department: "Support", location: "Remote", type: "Full-time" },
    { title: "Product Designer", department: "Design", location: "Los Angeles, CA", type: "Full-time" },
    { title: "Warehouse Associate", department: "Operations", location: "Austin, TX", type: "Full-time" },
    { title: "Social Media Coordinator", department: "Marketing", location: "Remote", type: "Part-time" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Be part of a company that's shaping the future of fashion retail
          </p>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Why Work at SoleStyle?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Culture */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Culture
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  At SoleStyle, we believe in creating an inclusive environment where everyone can thrive. Our team is passionate about fashion, technology, and delivering exceptional customer experiences.
                </p>
                <p>
                  We embrace diversity and value different perspectives. Whether you're in engineering, marketing, or operations, your voice matters and your contributions make a real impact.
                </p>
                <p>
                  Collaboration is at the heart of everything we do. We celebrate wins together, learn from challenges, and continuously push ourselves to innovate and improve.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary-600 mb-1">150+</div>
                <div className="text-gray-600 dark:text-gray-400">Team Members</div>
              </div>
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary-600 mb-1">8</div>
                <div className="text-gray-600 dark:text-gray-400">Countries</div>
              </div>
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary-600 mb-1">4.5</div>
                <div className="text-gray-600 dark:text-gray-400">Glassdoor Rating</div>
              </div>
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary-600 mb-1">94%</div>
                <div className="text-gray-600 dark:text-gray-400">Employee Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Open Positions
        </h2>
        <div className="space-y-4">
          {openings.map((job, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-md transition-shadow">
              <div className="mb-4 md:mb-0">
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{job.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{job.department} • {job.location}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 rounded-full text-sm font-medium">
                  {job.type}
                </span>
                <button className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't see the right fit?
          </h2>
          <p className="text-white/90 mb-8">
            We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="px-8 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Send General Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
