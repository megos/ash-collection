import { useEffect, useRef } from 'react'

export const Dialog: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const ref = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (open) {
      if (!ref.current?.hasAttribute('open')) {
        ref.current?.showModal()
      }
    } else {
      ref.current?.close()
    }
  }, [open])

  return (
    <dialog ref={ref}>
      このアプリは以下の著作物を改変して利用しています。
      <br />
      宅地内降灰指定置場、鹿児島市、
      <a href="https://creativecommons.org/licenses/by/4.0/deed.ja" target="_blank" rel="noreferrer">
        CCBY4.0
      </a>
      <button type="button" onClick={onClose}>
        close
      </button>
    </dialog>
  )
}
