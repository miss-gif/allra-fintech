'use client'
import { QuoteCard } from '@/app/quotes/components/quote-card'
import useFavoritesStorage from '../hooks/use-FavoritesStorage'

export default function FavoriteQuotesPage() {
  const { favorites, toggleFavorite } = useFavoritesStorage()

  return (
    <div>
      <h1
        className={'mb-4 text-3xl font-bold italic text-secondary-foreground'}
      >
        My Favorite
      </h1>
      <ul>
        {Object.values(favorites).map((quote) => (
          <QuoteCard
            key={quote.id}
            quote={quote.quote}
            author={quote.author}
            isFavorite={!!favorites[quote.id]}
            onFavorite={() => toggleFavorite(quote)}
          />
        ))}
      </ul>
    </div>
  )
}
