import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  // Generate stars
  useEffect(() => {
    const generateStars = () => {
      const starsArr = [];
      const count = window.innerWidth < 768 ? 50 : 100;

      for (let i = 0; i < count; i++) {
        starsArr.push({
          id: `star-${i}`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 60}%`,
          size: `${Math.random() * 3 + 1}px`,
          delay: `${Math.random() * 5}s`,
        });
      }

      setStars(starsArr);
    };

    generateStars();

    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, []);

  // Create shooting stars at intervals
  useEffect(() => {
    const shootingStarInterval = setInterval(() => {
      const newStar = {
        id: `shooting-${Date.now()}`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 30}%`,
        duration: `${Math.random() * 2 + 2}s`,
      };

      setShootingStars((prev) => [...prev, newStar]);

      // Remove star after animation completes
      setTimeout(() => {
        setShootingStars((prev) =>
          prev.filter((star) => star.id !== newStar.id)
        );
      }, 3000);
    }, 4000);

    return () => clearInterval(shootingStarInterval);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Night sky - reduced opacity for the gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dystopian-black via-dystopian-dark to-[#5f3b8e] opacity-80"></div>

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse-subtle"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute w-[2px] h-[2px] bg-white animate-meteor"
          style={{
            left: star.left,
            top: star.top,
            animationDuration: star.duration,
          }}
        >
          <div className="w-[20px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-[18px]"></div>
        </div>
      ))}

      {/* City silhouette - increased opacity for better visibility */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          preserveAspectRatio="xMidYMax slice"
        >
          {/* First layer - far buildings (taller now) */}
          <rect x="0" y="20" width="40" height="160" fill="#221F26" />
          <rect x="40" y="10" width="30" height="170" fill="#1A1F2C" />
          <rect x="70" y="25" width="50" height="155" fill="#221F26" />
          <rect x="120" y="5" width="20" height="175" fill="#1A1F2C" />
          <rect x="140" y="15" width="60" height="165" fill="#221F26" />
          <rect x="200" y="0" width="15" height="180" fill="#1A1F2C" />
          <rect x="215" y="10" width="45" height="170" fill="#221F26" />
          <rect x="260" y="20" width="30" height="160" fill="#1A1F2C" />
          <rect x="290" y="0" width="25" height="180" fill="#221F26" />
          <rect x="315" y="15" width="40" height="165" fill="#1A1F2C" />
          <rect x="355" y="5" width="20" height="175" fill="#221F26" />
          <rect x="375" y="20" width="35" height="160" fill="#1A1F2C" />
          <rect x="410" y="10" width="40" height="170" fill="#221F26" />
          <rect x="450" y="0" width="30" height="180" fill="#1A1F2C" />
          <rect x="480" y="15" width="50" height="165" fill="#221F26" />
          <rect x="530" y="5" width="25" height="175" fill="#1A1F2C" />
          <rect x="555" y="20" width="45" height="160" fill="#221F26" />
          <rect x="600" y="0" width="20" height="180" fill="#1A1F2C" />
          <rect x="620" y="15" width="40" height="165" fill="#221F26" />
          <rect x="660" y="0" width="30" height="180" fill="#1A1F2C" />
          <rect x="690" y="10" width="60" height="170" fill="#221F26" />
          <rect x="750" y="20" width="25" height="160" fill="#1A1F2C" />
          <rect x="775" y="5" width="35" height="175" fill="#221F26" />
          <rect x="810" y="15" width="20" height="165" fill="#1A1F2C" />
          <rect x="830" y="0" width="50" height="180" fill="#221F26" />
          <rect x="880" y="20" width="30" height="160" fill="#1A1F2C" />
          <rect x="910" y="10" width="25" height="170" fill="#221F26" />
          <rect x="935" y="0" width="40" height="180" fill="#1A1F2C" />
          <rect x="975" y="15" width="35" height="165" fill="#221F26" />
          <rect x="1010" y="5" width="20" height="175" fill="#1A1F2C" />
          <rect x="1030" y="20" width="45" height="160" fill="#221F26" />
          <rect x="1075" y="10" width="30" height="170" fill="#1A1F2C" />
          <rect x="1105" y="15" width="50" height="165" fill="#221F26" />
          <rect x="1155" y="0" width="35" height="180" fill="#1A1F2C" />
          <rect x="1190" y="20" width="20" height="160" fill="#221F26" />
          <rect x="1210" y="5" width="45" height="175" fill="#1A1F2C" />
          <rect x="1255" y="15" width="25" height="165" fill="#221F26" />
          <rect x="1280" y="0" width="40" height="180" fill="#1A1F2C" />
          <rect x="1320" y="10" width="30" height="170" fill="#221F26" />
          <rect x="1350" y="20" width="40" height="160" fill="#1A1F2C" />
          <rect x="1390" y="0" width="50" height="180" fill="#221F26" />

          {/* Second layer - closer buildings with windows (taller) */}
          <rect x="70" y="35" width="100" height="145" fill="#171a23" />
          <rect x="220" y="30" width="120" height="150" fill="#171a23" />
          <rect x="400" y="32" width="80" height="148" fill="#171a23" />
          <rect x="540" y="35" width="130" height="145" fill="#171a23" />
          <rect x="750" y="28" width="110" height="152" fill="#171a23" />
          <rect x="920" y="33" width="90" height="147" fill="#171a23" />
          <rect x="1080" y="30" width="120" height="150" fill="#171a23" />
          <rect x="1260" y="35" width="100" height="145" fill="#171a23" />

          {/* Windows for the buildings - scattered across buildings */}
          <g fill="#00ff9d" opacity="0.7">
            {/* First building windows */}
            <rect x="80" y="50" width="5" height="8" />
            <rect x="95" y="50" width="5" height="8" />
            <rect x="110" y="50" width="5" height="8" />
            <rect x="125" y="50" width="5" height="8" />
            <rect x="80" y="70" width="5" height="8" />
            <rect x="95" y="70" width="5" height="8" />
            <rect x="110" y="70" width="5" height="8" />
            <rect x="125" y="70" width="5" height="8" />
            <rect x="80" y="90" width="5" height="8" />
            <rect x="95" y="90" width="5" height="8" />
            <rect x="110" y="90" width="5" height="8" />
            <rect x="125" y="90" width="5" height="8" />
            <rect x="80" y="110" width="5" height="8" />
            <rect x="95" y="110" width="5" height="8" />
            <rect x="110" y="110" width="5" height="8" />
            <rect x="125" y="110" width="5" height="8" />
            <rect x="80" y="130" width="5" height="8" />
            <rect x="95" y="130" width="5" height="8" />
            <rect x="110" y="130" width="5" height="8" />
            <rect x="125" y="130" width="5" height="8" />

            {/* Second building windows */}
            <rect x="230" y="45" width="5" height="8" />
            <rect x="245" y="45" width="5" height="8" />
            <rect x="260" y="45" width="5" height="8" />
            <rect x="275" y="45" width="5" height="8" />
            <rect x="290" y="45" width="5" height="8" />
            <rect x="305" y="45" width="5" height="8" />
            <rect x="230" y="65" width="5" height="8" />
            <rect x="245" y="65" width="5" height="8" />
            <rect x="260" y="65" width="5" height="8" />
            <rect x="275" y="65" width="5" height="8" />
            <rect x="290" y="65" width="5" height="8" />
            <rect x="305" y="65" width="5" height="8" />
            <rect x="230" y="85" width="5" height="8" />
            <rect x="245" y="85" width="5" height="8" />
            <rect x="260" y="85" width="5" height="8" />
            <rect x="275" y="85" width="5" height="8" />
            <rect x="290" y="85" width="5" height="8" />
            <rect x="305" y="85" width="5" height="8" />
            <rect x="230" y="105" width="5" height="8" />
            <rect x="245" y="105" width="5" height="8" />
            <rect x="260" y="105" width="5" height="8" />
            <rect x="275" y="105" width="5" height="8" />
            <rect x="290" y="105" width="5" height="8" />
            <rect x="305" y="105" width="5" height="8" />
            <rect x="230" y="125" width="5" height="8" />
            <rect x="245" y="125" width="5" height="8" />
            <rect x="260" y="125" width="5" height="8" />
            <rect x="275" y="125" width="5" height="8" />
            <rect x="290" y="125" width="5" height="8" />
            <rect x="305" y="125" width="5" height="8" />
          </g>

          <g fill="#6c63ff" opacity="0.7">
            {/* Third building windows */}
            <rect x="410" y="50" width="5" height="8" />
            <rect x="425" y="50" width="5" height="8" />
            <rect x="440" y="50" width="5" height="8" />
            <rect x="455" y="50" width="5" height="8" />
            <rect x="410" y="70" width="5" height="8" />
            <rect x="425" y="70" width="5" height="8" />
            <rect x="440" y="70" width="5" height="8" />
            <rect x="455" y="70" width="5" height="8" />
            <rect x="410" y="90" width="5" height="8" />
            <rect x="425" y="90" width="5" height="8" />
            <rect x="440" y="90" width="5" height="8" />
            <rect x="455" y="90" width="5" height="8" />
            <rect x="410" y="110" width="5" height="8" />
            <rect x="425" y="110" width="5" height="8" />
            <rect x="440" y="110" width="5" height="8" />
            <rect x="455" y="110" width="5" height="8" />
            <rect x="410" y="130" width="5" height="8" />
            <rect x="425" y="130" width="5" height="8" />
            <rect x="440" y="130" width="5" height="8" />
            <rect x="455" y="130" width="5" height="8" />

            {/* Fourth building windows */}
            <rect x="560" y="45" width="5" height="8" />
            <rect x="575" y="45" width="5" height="8" />
            <rect x="590" y="45" width="5" height="8" />
            <rect x="605" y="45" width="5" height="8" />
            <rect x="620" y="45" width="5" height="8" />
            <rect x="635" y="45" width="5" height="8" />
            <rect x="560" y="65" width="5" height="8" />
            <rect x="575" y="65" width="5" height="8" />
            <rect x="590" y="65" width="5" height="8" />
            <rect x="605" y="65" width="5" height="8" />
            <rect x="620" y="65" width="5" height="8" />
            <rect x="635" y="65" width="5" height="8" />
            <rect x="560" y="85" width="5" height="8" />
            <rect x="575" y="85" width="5" height="8" />
            <rect x="590" y="85" width="5" height="8" />
            <rect x="605" y="85" width="5" height="8" />
            <rect x="620" y="85" width="5" height="8" />
            <rect x="635" y="85" width="5" height="8" />
            <rect x="560" y="105" width="5" height="8" />
            <rect x="575" y="105" width="5" height="8" />
            <rect x="590" y="105" width="5" height="8" />
            <rect x="605" y="105" width="5" height="8" />
            <rect x="620" y="105" width="5" height="8" />
            <rect x="635" y="105" width="5" height="8" />
            <rect x="560" y="125" width="5" height="8" />
            <rect x="575" y="125" width="5" height="8" />
            <rect x="590" y="125" width="5" height="8" />
            <rect x="605" y="125" width="5" height="8" />
            <rect x="620" y="125" width="5" height="8" />
            <rect x="635" y="125" width="5" height="8" />
          </g>

          {/* Additional windows on other buildings */}
          <g fill="#00ff9d" opacity="0.7">
            <rect x="770" y="40" width="5" height="8" />
            <rect x="785" y="40" width="5" height="8" />
            <rect x="800" y="40" width="5" height="8" />
            <rect x="815" y="40" width="5" height="8" />
            <rect x="830" y="40" width="5" height="8" />
            <rect x="770" y="60" width="5" height="8" />
            <rect x="785" y="60" width="5" height="8" />
            <rect x="800" y="60" width="5" height="8" />
            <rect x="815" y="60" width="5" height="8" />
            <rect x="830" y="60" width="5" height="8" />
            <rect x="770" y="80" width="5" height="8" />
            <rect x="785" y="80" width="5" height="8" />
            <rect x="800" y="80" width="5" height="8" />
            <rect x="815" y="80" width="5" height="8" />
            <rect x="830" y="80" width="5" height="8" />
            <rect x="770" y="100" width="5" height="8" />
            <rect x="785" y="100" width="5" height="8" />
            <rect x="800" y="100" width="5" height="8" />
            <rect x="815" y="100" width="5" height="8" />
            <rect x="830" y="100" width="5" height="8" />
            <rect x="770" y="120" width="5" height="8" />
            <rect x="785" y="120" width="5" height="8" />
            <rect x="800" y="120" width="5" height="8" />
            <rect x="815" y="120" width="5" height="8" />
            <rect x="830" y="120" width="5" height="8" />
          </g>

          <g fill="#6c63ff" opacity="0.7">
            <rect x="940" y="45" width="5" height="8" />
            <rect x="955" y="45" width="5" height="8" />
            <rect x="970" y="45" width="5" height="8" />
            <rect x="985" y="45" width="5" height="8" />
            <rect x="940" y="65" width="5" height="8" />
            <rect x="955" y="65" width="5" height="8" />
            <rect x="970" y="65" width="5" height="8" />
            <rect x="985" y="65" width="5" height="8" />
            <rect x="940" y="85" width="5" height="8" />
            <rect x="955" y="85" width="5" height="8" />
            <rect x="970" y="85" width="5" height="8" />
            <rect x="985" y="85" width="5" height="8" />
            <rect x="940" y="105" width="5" height="8" />
            <rect x="955" y="105" width="5" height="8" />
            <rect x="970" y="105" width="5" height="8" />
            <rect x="985" y="105" width="5" height="8" />
            <rect x="940" y="125" width="5" height="8" />
            <rect x="955" y="125" width="5" height="8" />
            <rect x="970" y="125" width="5" height="8" />
            <rect x="985" y="125" width="5" height="8" />
          </g>

          <g fill="#00ff9d" opacity="0.7">
            <rect x="1090" y="40" width="5" height="8" />
            <rect x="1105" y="40" width="5" height="8" />
            <rect x="1120" y="40" width="5" height="8" />
            <rect x="1135" y="40" width="5" height="8" />
            <rect x="1150" y="40" width="5" height="8" />
            <rect x="1165" y="40" width="5" height="8" />
            <rect x="1090" y="60" width="5" height="8" />
            <rect x="1105" y="60" width="5" height="8" />
            <rect x="1120" y="60" width="5" height="8" />
            <rect x="1135" y="60" width="5" height="8" />
            <rect x="1150" y="60" width="5" height="8" />
            <rect x="1165" y="60" width="5" height="8" />
            <rect x="1090" y="80" width="5" height="8" />
            <rect x="1105" y="80" width="5" height="8" />
            <rect x="1120" y="80" width="5" height="8" />
            <rect x="1135" y="80" width="5" height="8" />
            <rect x="1150" y="80" width="5" height="8" />
            <rect x="1165" y="80" width="5" height="8" />
            <rect x="1090" y="100" width="5" height="8" />
            <rect x="1105" y="100" width="5" height="8" />
            <rect x="1120" y="100" width="5" height="8" />
            <rect x="1135" y="100" width="5" height="8" />
            <rect x="1150" y="100" width="5" height="8" />
            <rect x="1165" y="100" width="5" height="8" />
            <rect x="1090" y="120" width="5" height="8" />
            <rect x="1105" y="120" width="5" height="8" />
            <rect x="1120" y="120" width="5" height="8" />
            <rect x="1135" y="120" width="5" height="8" />
            <rect x="1150" y="120" width="5" height="8" />
            <rect x="1165" y="120" width="5" height="8" />
          </g>

          <g fill="#6c63ff" opacity="0.7">
            <rect x="1270" y="45" width="5" height="8" />
            <rect x="1285" y="45" width="5" height="8" />
            <rect x="1300" y="45" width="5" height="8" />
            <rect x="1315" y="45" width="5" height="8" />
            <rect x="1330" y="45" width="5" height="8" />
            <rect x="1270" y="65" width="5" height="8" />
            <rect x="1285" y="65" width="5" height="8" />
            <rect x="1300" y="65" width="5" height="8" />
            <rect x="1315" y="65" width="5" height="8" />
            <rect x="1330" y="65" width="5" height="8" />
            <rect x="1270" y="85" width="5" height="8" />
            <rect x="1285" y="85" width="5" height="8" />
            <rect x="1300" y="85" width="5" height="8" />
            <rect x="1315" y="85" width="5" height="8" />
            <rect x="1330" y="85" width="5" height="8" />
            <rect x="1270" y="105" width="5" height="8" />
            <rect x="1285" y="105" width="5" height="8" />
            <rect x="1300" y="105" width="5" height="8" />
            <rect x="1315" y="105" width="5" height="8" />
            <rect x="1330" y="105" width="5" height="8" />
            <rect x="1270" y="125" width="5" height="8" />
            <rect x="1285" y="125" width="5" height="8" />
            <rect x="1300" y="125" width="5" height="8" />
            <rect x="1315" y="125" width="5" height="8" />
            <rect x="1330" y="125" width="5" height="8" />
          </g>
        </svg>
      </div>

      {/* Add scanline and CRT effects */}
      <div className="scanlines"></div>
      <div className="crt-overlay"></div>
    </div>
  );
};
