import React from 'react';
import { Heart, Utensils, Package, HandHeart, Phone, Mail, Facebook, Twitter, Instagram, Menu, X } from 'lucide-react';
import { useState } from 'react';

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="ml-2 text-xl font-bold text-gray-800">GiveHope</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-rose-500">Home</a>
            <a href="#donate" className="text-gray-600 hover:text-rose-500">Donate</a>
            <a href="#volunteer" className="text-gray-600 hover:text-rose-500">Volunteer</a>
            <a href="#contact" className="text-gray-600 hover:text-rose-500">Contact</a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-rose-500">Home</a>
              <a href="#donate" className="block px-3 py-2 text-gray-600 hover:text-rose-500">Donate</a>
              <a href="#volunteer" className="block px-3 py-2 text-gray-600 hover:text-rose-500">Volunteer</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-rose-500">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => (
  <section id="home" className="pt-20 bg-gradient-to-b from-rose-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Make a Difference Today
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join us in our mission to help those in need. Every donation, whether big or small,
          creates a positive impact in someone's life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#donate" className="inline-block bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition">
            Donate Now
          </a>
          <a href="#volunteer" className="inline-block bg-white text-rose-500 border-2 border-rose-500 px-8 py-3 rounded-full hover:bg-rose-50 transition">
            Become a Volunteer
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Donation Categories
const DonationCategories = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Ways to Help</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
          <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-rose-500" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Money</h3>
          <p className="text-gray-600 mb-6">Support our cause with monetary donations that help fund our various programs and initiatives.</p>
          <a href="#donate" className="text-rose-500 font-medium hover:text-rose-600">Donate Money →</a>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
          <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Utensils className="h-8 w-8 text-rose-500" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Food</h3>
          <p className="text-gray-600 mb-6">Help provide nutritious meals to families and individuals facing food insecurity.</p>
          <a href="#donate" className="text-rose-500 font-medium hover:text-rose-600">Donate Food →</a>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
          <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Package className="h-8 w-8 text-rose-500" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Essentials</h3>
          <p className="text-gray-600 mb-6">Contribute essential items like clothing, hygiene products, and household supplies.</p>
          <a href="#donate" className="text-rose-500 font-medium hover:text-rose-600">Donate Items →</a>
        </div>
      </div>
    </div>
  </section>
);

// Donation Form
const DonationForm = () => {
  const [donationType, setDonationType] = useState('money');

  return (
    <section id="donate" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Make a Donation</h2>
        <form className="bg-white p-8 rounded-xl shadow-lg">
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Donation Type</label>
            <div className="grid grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => setDonationType('money')}
                className={`p-4 rounded-lg border ${
                  donationType === 'money' ? 'border-rose-500 bg-rose-50' : 'border-gray-200'
                } hover:border-rose-500 transition`}
              >
                <Heart className="h-6 w-6 mx-auto mb-2 text-rose-500" />
                <span className="block text-sm">Money</span>
              </button>
              <button
                type="button"
                onClick={() => setDonationType('food')}
                className={`p-4 rounded-lg border ${
                  donationType === 'food' ? 'border-rose-500 bg-rose-50' : 'border-gray-200'
                } hover:border-rose-500 transition`}
              >
                <Utensils className="h-6 w-6 mx-auto mb-2 text-rose-500" />
                <span className="block text-sm">Food</span>
              </button>
              <button
                type="button"
                onClick={() => setDonationType('essentials')}
                className={`p-4 rounded-lg border ${
                  donationType === 'essentials' ? 'border-rose-500 bg-rose-50' : 'border-gray-200'
                } hover:border-rose-500 transition`}
              >
                <Package className="h-6 w-6 mx-auto mb-2 text-rose-500" />
                <span className="block text-sm">Essentials</span>
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent" />
            </div>
            {donationType === 'money' && (
              <div>
                <label className="block text-gray-700 mb-2">Amount (₹)</label>
                <input type="number" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent" />
              </div>
            )}
            {(donationType === 'food' || donationType === 'essentials') && (
              <div>
                <label className="block text-gray-700 mb-2">Items Description</label>
                <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent" rows={4}></textarea>
              </div>
            )}
            <button type="submit" className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition">
              Complete Donation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

// Volunteer Form
const VolunteerForm = () => (
  <section id="volunteer" className="py-20 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Become a Volunteer</h2>
      <form className="bg-gray-50 p-8 rounded-xl shadow-lg">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone</label>
            <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Areas of Interest</label>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-rose-500 focus:ring-rose-500" />
                <span>Food Distribution</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-rose-500 focus:ring-rose-500" />
                <span>Delivery</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-rose-500 focus:ring-rose-500" />
                <span>Event Planning</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-rose-500 focus:ring-rose-500" />
                <span>Administration</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Additional Information</label>
            <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent" rows={4}></textarea>
          </div>
          <button type="submit" className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="ml-2 text-xl font-bold">GiveHope</span>
          </div>
          <p className="text-gray-400">Making a difference in our community through the power of giving.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#donate" className="text-gray-400 hover:text-white">Donate</a></li>
            <li><a href="#volunteer" className="text-gray-400 hover:text-white">Volunteer</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-400">
              <Phone className="h-5 w-5 mr-2" />
              +91 12340 56789
            </li>
            <li className="flex items-center text-gray-400">
              <Mail className="h-5 w-5 mr-2" />
              modiks@rknec.edu
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>© 2025 GiveHope. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <DonationCategories />
      <DonationForm />
      <VolunteerForm />
      <Footer />
    </div>
  );
}

export default App;