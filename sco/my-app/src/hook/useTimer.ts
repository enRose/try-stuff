import { useEffect } from "react"

const useTimer = (trigger: any, duration:any, setDuration: any, setTrigger: any) => {
  useEffect(() => {
    if (duration > 0) {
      setTimeout(() => {
        setDuration(duration - 1)
      }, 1000)
    }

    if (duration === 0 && trigger) {
      setTrigger(false)
    }
  }, [duration, trigger])
}

export default useTimer