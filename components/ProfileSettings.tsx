
import React, { useState } from 'react';
import type { User } from '../types';

interface ProfileSettingsProps {
  user: User;
}

const InputField: React.FC<{label: string, id: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}> = ({ label, id, value, onChange }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-slate-400 mb-2">{label}</label>
        <input
            type="text"
            id={id}
            value={value}
            onChange={onChange}
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
        />
    </div>
);


export const ProfileSettings: React.FC<ProfileSettingsProps> = ({ user }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    street: user.address.street,
    city: user.address.city,
    state: user.address.state,
    zip: user.address.zip
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
      <p className="text-slate-400 mb-8">Manage your personal information and address.</p>
      
      <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Full Name" id="name" value={formData.name} onChange={handleChange} />
            <InputField label="Email Address" id="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
            <h3 className="text-lg font-semibold text-white mb-4 mt-4 border-t border-slate-700 pt-6">Shipping Address</h3>
            <div className="space-y-6">
                 <InputField label="Street Address" id="street" value={formData.street} onChange={handleChange} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InputField label="City" id="city" value={formData.city} onChange={handleChange} />
                    <InputField label="State / Province" id="state" value={formData.state} onChange={handleChange} />
                    <InputField label="Zip / Postal Code" id="zip" value={formData.zip} onChange={handleChange} />
                </div>
            </div>
        </div>
      </div>
       <div className="mt-8 flex justify-end">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 shadow-lg">
                Save Changes
            </button>
        </div>
    </div>
  );
};
