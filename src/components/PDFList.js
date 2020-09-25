import React, { useState, useRef, useEffect } from 'react'
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
        height: '100vh',
        display: 'flex',
      }}
    >
      <div id="placeholderWrapper" style={{ height: '100vh' }} />
      <div id="pdfWrapper" style={{ width: '90vw' }} ref={pdfWrapper}>
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
