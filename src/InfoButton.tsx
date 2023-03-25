import { useState } from 'react'
import { Dialog } from './Dialog'

export const InfoButton: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className="info-button" onClick={() => setOpen(true)}>
        このアプリについて
      </button>
      <Dialog open={open} onClose={() => setOpen(false)} />
    </>
  )
}
