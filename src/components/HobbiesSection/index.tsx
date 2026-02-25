import { useState } from 'react';
import Image from 'next/image';

const TABS = ['Trips', 'Friends', 'My Hobbies'] as const;
type Tab = typeof TABS[number];

const hobbiesData = {
  Trips: [
    { src: '/image/grp.jpg', label: 'Manali Trip 🏔️', date: 'Mar 2024' },
    { src: '/trips/beach.jpg', label: 'Goa Beach 🌊', date: 'Dec 2023' },
  ],
  Friends: [
    { src: '/friends/group1.jpg', label: 'College Farewell 🎓' },
    { src: '/friends/party.jpg', label: 'Birthday Bash 🎉' },
  ],
  'My Hobbies': [
    { icon: '🎸', title: 'Guitar', desc: 'Playing acoustic guitar for 5 years.' },
    { icon: '📷', title: 'Photography', desc: 'Capturing moments with my DSLR.' },
    { icon: '🎮', title: 'Gaming', desc: 'Big fan of strategy games and RPGs.' },
  ],
};

export default function HobbiesSection() {
  const [activeTab, setActiveTab] = useState<Tab>('Trips');

  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">My Life in Moments</h2>

      <div className="flex justify-center mb-6 space-x-4">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300
              ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>
        {activeTab === 'Trips' && (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {hobbiesData.Trips.map((trip, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md relative group">
                <Image
                  src={trip.src}
                  alt={trip.label}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
                  <p className="text-sm">{trip.label} — <span className="italic">{trip.date}</span></p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Friends' && (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {hobbiesData.Friends.map((friend, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md relative">
                <Image
                  src={friend.src}
                  alt={friend.label}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
                  <p className="text-sm">{friend.label}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'My Hobbies' && (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {hobbiesData['My Hobbies'].map((hobby, index) => (
              <div
                key={index}
                className="border rounded-2xl p-4 shadow-md bg-white hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl mb-2">{hobby.icon}</div>
                <h3 className="text-xl font-semibold mb-1">{hobby.title}</h3>
                <p className="text-gray-600 text-sm">{hobby.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
