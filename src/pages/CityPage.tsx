import { useState } from 'react';
import VaporwaveGrid from '../components/VaporwaveGrid';
import FloatingObject from '../components/FloatingObject';
import { Building2, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CityPage = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-vaporwave-dark">
      {/* Background grid */}
      <VaporwaveGrid />
      
      {/* Floating city elements */}
      <FloatingObject className="absolute top-40 right-40 z-10" delay="1.5s">
        <Building2 size={80} className="text-vaporwave-blue opacity-70" />
      </FloatingObject>
      
      <FloatingObject className="absolute top-1/3 left-1/4 z-10" delay="2.2s">
        <div className="w-24 h-24 bg-vaporwave-purple opacity-60 rotate-45"></div>
      </FloatingObject>
      
      <FloatingObject className="absolute bottom-1/3 right-1/4 z-10" delay="3.2s">
        <div className="w-32 h-32 rounded-full bg-vaporwave-pink opacity-40"></div>
      </FloatingObject>
      
      {/* Content */}
      <div className="container relative z-20 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 neon-text">
          Мой любимый город
        </h1>
        
        <div className="flex justify-center mb-8">
          <MapPin className="text-vaporwave-pink mr-2" size={24} />
          <span className="text-white text-xl">В моем сердце навсегда</span>
        </div>
        
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg max-w-2xl mx-auto mb-10">
          <p className="text-xl mb-6 text-white/90">
            В этом городе сочетаются футуристические небоскребы и старинная архитектура, 
            шумные проспекты и тихие уютные дворики. Каждый закат здесь особенный, 
            а ночные огни создают неповторимую атмосферу.
          </p>
          
          <p className="text-xl text-white/90">
            Прогуливаясь по его улицам, я вспоминаю все те моменты, 
            которые делают этот город по-настоящему моим.
          </p>
        </div>
        
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
          <button className="retro-button">
            ＧＡＬＬＥＲＹ
          </button>
          
          <button 
            className={`retro-button flex items-center justify-center ${isLiked ? 'bg-vaporwave-pink' : 'bg-vaporwave-purple'}`}
            onClick={toggleLike}
          >
            <Heart className={`mr-2 ${isLiked ? 'fill-white' : ''}`} size={20} />
            {isLiked ? 'ＬＯＶＥＤ' : 'ＬＩＫＥ'}
          </button>
        </div>
        
        <div className="mt-12">
          <Link to="/" className="text-white/70 hover:text-white underline transition-colors duration-300">
            ← Вернуться на главную
          </Link>
        </div>
      </div>
      
      {/* Horizontal line at the bottom */}
      <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-vaporwave-blue via-vaporwave-purple to-vaporwave-pink"></div>
    </div>
  );
};

export default CityPage;
