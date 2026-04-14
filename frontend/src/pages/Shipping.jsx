import { Truck, Package, Clock, Globe } from 'lucide-react';

const Shipping = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Shipping Information
        </h1>

        {/* Shipping Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
            <Truck className="h-10 w-10 text-primary-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Standard Shipping</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">5-7 business days</p>
            <p className="text-primary-600 font-semibold mt-2">$5.99</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
            <Package className="h-10 w-10 text-primary-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Express Shipping</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">2-3 business days</p>
            <p className="text-primary-600 font-semibold mt-2">$12.99</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
            <Globe className="h-10 w-10 text-primary-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">International</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">10-15 business days</p>
            <p className="text-primary-600 font-semibold mt-2">$19.99</p>
          </div>
        </div>

        {/* Free Shipping Banner */}
        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 mb-12 text-center">
          <Clock className="h-8 w-8 text-primary-600 mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Free Shipping on Orders Over $75!
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Automatically applied at checkout. No code needed.
          </p>
        </div>

        {/* Shipping Info */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Shipping Policy
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              <strong className="text-gray-900 dark:text-white">Order Processing:</strong> All orders are processed within 1-2 business days. Orders placed on weekends or holidays will be processed the next business day.
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Tracking:</strong> Once your order ships, you'll receive an email with tracking information. You can also track your order in your account dashboard.
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Delivery:</strong> We are not responsible for delays caused by customs, weather conditions, or carrier issues. Please ensure your shipping address is accurate.
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">International Orders:</strong> Customers are responsible for any customs duties, taxes, or fees imposed by their country.
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">PO Boxes:</strong> We cannot ship to PO Boxes for Express or International orders. A physical address is required.
            </p>
          </div>
        </div>

        {/* Delivery Times by Region */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Estimated Delivery Times
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-medium">Region</th>
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-medium">Standard</th>
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-medium">Express</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-400">
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">United States</td>
                  <td className="py-3 px-4">5-7 days</td>
                  <td className="py-3 px-4">2-3 days</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">Canada</td>
                  <td className="py-3 px-4">7-10 days</td>
                  <td className="py-3 px-4">3-5 days</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">Europe</td>
                  <td className="py-3 px-4">7-12 days</td>
                  <td className="py-3 px-4">4-6 days</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">Australia & NZ</td>
                  <td className="py-3 px-4">10-15 days</td>
                  <td className="py-3 px-4">5-8 days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Asia</td>
                  <td className="py-3 px-4">10-15 days</td>
                  <td className="py-3 px-4">5-8 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
