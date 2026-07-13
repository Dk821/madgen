import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const GRID = 44
const TRAIL_LEN = 6
const GLOW_RADIUS = 22
const IDLE_COUNT = 4
const GRID_LINE = 'rgba(16,17,20,0.07)'
const EFFECT_RGB = '16,17,20'

export default function GridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current!
    const hero = document.getElementById('hero')!
    const ctx = canvas.getContext('2d')!

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0, h = 0, cols = 0, rows = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const trail: { col: number; row: number }[] = []
    let mouseCol = -1, mouseRow = -1
    let lastMoveAt = 0
    let idleCells: { col: number; row: number; start: number; dur: number }[] = []
    let animId = 0

    function randomIdleCell() {
      return {
        col: Math.floor(Math.random() * cols),
        row: Math.floor(Math.random() * rows),
        start: performance.now() + Math.random() * 3200,
        dur: 1300 + Math.random() * 1300,
      }
    }

    function seedIdle() {
      idleCells = Array.from({ length: IDLE_COUNT }, randomIdleCell)
    }

    function resize() {
      const rect = hero.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = Math.max(1, Math.round(w * dpr))
      canvas.height = Math.max(1, Math.round(h * dpr))
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(w / GRID) + 1
      rows = Math.ceil(h / GRID) + 1
      seedIdle()
    }

    function fillCell(col: number, row: number, alpha: number, glow?: boolean) {
      if (alpha <= 0) return
      const x = col * GRID, y = row * GRID
      ctx.save()
      if (glow) {
        ctx.shadowColor = `rgba(${EFFECT_RGB},${(alpha * 0.9).toFixed(2)})`
        ctx.shadowBlur = GLOW_RADIUS
      }
      ctx.fillStyle = `rgba(${EFFECT_RGB},${alpha.toFixed(2)})`
      ctx.fillRect(x + 1, y + 1, GRID - 2, GRID - 2)
      ctx.restore()
    }

    function draw() {
      animId = requestAnimationFrame(draw)
      if (theme !== 'light') {
        if (w) ctx.clearRect(0, 0, w, h)
        return
      }
      ctx.clearRect(0, 0, w, h)

      ctx.strokeStyle = GRID_LINE
      ctx.lineWidth = 1
      for (let c = 0; c <= cols; c++) {
        ctx.beginPath()
        ctx.moveTo(c * GRID + 0.5, 0)
        ctx.lineTo(c * GRID + 0.5, h)
        ctx.stroke()
      }
      for (let r = 0; r <= rows; r++) {
        ctx.beginPath()
        ctx.moveTo(0, r * GRID + 0.5)
        ctx.lineTo(w, r * GRID + 0.5)
        ctx.stroke()
      }

      const now = performance.now()
      const idle = !reduceMotion && (now - lastMoveAt > 900)
      if (idle) {
        idleCells.forEach((cell, i) => {
          const elapsed = now - cell.start
          if (elapsed < 0) return
          if (elapsed > cell.dur) { idleCells[i] = randomIdleCell(); return }
          const p = elapsed / cell.dur
          fillCell(cell.col, cell.row, Math.sin(p * Math.PI) * 0.28)
        })
      }

      trail.forEach((cell, i) => {
        fillCell(cell.col, cell.row, (1 - i / TRAIL_LEN) * 0.5, true)
      })
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      const c = Math.floor((e.clientX - rect.left) / GRID)
      const r = Math.floor((e.clientY - rect.top) / GRID)
      if (c !== mouseCol || r !== mouseRow) {
        mouseCol = c
        mouseRow = r
        trail.unshift({ col: c, row: r })
        if (trail.length > TRAIL_LEN) trail.length = TRAIL_LEN
      }
      lastMoveAt = performance.now()
    }

    const onMouseLeave = () => {
      mouseCol = -1
      mouseRow = -1
      trail.length = 0
    }

    hero.addEventListener('mousemove', onMouseMove)
    hero.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', resize)
    resize()
    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      hero.removeEventListener('mousemove', onMouseMove)
      hero.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', resize)
    }
  }, [theme])

  return (
    <canvas ref={canvasRef} className="grid-bg-canvas" id="gridBgCanvas" aria-hidden="true" />
  )
}
