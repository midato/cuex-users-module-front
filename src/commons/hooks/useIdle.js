import { useState, useEffect } from 'react'
import createActivityDetector from 'activity-detector'

export const useIdle = (options) => {
  const [idle, setIdle] = useState(false)

  useEffect(() => {
    const activityDetector = createActivityDetector(options)
    activityDetector.on('idle', () => setIdle(true))
    activityDetector.on('active', () => setIdle(false))

    return () => activityDetector.stop()
  }, [])

  return {
    userIsActive: !idle,
  }
}
