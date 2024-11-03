import React from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = React.useState({
    teamName: '',
    institution: '',
    district: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    member2Name: '',
    member2Email: '',
    agreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div id="register" className="bg-gray-50 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Register Your Team</h2>
            <p className="mt-2 text-gray-600">Registration closes on November 14, 2024</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">Team Name</label>
              <input
                type="text"
                name="teamName"
                id="teamName"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                value={formData.teamName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="institution" className="block text-sm font-medium text-gray-700">Institution Name</label>
              <input
                type="text"
                name="institution"
                id="institution"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                value={formData.institution}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
              <select
                name="district"
                id="district"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                value={formData.district}
                onChange={handleChange}
              >
                <option value="">Select District</option>
                <option value="thiruvananthapuram">Thiruvananthapuram</option>
                <option value="kollam">Kollam</option>
                <option value="pathanamthitta">Pathanamthitta</option>
                {/* Add other districts */}
              </select>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Team Leader Details</h3>
              
              <div>
                <label htmlFor="leaderName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="leaderName"
                  id="leaderName"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.leaderName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="leaderEmail" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="leaderEmail"
                  id="leaderEmail"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.leaderEmail}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="leaderPhone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="leaderPhone"
                  id="leaderPhone"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.leaderPhone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Team Member Details</h3>
              
              <div>
                <label htmlFor="member2Name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="member2Name"
                  id="member2Name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.member2Name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="member2Email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="member2Email"
                  id="member2Email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.member2Email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="agreed"
                id="agreed"
                required
                className="h-4 w-4 text-emerald-500 focus:ring-emerald-500 border-gray-300 rounded"
                checked={formData.agreed}
                onChange={handleChange}
              />
              <label htmlFor="agreed" className="ml-2 block text-sm text-gray-900">
                I agree to the terms and conditions and confirm that all provided information is accurate
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Register Team
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}