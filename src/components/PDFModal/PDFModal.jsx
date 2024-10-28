import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const PDFModal = ({ pdfUrl, shown, setShown }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (shown) {
      setIsAnimating(true);
    }
  }, [shown]);

  const handleCloseModal = () => {
    setIsAnimating(false);
    setTimeout(() => setShown(false), 300); // Wait for animation to finish
  };

  return (
    <>
      {(shown || isAnimating) && (
        <div
          className={`fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleCloseModal}
        >
          <div
            className={`bg-white rounded-[19px] w-full max-w-7xl relative transition-all duration-300 ease-in-out ${
              isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <button
                onClick={handleCloseModal}
                className="size-10 rounded-full bg-white absolute -top-7 -right-7 shadow-md transition-transform duration-200 hover:scale-110"
              >
                <X className="h-4 w-4 mx-auto" />
              </button>
            </div>
            <embed
              src={
                "https://drive.google.com/file/d/1zMbyK-hjfJQUNqn00KPDV_Ss06V7gQtb/view?usp=sharing"
              }
              type="application/pdf"
              width="100%"
              height="700px"
              className="rounded-[19px]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PDFModal;
