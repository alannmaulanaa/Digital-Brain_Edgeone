import React, { useState } from 'react';
import { RotateCcw, Check, X } from 'lucide-react';

export default function FlashcardMode() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mockup Soal Hasil Generate AI
  const cards = [
    { q: "Apa nama peristiwa penculikan Soekarno-Hatta?", a: "Peristiwa Rengasdengklok" },
    { q: "Tanggal berapa BPUPKI dibubarkan?", a: "7 Agustus 1945" },
    { q: "Siapa yang mengetik teks proklamasi?", a: "Sayuti Melik" },
  ];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Kartu (Area Klik) */}
      <div 
        onClick={() => setIsFlipped(!isFlipped)}
        className={`relative w-full max-w-lg h-80 cursor-pointer perspective-1000 transition-all duration-500 transform ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        <div className={`w-full h-full bg-white rounded-2xl shadow-xl flex items-center justify-center p-8 text-center border-b-4 border-blue-600 transition-all
          ${isFlipped ? 'bg-blue-50 border-blue-800' : ''}`}>
          
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase mb-4">
              {isFlipped ? "JAWABAN" : "PERTANYAAN"}
            </p>
            <h2 className="text-2xl font-bold text-gray-800">
              {isFlipped ? cards[currentIndex].a : cards[currentIndex].q}
            </h2>
          </div>
          
        </div>
      </div>

      <p className="mt-4 text-gray-400 text-sm">Ketuk kartu untuk membalik</p>

      {/* Kontrol */}
      <div className="flex gap-4 mt-8">
        <button onClick={handleNext} className="bg-red-100 text-red-600 p-4 rounded-full hover:bg-red-200">
          <X size={24} />
        </button>
        <button onClick={() => setIsFlipped(!isFlipped)} className="bg-gray-200 text-gray-600 p-4 rounded-full hover:bg-gray-300">
          <RotateCcw size={24} />
        </button>
        <button onClick={handleNext} className="bg-green-100 text-green-600 p-4 rounded-full hover:bg-green-200">
          <Check size={24} />
        </button>
      </div>
    </div>
  );
}