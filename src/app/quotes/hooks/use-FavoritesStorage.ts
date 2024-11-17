import { useEffect, useState } from 'react'

interface Quote {
  id: number
  quote: string
  author: string
}

// 로컬스토리지에서 즐겨찾기 데이터를 가져오는 함수
const parseFavoritesFromStorage = (): Record<number, Quote> => {
  try {
    return JSON.parse(localStorage.getItem('favoriteQuotes') || '{}')
  } catch {
    return {}
  }
}

// 즐겨찾기 상태를 관리하는 커스텀 훅
const useFavoritesStorage = () => {
  const [favorites, setFavorites] = useState<Record<number, Quote>>({})

  // 컴포넌트가 처음 마운트될 때 로컬스토리지에서 즐겨찾기 데이터를 가져옴
  useEffect(() => {
    setFavorites(parseFavoritesFromStorage())
  }, [])

  // 명언을 즐겨찾기 토글하는 함수
  const toggleFavorite = (quote: Quote) => {
    // 현재 즐겨찾기 상태를 복사하여 새로운 객체로 생성
    const updatedFavorites = { ...favorites }

    // 명언이 즐겨찾기 목록에 이미 있는지 확인
    if (updatedFavorites[quote.id]) {
      // 이미 있다면 삭제 (즐겨찾기에서 제거)
      delete updatedFavorites[quote.id]
    } else {
      // 없다면 추가 (즐겨찾기 목록에 추가)
      updatedFavorites[quote.id] = quote
    }

    // 상태 업데이트 (React의 상태 변경)
    setFavorites(updatedFavorites)

    // 로컬스토리지에 업데이트된 즐겨찾기 목록 저장
    localStorage.setItem('favoriteQuotes', JSON.stringify(updatedFavorites))
  }

  return { favorites, toggleFavorite }
}

export default useFavoritesStorage
