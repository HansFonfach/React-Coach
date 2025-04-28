import React from "react";
import { useParams } from "react-router-dom";

const PdfViewer = () => {
  const { pdfName } = useParams();

  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src={`../../public/docs/${pdfName}`}
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="Vista del PDF"
      />
    </div>
  );
};

export default PdfViewer;
