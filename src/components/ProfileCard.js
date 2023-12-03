import React from "react";

const ProfileCard = () => {
  return (
    <div className="bg-white max-w-lg mx-auto my-8 p-5 rounded-lg shadow-lg">
      <div className="mb-4">
        {/* Hakkımda Başlığı */}
        <h1 className="text-3xl font-bold text-center text-purple-500 mb-2">
          Hakkımda
        </h1>
        {/* Ayırıcı */}
        <div className="flex justify-center">
          <div className="inline-block w-16 h-1 bg-purple-500 rounded"></div>
        </div>
      </div>

      <div className="mb-6">
        {/* Becerilerim Başlığı */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Becerilerim
        </h2>
        {/* Beceri Etiketleri */}
        <div className="flex flex-wrap justify-center gap-2">
          <span className="bg-blue-200 rounded-full px-4 py-1 text-sm font-medium text-gray-700">
            javascript
          </span>
          <span className="bg-blue-200 rounded-full px-4 py-1 text-sm font-medium text-gray-700">
            react
          </span>
          <span className="bg-blue-200 rounded-full px-4 py-1 text-sm font-medium text-gray-700">
            css
          </span>
        </div>
      </div>

      <div>
        {/* Sosyal Medya Linkleri */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Beni Takip Edin
        </h2>
        <div className="flex justify-center gap-4">
          {/* Sosyal medya ikonları ve linkleri yer alacak */}
          {/* Örnek olarak sadece simgeleri temsil eden daireler koyuyorum */}
          <div className="w-8 h-8 bg-purple-300 rounded-full"></div>
          <div className="w-8 h-8 bg-purple-300 rounded-full"></div>
          <div className="w-8 h-8 bg-purple-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
