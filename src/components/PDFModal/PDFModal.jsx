import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Viewer, SpecialZoomLevel, ZoomEvent } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { X } from "lucide-react";

const PDFModal = ({ fileUrl }) => {
  const [shown, setShown] = useState(false);
  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;
  const handleZoom = (e) => {
    console.log(`Zoom to ${e.scale}`);
  };
  const modalBody = () => (
    <div
      // style={{
      //   backgroundColor: "#fff",

      //   /* Fixed position */
      //   left: 0,
      //   position: "fixed",
      //   top: 0,

      //   /* Take full size */
      //   height: "70%",
      //   width: "70%",

      //   /* Displayed on top of other elements */
      //   zIndex: 9999,

      //   display: "flex",
      //   flexDirection: "column",
      //   overflow: "hidden",
      // }}
      className="w-[80%] h-5/6 fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col overflow-hidden bg-white z-[999] rounded-3xl"
    >
      <div className="flex">
        <ZoomOutButton />
        <ZoomPopover />
        <ZoomInButton />
      </div>
      {/* <!-- We will display viewer here --> */}
      <Viewer
        fileUrl="/pedal.pdf"
        plugins={[zoomPluginInstance]}
        defaultScale={0.8}
      />
    </div>
  );

  return (
    <>
      {/* <button onClick={() => setShown(true)} className="bg-red-500">
        Open modal
      </button>
      {shown && ReactDOM.createPortal(modalBody(), document.body)} */}
      <div>
        <button
          onClick={() => setShown(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open PDF
        </button>

        {shown && (
          <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl w-full max-w-4xl relative">
              <div className="flex justify-between items-center ">
                <button
                  size="icon"
                  onClick={() => setShown(false)}
                  className="size-10 rounded-full bg-white absolute -top-7 -right-7 shadow-md"
                >
                  <X className="h-4 w-4 mx-auto" />
                </button>
              </div>
              <embed
                src={"/pedal.pdf"}
                type="application/pdf"
                width="100%"
                height="600px"
                className=" rounded-3xl"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PDFModal;
