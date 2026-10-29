import { useEffect } from 'react'
import { useLocation } from 'react-router'
import settings from '../data/settings.json'

export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    if (!settings.enableAnalytics || !settings.analyticsId) {
      return
    }

    if (!window.gtag) {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${settings.analyticsId}`
      document.head.appendChild(script)

      window.dataLayer = window.dataLayer || []
      window.gtag = function () {
        window.dataLayer.push(arguments)
      }

      window.gtag('js', new Date())
      window.gtag('config', settings.analyticsId, {
        send_page_view: false
      })
    }

    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      page_location: window.location.href
    })
  }, [location.pathname, location.search])

  return null
}
