import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Camera, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <div className="max-w-3xl">
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
          🚀 Powered by Tencent EdgeOne
        </span>
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          Ubah Catatan Jadi <span className="text-blue-600">Flashcard</span> dalam Detik.
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Jangan cuma mencatat. Biarkan AI kami mengubah foto buku/catatanmu menjadi kuis interaktif. Belajar jadi 10x lebih cepat.
        </p>
        
        <Link to="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all transform hover:scale-105">
          Coba Sekarang Gratis
        </Link>

        {/* Fitur Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
          <FeatureCard icon={<Camera />} title="Snap & Scan" desc="Foto catatan tulisan tangan atau buku paketmu." />
          <FeatureCard icon={<Brain />} title="AI Processing" desc="AI mengekstrak poin penting menjadi soal kuis." />
          <FeatureCard icon={<Zap />} title="Instant Study" desc="Langsung belajar tanpa mengetik ulang satu kata pun." />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="text-blue-500 mb-3">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  );
}