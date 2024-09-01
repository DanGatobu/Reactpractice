import React from 'react'

interface AlartProps {
    children: React.ReactNode
    onClose: () => void
}

const Alart = ( {children,onClose}:AlartProps) => {
  return (
    <div className="alert alert-secondary  alert-dismissible fade show" role="alert">
        {children}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
    </div>
  )
}

export default Alart