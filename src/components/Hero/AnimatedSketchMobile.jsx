import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const AnimatedSketchMobile = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // This will trigger a re-render on mount and on each page refresh
    setKey((prevKey) => prevKey + 1);
  }, []);

  return (
    <svg
      width="158"
      height="40"
      viewBox="0 0 158 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
      <g id="product designer sketch">
        <path
          id="Vector 205"
          d="M6.63674 15.8051C6.57668 14.9461 6.48646 11.7959 5.81784 14.7629C4.70289 19.7107 4.12768 24.8015 3.37583 29.815"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="Vector 206"
          d="M1.0913 12.3057C1.379 11.7278 1.70947 11.3133 2.38511 11.155C5.82097 10.3504 10.6634 10.354 13.8957 11.8029C19.5628 14.3433 12.9567 18.3508 10.2566 19.2821C7.98964 20.064 5.99335 20.1316 3.74227 19.8947"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="Vector 207"
          d="M10.719 23.6474C12.2899 24.3434 11.9302 25.5544 11.83 27.1821C11.6794 29.6279 12.3801 26.5258 12.8548 25.8343C14.2743 23.7665 15.6017 23.1223 17.7768 23.5072"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="Vector 208"
          d="M25.1618 22.9909C22.2018 23.0165 20.6582 28.7156 22.9381 28.2508C24.579 27.9162 24.8623 25.7118 24.4396 24.4549C23.821 22.6157 22.8572 23.2298 21.596 22.5334"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="Vector 209"
          d="M37.9839 14.3199C37.763 11.161 37.9564 20.6535 38.02 23.8194C38.1253 29.0666 36.6885 22.1701 34.0462 23.7046C32.8781 24.383 32.2802 26.508 33.2758 27.5672C34.6961 29.0783 36.753 27.2707 38.1659 27.0289"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="Vector 210"
          d="M43.0473 21.0333C43.129 22.2009 43.1244 25.4699 44.6029 25.8719C45.8092 26.2 46.6852 21.8165 46.9402 21.1145"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="Vector 211"
          d="M55.6335 19.0932C53.7823 18.125 52.9332 19.8842 52.2767 21.6249C51.7717 22.9641 51.4273 24.1887 52.0225 25.5691C52.7886 27.3462 54.1103 26.7482 55.4958 27.2306"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="Vector 212"
          d="M60.9158 13.7764C61.8379 14.0505 61.2416 17.3652 61.2254 17.642C61.0611 20.4525 60.8393 23.2584 60.6366 26.0662C60.4906 28.0872 60.5578 26.7266 60.7461 26.5101"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="Vector 213"
          d="M59.3222 21.3089C61.9364 20.9822 64.706 20.5572 67.355 20.5116C74.8861 20.3818 66.2141 20.754 72.7346 21.0778"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="Vector 214"
          d="M83.5205 13.6093C82.6595 17.4919 82.847 21.7305 82.5983 25.6888"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="Vector 215"
          d="M80.1835 11.3689C84.6767 12.1067 92.0008 14.6429 93.4463 19.6687C96.0546 28.7371 76.455 29.4077 72.3435 30.6464"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="Vector 216"
          d="M96.9674 23.9772C97.865 23.9144 104.149 23.0192 103.12 21.5641C102.179 20.2326 99.5289 22.2145 99.0536 22.9282C96.4784 26.7952 101.76 27.0288 103.617 28.1062"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="Vector 217"
          d="M112.645 20.7606C111.482 19.8644 107.678 20.9441 108.838 22.4796C109.296 23.0852 114.2 24.1658 112.615 25.3959C110.933 26.702 108.863 26.1266 107.011 26.102"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="Vector 218"
          d="M117.969 21.0951C118.084 22.7408 117.648 24.1305 117.233 25.7405"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="Vector 219"
          d="M118.352 16.4744C118.914 16.2425 119.034 17.5422 119.154 17.8318"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="Vector 220"
          d="M126.18 22.2878C125.53 21.5656 125.068 20.7337 124.088 21.5703C121.967 23.3814 124.262 24.0704 125.782 22.4924C127.317 20.8988 126.363 24.0069 126.244 25.1693C126.075 26.8242 125.97 28.8906 124.753 30.2406C122.131 33.1499 119.077 29.7872 116.424 29.3309"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="Vector 221"
          d="M129.999 21.3141C130.575 20.734 130.457 22.8045 130.485 23.2041C130.672 25.8825 131.07 24.2985 132.109 22.8549C134.538 19.4816 134.866 25.969 135.013 27.3243"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="Vector 222"
          d="M137.507 22.5559C137.55 21.765 139.954 22.3431 140.406 22.1765C141.121 21.9123 141.8 21.4781 142.215 20.8132C143.196 19.2399 141.182 20.1064 140.786 20.599C138.228 23.7782 141.481 25.446 144.107 25.9816"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="Vector 223"
          d="M145.873 20.9108C146.852 20.3986 146.713 21.4635 146.853 22.2951C146.891 22.5192 147.042 25.306 147.843 24.9351C149.053 24.3744 149.665 22.9721 150.71 22.1432C157.263 16.9463 149.098 23.9134 156.349 19.1181"
          stroke="#2F67AA"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default AnimatedSketchMobile;
