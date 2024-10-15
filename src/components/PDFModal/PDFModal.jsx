import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Viewer, SpecialZoomLevel, ZoomEvent } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PDFModal = ({ fileUrl }) => {
  const [shown, setShown] = useState(false);
  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;
  const handleZoom = (e) => {
    console.log(`Zoom to ${e.scale}`);
  };
  const modalBody = () => (
    <div
      style={{
        backgroundColor: "#fff",

        /* Fixed position */
        left: 0,
        position: "fixed",
        top: 0,

        /* Take full size */
        height: "70%",
        width: "70%",

        /* Displayed on top of other elements */
        zIndex: 9999,

        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
      // className="w-full h-5/6 fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col overflow-hidden bg-white z-[999]"
    >
      <ZoomOutButton />
      <ZoomPopover />
      <ZoomInButton />
      {/* <!-- We will display viewer here --> */}
      <Viewer
        fileUrl="/pedal.pdf"
        plugins={[zoomPluginInstance]}
        defaultScale={SpecialZoomLevel.PageFit}
      />
    </div>
  );

  return (
    <>
      <button onClick={() => setShown(true)} className="bg-red-500">
        Open modal
      </button>
      {shown && ReactDOM.createPortal(modalBody(), document.body)}
    </>
  );
};

export default PDFModal;
