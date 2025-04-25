import { useState } from 'react';
import { Link } from 'react-router-dom';
import VaporwaveGrid from '../components/VaporwaveGrid';
import FloatingObject from '../components/FloatingObject';
import { Sun, MoonStar, Music, MapPin } from 'lucide-react';

const Index = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
    // Music logic would go here in a real app
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-vaporwave-dark">
      {/* Background grid */}
      <VaporwaveGrid />
      
      {/* Sun/Moon */}
      <div className="absolute top-40 right-40 z-10">
        <FloatingObject delay="1s">
          {Math.random() > 0.5 ? (
            <Sun size={100} className="text-vaporwave-sunset opacity-80" />
          ) : (
            <MoonStar size={100} className="text-vaporwave-blue opacity-80" />
          )}
        </FloatingObject>
      </div>
      
      {/* Floating triangles */}
      <FloatingObject className="absolute top-1/4 left-1/4 z-10" delay="2s">
        <div className="w-20 h-20 bg-vaporwave-purple opacity-70 rotate-45"></div>
      </FloatingObject>
      
      <FloatingObject className="absolute bottom-1/4 right-1/3 z-10" delay="3s">
        <div className="w-32 h-32 bg-vaporwave-pink opacity-50 rounded-full"></div>
      </FloatingObject>
      
      {/* Content */}
      <div className="container relative z-20 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text">
          Ｖａｐｏｒｗａｖｅ
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto">
          Погрузись в атмосферу неоновых закатов и ретро-футуризма
        </p>
        
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
          <Link to="/city" className="retro-button flex items-center justify-center">
            <MapPin className="mr-2" size={18} />
            МОЙ ГОРОД
          </Link>
          
          <button
            className="flex items-center justify-center retro-button"
            onClick={toggleMusic}
          >
            <Music className="mr-2" size={18} />
            {isMusicPlaying ? 'ＳＴＯＰ' : 'ＰＬＡＹ'}
          </button>
        </div>
        
        <div className="mt-20">
          <p className="text-sm md:text-base text-white/70">© {new Date().getFullYear()} ＡＥＳＴＨＥＴＩＣＳ</p>
        </div>
      </div>
      
      {/* Horizontal line at the bottom */}
      <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-vaporwave-pink via-vaporwave-purple to-vaporwave-blue"></div>
    </div>
  );
};

export default Index;
