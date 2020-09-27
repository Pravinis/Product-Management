import React, { useState, useRef, useEffect } from 'react'
import '../App.css'
import throttle from 'lodash/throttle'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

export default function PDFList({ data, onDocumentLoadSuccess, pageNumber }) {
  const [initialWidth, setInitialWidth] = useState(null)
  const pdfWrapper = useRef(null)

  const setPdfSize = () => {
    if (pdfWrapper && pdfWrapper.current) {
      setInitialWidth(pdfWrapper.current.getBoundingClientRect().width)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', throttle(setPdfSize, 3000))
    setPdfSize()
    return () => {
      window.removeEventListener('resize', throttle(setPdfSize, 3000))
    }
  }, [])

  return (
    <div
      id="row"
      style={{
        height: '5vh',
        display: 'flex',
      }}
    >
      <button type="button" className="task-table-column" onClick={pdfWrapper}>
        Generate Pdf
      </button>
      <div id="placeholderWrapper" style={{ height: '5vh' }} />
      <div id="pdfWrapper" style={{ width: '9vw' }} ref={pdfWrapper}>
        <Document
          file={data}
          onLoadSuccess={onDocumentLoadSuccess}
          noData=""
          loading=""
        >
          <Page pageNumber={pageNumber} loading="" width={initialWidth} />
        </Document>
      </div>
    </div>
  )
}
