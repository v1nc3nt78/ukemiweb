const page = document.querySelector(".page")
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)")

if (page && !prefersReducedMotion.matches && hasFinePointer.matches) {
  let frameId = 0

  const resetPosition = () => {
    document.documentElement.style.setProperty("--pointer-x", "0px")
    document.documentElement.style.setProperty("--pointer-y", "0px")
  }

  window.addEventListener(
    "pointermove",
    (event) => {
      if (frameId) window.cancelAnimationFrame(frameId)

      frameId = window.requestAnimationFrame(() => {
        const x = ((event.clientX / window.innerWidth) - 0.5) * 8
        const y = ((event.clientY / window.innerHeight) - 0.5) * 8

        document.documentElement.style.setProperty("--pointer-x", `${x.toFixed(1)}px`)
        document.documentElement.style.setProperty("--pointer-y", `${y.toFixed(1)}px`)
      })
    },
    { passive: true },
  )

  window.addEventListener("blur", resetPosition)
}
