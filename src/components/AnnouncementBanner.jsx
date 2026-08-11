import React, { useEffect, useLayoutEffect, useRef, useState } from "react"

// Persist only for this JS session (resets on hard refresh)
let sessionDismissed = false

const AnnouncementIcon = ({ type }) => {
  const iconType = type?.toLowerCase()

  if (iconType === "none") return null

  const paths = {
    error: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 9l6 6M15 9l-6 6" />
      </>
    ),
    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 10.75v6M12 7.25h.01" />
      </>
    ),
    success: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),
    warning: (
      <>
        <path d="M12 3 2.75 20h18.5L12 3Z" />
        <path d="M12 9v5M12 17h.01" />
      </>
    ),
  }

  return (
    <svg
      className={`announcement-icon announcement-icon-${iconType || "info"}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {paths[iconType] || paths.info}
    </svg>
  )
}

/**
 * Dismissible banner that:
 *  - shows unless dismissed in this SPA session (refresh brings it back)
 *  - writes its own height to CSS var --banner-height when visible
 *
 * Props:
 *  - enabled (boolean): master toggle to show/hide
 *  - iconType: "info", "warning", "success", "error", "megaphone", or "none"
 *  - announcementLabel (string)
 *  - message (string)
 *  - ctaText (string, optional)
 *  - ctaHref (string, optional)
 */
const AnnouncementBanner = ({
  enabled = true,
  iconType = "info",
  announcementLabel,
  message,
  ctaText,
  ctaHref,
}) => {
  const ref = useRef(null)
  const lastY = useRef(0)
  const rafId = useRef(0)
  const [dismissed, setDismissed] = useState(sessionDismissed)
  const [visible, setVisible] = useState(enabled && !sessionDismissed)

  // If the parent toggles `enabled`, sync visibility (but keep session dismissal logic)
  useLayoutEffect(() => {
    if (!enabled) {
      setVisible(false)
    } else if (enabled && !sessionDismissed) {
      setVisible(true)
    }
  }, [enabled])

  // Hide while scrolling down, but only show again at the top of the page.
  useEffect(() => {
    if (!enabled || dismissed) return undefined

    const getScrollY = () =>
      Math.max(0, window.scrollY || window.pageYOffset || 0)

    lastY.current = getScrollY()
    setVisible(lastY.current <= 4)

    const onScroll = () => {
      cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        const y = getScrollY()
        const delta = y - lastY.current

        if (y <= 4) {
          setVisible(true)
        } else if (delta > 8) {
          setVisible(false)
        }

        lastY.current = y
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(rafId.current)
    }
  }, [dismissed, enabled])

  // Measure and export CSS var for layout offsets
  useLayoutEffect(() => {
    const apply = () => {
      const h = visible && ref.current ? ref.current.offsetHeight : 0
      document.documentElement.style.setProperty("--banner-height", `${h}px`)
    }
    apply()
    window.addEventListener("resize", apply)
    return () => {
      window.removeEventListener("resize", apply)
      // clear on unmount
      document.documentElement.style.setProperty("--banner-height", "0px")
    }
  }, [visible])

  if (!enabled || dismissed) return null

  return (
    <div
      ref={ref}
      className={`announcement-banner ${visible ? "" : "is-hidden"}`}
      role="region"
      aria-label="Site announcement"
    >
      <div className="announcement-inner">
        <div className="announcement-text">
          <AnnouncementIcon type={iconType} />
          <span>
            {announcementLabel && (
              <>
                <strong className="announcement-label">
                  {announcementLabel}
                </strong>{" "}
              </>
            )}
            <span className="announcement-message">{message}</span>{" "}
            {ctaHref && ctaText && (
              <a
                className="announcement-link"
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ctaText}{" "}
                <svg
                  className="announcement-arrow"
                  viewBox="0 0 20 14"
                  aria-hidden="true"
                >
                  <path d="M1 7h17M12 1l6 6-6 6" />
                </svg>
              </a>
            )}
          </span>
        </div>
        <button
          type="button"
          className="announcement-close"
          aria-label="Dismiss announcement"
          onClick={() => {
            sessionDismissed = true // persists until full refresh
            setDismissed(true)
            setVisible(false)
            document.documentElement.style.setProperty("--banner-height", "0px")
          }}
        >
          <svg
            className="announcement-close-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default AnnouncementBanner
