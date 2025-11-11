import { useEffect } from 'react'

const useTitle = title => {
  useEffect(() => {
    document.title = `UPTD Puskesmas Garuda | ${title}`
  }, [title])
}

export default useTitle
