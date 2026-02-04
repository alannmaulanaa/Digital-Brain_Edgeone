import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Loader2 } from 'lucide-react';

export default function Scanner() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpload = (e) => {
    // Simulasi proses AI (Nanti disini kita panggil API EdgeOne/OpenAI)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/study/new'); // Redirect ke hasil generate
    }, 3000); // 3 detik loading pura-pura
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl text-center">
        {loading ? (
          <div className="py-10">
            <Loader2 className="animate-spin w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold">AI Sedang Membaca...</h3>
            <p className="text-gray-400 text-sm">Menganalisis teks dan membuat soal.</p>
          </div>
        ) : (
          <>
            <div className="mb-6 bg-blue-50 p-4 rounded-full inline-block">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Upload Catatan</h2>
            <p className="text-gray-500 mb-8">Ambil foto atau upload file PDF/JPG.</p>
            
            <label className="block w-full cursor-pointer">
              <span className="sr-only">Choose file</span>
              <input type="file" onChange={handleUpload} className="block w-full text-sm text-slate-500
                file:mr-4 file:py-3 file:px-6
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-600 file:text-white
                hover:file:bg-blue-700
              "/>
            </label>
          </>
        )}
      </div>
    </div>
  );
}