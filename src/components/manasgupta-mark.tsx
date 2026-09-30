export function ManasGuptaMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 576 256"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 0h64v256H0ZM192 0h64v256H192ZM64 0h128v64H64ZM96 64h64v128H96ZM320 0h256v64H320ZM320 64h64v192H320ZM384 192h192v64H384ZM448 128h128v64H448Z"
      />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 288 128"><path fill="currentColor" d="M0 0h32v128H0ZM96 0h32v128H96ZM32 0h64v32H32ZM48 32h32v64H48ZM160 0h128v32H160ZM160 32h32v96H160ZM192 96h96v32H192ZM224 64h64v32H224Z"/></svg>`
}

export { ManasGuptaMark as ChanhDaiMark, ManasGuptaMark as Mark }
