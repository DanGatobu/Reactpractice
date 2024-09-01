import React from 'react'

interface btnProps {
    children: React.ReactNode
    onClicck: () => void
}



const Btn = ( {children,onClicck}: btnProps) => {
  return (
    <button type="button" onClick={onClicck}  className="btn btn-success">{children}
    </button>
  )
}

export default Btn