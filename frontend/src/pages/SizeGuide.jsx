import { Ruler } from 'lucide-react';

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Size Guide
        </h1>

        {/* Shoes Size Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center mb-6">
            <Ruler className="h-6 w-6 text-primary-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Shoes - Men's & Women's
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-medium">US Men</th>
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-medium">US Women</th>
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-medium">UK</th>
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-medium">EU</th>
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-medium">CM</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-400">
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">6</td>
                  <td className="py-3 px-4">7.5</td>
                  <td className="py-3 px-4">5.5</td>
                  <td className="py-3 px-4">38.5</td>
                  <td className="py-3 px-4">24</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">7</td>
                  <td className="py-3 px-4">8.5</td>
                  <td className="py-3 px-4">6</td>
                  <td className="py-3 px-4">40</td>
                  <td className="py-3 px-4">25</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">8</td>
                  <td className="py-3 px-4">9.5</td>
                  <td className="py-3 px-4">7</td>
                  <td className="py-3 px-4">41</td>
                  <td className="py-3 px-4">26</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">9</td>
                  <td className="py-3 px-4">10.5</td>
                  <td className="py-3 px-4">8</td>
                  <td className="py-3 px-4">42.5</td>
                  <td className="py-3 px-4">27</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">10</td>
                  <td className="py-3 px-4">11.5</td>
                  <td className="py-3 px-4">9</td>
                  <td className="py-3 px-4">44</td>
                  <td className="py-3 px-4">28</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">11</td>
                  <td className="py-3 px-4">12.5</td>
                  <td className="py-3 px-4">10</td>
                  <td className="py-3 px-4">45</td>
                  <td className="py-3 px-4">29</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">12</td>
                  <td className="py-3 px-4">13.5</td>
                  <td className="py-3 px-4">11</td>
                  <td className="py-3 px-4">46</td>
                  <td className="py-3 px-4">30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Clothing Size Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center mb-6">
            <Ruler className="h-6 w-6 text-primary-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Clothing - Men's
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-medium">Size</th>
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-medium">Chest (in)</th>
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-medium">Waist (in)</th>
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-medium">Hip (in)</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-400">
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">XS</td>
                  <td className="py-3 px-4">34-36</td>
                  <td className="py-3 px-4">28-30</td>
                  <td className="py-3 px-4">34-36</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">S</td>
                  <td className="py-3 px-4">36-38</td>
                  <td className="py-3 px-4">30-32</td>
                  <td className="py-3 px-4">36-38</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">M</td>
                  <td className="py-3 px-4">38-40</td>
                  <td className="py-3 px-4">32-34</td>
                  <td className="py-3 px-4">38-40</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">L</td>
                  <td className="py-3 px-4">40-42</td>
                  <td className="py-3 px-4">34-36</td>
                  <td className="py-3 px-4">40-42</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">XL</td>
                  <td className="py-3 px-4">42-44</td>
                  <td className="py-3 px-4">36-38</td>
                  <td className="py-3 px-4">42-44</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">XXL</td>
                  <td className="py-3 px-4">44-46</td>
                  <td className="py-3 px-4">38-40</td>
                  <td className="py-3 px-4">44-46</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Women's Clothing */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
          <div className="flex items-center mb-6">
            <Ruler className="h-6 w-6 text-primary-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Clothing - Women's
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-medium">Size</th>
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-medium">Bust (in)</th>
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-medium">Waist (in)</th>
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-medium">Hip (in)</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-400">
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">XS</td>
                  <td className="py-3 px-4">32-34</td>
                  <td className="py-3 px-4">24-26</td>
                  <td className="py-3 px-4">34-36</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">S</td>
                  <td className="py-3 px-4">34-36</td>
                  <td className="py-3 px-4">26-28</td>
                  <td className="py-3 px-4">36-38</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">M</td>
                  <td className="py-3 px-4">36-38</td>
                  <td className="py-3 px-4">28-30</td>
                  <td className="py-3 px-4">38-40</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">L</td>
                  <td className="py-3 px-4">38-40</td>
                  <td className="py-3 px-4">30-32</td>
                  <td className="py-3 px-4">40-42</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4">XL</td>
                  <td className="py-3 px-4">40-42</td>
                  <td className="py-3 px-4">32-34</td>
                  <td className="py-3 px-4">42-44</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">XXL</td>
                  <td className="py-3 px-4">42-44</td>
                  <td className="py-3 px-4">34-36</td>
                  <td className="py-3 px-4">44-46</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Measurement Tips */}
        <div className="mt-8 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
            How to Measure
          </h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li><strong>Chest/Bust:</strong> Measure around the fullest part of your chest, keeping the tape horizontal.</li>
            <li><strong>Waist:</strong> Measure around your natural waistline, the narrowest part of your torso.</li>
            <li><strong>Hip:</strong> Measure around the fullest part of your hips.</li>
            <li><strong>Foot:</strong> Stand on a piece of paper, mark heel and longest toe, measure the distance.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
