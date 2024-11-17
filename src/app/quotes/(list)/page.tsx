'use client'

import { QuoteCard } from '@/app/quotes/components/quote-card'
import { useInfiniteQuotes } from '@/app/quotes/hooks/use-infinite-quotes'
import useFavoritesStorage from '../hooks/use-FavoritesStorage'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react'

export default function QuotesPage() {
  const quotes = useInfiniteQuotes()
  const { favorites, toggleFavorite } = useFavoritesStorage()

  // 표시할 명언의 개수를 상태로 관리
  const [visibleQuotes, setVisibleQuotes] = useState(10)

  const loadMoreQuotes = () => {
    // 새로운 데이터를 불러올 때마다 visibleQuotes를 10개씩 늘려서 추가
    setVisibleQuotes((prev) => prev + 10)
  }

  return (
    <>
      <InfiniteScroll
        dataLength={visibleQuotes} // 현재 표시된 명언의 개수
        next={loadMoreQuotes} // 추가 데이터를 불러오는 함수
        hasMore={quotes.length > visibleQuotes} // 더 이상 로드할 데이터가 있는지 확인
        loader={<h4>Loading...</h4>} // 로딩 중 표시할 컴포넌트
        endMessage={<p></p>} // 더 이상 데이터가 없을 때 메시지
      >
        {quotes.slice(0, visibleQuotes).map((quote) => (
          <QuoteCard
            key={quote.id}
            quote={quote.quote}
            author={quote.author}
            isFavorite={!!favorites[quote.id]}
            onFavorite={() => toggleFavorite(quote)}
          />
        ))}
      </InfiniteScroll>
    </>
  )
}
