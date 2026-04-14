import { RefreshCcw, CheckCircle, Package, Truck } from 'lucide-react';

const Returns = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Returns & Exchanges
        </h1>

        {/* Return Policy Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
            <RefreshCcw className="h-10 w-10 text-primary-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">30-Day Returns</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Return most items within 30 days of delivery</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
            <Truck className="h-10 w-10 text-primary-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Free Returns</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">We cover return shipping for defective items</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
            <CheckCircle className="h-10 w-10 text-primary-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Easy Process</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Simple online return process in minutes</p>
          </div>
        </div>

        {/* How to Return */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            How to Return an Item
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-600 font-semibold">1</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Start Your Return</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Log into your account and go to your order history. Select the order and items you want to return.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-600 font-semibold">2</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Select Reason</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose the reason for your return and preferred refund method (original payment or store credit).
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-600 font-semibold">3</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Print Label</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Print your prepaid return label. For defective items, return shipping is free. For other returns, a $5 fee applies.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-600 font-semibold">4</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Ship & Refund</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Pack items securely, attach the label, and drop off at any authorized location. Refunds process within 5-7 business days after we receive your return.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Return Policy Details */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Return Policy Details
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              <strong className="text-gray-900 dark:text-white">Eligibility:</strong> Items must be unused, unwashed, and in their original packaging with all tags attached. Shoes must be tried on indoors only.
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Non-Returnable Items:</strong> Final sale items, swimwear, underwear, personalized products, and gift cards cannot be returned.
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Refunds:</strong> Refunds are issued to the original payment method. Store credit is available immediately; credit card refunds may take 5-10 business days.
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Exchanges:</strong> For size exchanges, we recommend placing a new order for the correct size and returning the original item for a refund.
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Damaged/Defective:</strong> If you receive a damaged or defective item, contact us within 48 hours. We'll provide a prepaid return label and full refund.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Need help with a return?{' '}
            <a href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Returns;
