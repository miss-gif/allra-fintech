import { parseAsInteger, parseAsString, useQueryState } from 'nuqs'

export const useProductsSearchParams = () => {
  const [page, setPage] = useQueryState(
    'page',
    parseAsInteger.withDefault(1).withOptions({
      history: 'push',
    })
  )
  const [q, setQ] = useQueryState(
    'q',
    parseAsString.withDefault('').withOptions({
      history: 'push',
    })
  )

  const handleTermChange = (term: string) => {
    if (q === term) return
    setPage(1)
    setQ(term)
  }

  return {
    page,
    setPage,
    term: q,
    handleTermChange,
  }
}
