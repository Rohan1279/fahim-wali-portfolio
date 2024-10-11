import React, { useState, useEffect } from "react";

const AnimatedSVG = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // This will trigger a re-render on mount and on each page refresh
    setKey((prevKey) => prevKey + 1);
  }, []);

  return (
    <svg
      key={key}
      width="118"
      height="38"
      viewBox="0 0 188 38"
      fill="none"
      className="w-[183px]"
    >
      <style>
        {`
          path {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: draw 2s forwards;
          }
          
          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
          
          path:nth-child(1) { animation-delay: 0.1s; }
          path:nth-child(2) { animation-delay: 0.2s; }
          path:nth-child(3) { animation-delay: 0.3s; }
          path:nth-child(4) { animation-delay: 0.4s; }
          path:nth-child(5) { animation-delay: 0.5s; }
          path:nth-child(6) { animation-delay: 0.6s; }
          path:nth-child(7) { animation-delay: 0.7s; }
          path:nth-child(8) { animation-delay: 0.8s; }
          path:nth-child(9) { animation-delay: 0.9s; }
          path:nth-child(10) { animation-delay: 1.0s; }
          path:nth-child(11) { animation-delay: 1.1s; }
          path:nth-child(12) { animation-delay: 1.2s; }
          path:nth-child(13) { animation-delay: 1.3s; }
          path:nth-child(14) { animation-delay: 1.4s; }
          path:nth-child(15) { animation-delay: 1.5s; }
          path:nth-child(16) { animation-delay: 1.6s; }
          path:nth-child(17) { animation-delay: 1.7s; }
          path:nth-child(18) { animation-delay: 1.8s; }
          path:nth-child(19) { animation-delay: 1.9s; }
          path:nth-child(20) { animation-delay: 2.0s; }
        `}
      </style>

      <path
        d="M8.24014 8.08191C8.24014 7.057 8.39458 3.30908 7.35434 6.77652C5.6197 12.5587 4.51405 18.5555 3.20508 24.4459"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M1.94629 3.46648C2.33587 2.80419 2.76267 2.33949 3.57802 2.20771C7.7244 1.53759 13.4738 1.94393 17.1913 3.93269C23.7093 7.41955 15.5327 11.6293 12.2495 12.5109C9.49288 13.2512 7.11697 13.1656 4.46382 12.6974"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12.436 17.7325C14.2435 18.6894 13.7158 20.0973 13.4617 22.0216C13.0798 24.9131 14.1694 21.288 14.7904 20.5064C16.6475 18.169 18.2771 17.5144 20.8278 18.1521"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M29.6391 18.152C26.1224 17.9367 23.8165 24.5754 26.5622 24.2128C28.5382 23.9518 29.0577 21.3579 28.6601 19.8304C28.0784 17.5953 26.883 18.2445 25.4433 17.3129"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M45.5834 8.92114C45.5834 5.15217 45.0249 16.4391 44.8375 20.2034C44.5268 26.4424 43.3934 18.1345 40.1287 19.7372C38.6854 20.4457 37.7992 22.9191 38.8933 24.2594C40.4543 26.1716 43.0465 24.1961 44.7442 24.0263"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M51.0381 17.3129C51.0381 18.706 50.7612 22.587 52.4834 23.1871C53.8885 23.6768 55.2925 18.5448 55.6536 17.7325"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M66.1435 16.0541C64.0258 14.7509 62.8716 16.7692 61.9476 18.7815C61.2367 20.3296 60.7262 21.7551 61.3182 23.4436C62.0804 25.6172 63.6994 25.0169 65.3043 25.7047"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M72.8568 10.1799C73.9288 10.5819 72.9456 14.468 72.9034 14.7953C72.475 18.1188 71.9786 21.432 71.5048 24.7489C71.1637 27.1364 71.3565 25.5266 71.598 25.2851"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M70.3394 18.9912C73.4705 18.8205 76.7942 18.5458 79.9433 18.7115C88.8961 19.1827 78.5685 18.9046 86.2837 19.8304"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M99.7105 11.8582C98.3657 16.3967 98.2364 21.445 97.6125 26.1242"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M95.9342 8.92108C101.208 10.1701 109.694 13.7896 110.993 19.877C113.337 30.861 90.0095 30.03 85.0249 31.1593"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M114.816 25.285C115.887 25.285 123.422 24.7438 122.322 22.9307C121.314 21.2716 118.003 23.4047 117.38 24.2128C114.001 28.5904 120.252 29.3063 122.368 30.7397"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M133.697 22.7675C132.391 21.6069 127.785 22.573 129.035 24.4925C129.528 25.2496 135.261 26.9398 133.278 28.2688C131.172 29.6799 128.761 28.8249 126.564 28.6418"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M139.991 23.6067C139.991 25.5702 139.358 27.1841 138.732 29.0613"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M140.83 18.1521C141.516 17.9234 141.551 19.4766 141.669 19.8304"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M149.641 25.7047C148.929 24.7931 148.45 23.767 147.217 24.679C144.548 26.6533 147.216 27.6618 149.152 25.9144C151.107 24.1498 149.716 27.761 149.478 29.1313C149.14 31.0822 148.844 33.527 147.287 35.0288C143.932 38.2655 140.585 34.0193 137.473 33.2572"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M154.257 24.8655C154.989 24.2247 154.677 26.6731 154.677 27.1499C154.677 30.3457 155.281 28.498 156.635 26.8702C159.799 23.0666 159.649 30.7966 159.712 32.4181"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M163.068 26.9634C163.185 26.028 165.992 26.9139 166.542 26.7536C167.413 26.4993 168.255 26.0401 168.803 25.2851C170.098 23.4985 167.636 24.3602 167.124 24.9121C163.823 28.4746 167.547 30.7249 170.621 31.5789"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M173.138 25.7047C174.343 25.1778 174.089 26.4307 174.187 27.4297C174.214 27.699 174.162 31.0204 175.143 30.6465C176.627 30.0812 177.47 28.467 178.78 27.5695C186.992 21.9431 176.718 29.5375 185.726 24.4459"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default AnimatedSVG;
