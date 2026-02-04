import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, BookOpen } from 'lucide-react';

export default function Dashboard() {
  // Data Mockup (Pura-pura data dari database)
  const decks = [
    { id: 1, title: 'Sejarah Kemerdekaan', cards: 12, lastStudied: '2 jam lalu' },
    { id: 2, title: 'Rumus Fisika Dasar', cards: 25, lastStudied: 'Kemarin' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Koleksi Belajarku</h2>
        <Link to="/scan" className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          <Plus size={18} /> Buat Baru
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {decks.map((deck) => (
          <div key={deck.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                <BookOpen size={24} />
              </div>
              <span className="text-xs text-gray-400">{deck.lastStudied}</span>
            </div>
            <h3 className="text-xl font-bold mb-1">{deck.title}</h3>
            <p className="text-gray-500 mb-4">{deck.cards} Kartu</p>
            <Link to={`/study/${deck.id}`} className="block text-center w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg">
              Mulai Belajar
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}