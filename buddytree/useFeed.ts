import useSWR from 'swr'

export default function useFeed() {
  const fetcher = (url: string) =>
    fetch(url).then((res) => res.json())
  const { data, error } = useSWR(
    '/api/feeds',
    fetcher
  )

  return {
    feedData: data,
    isLoading: !error && !data,
    isError: error,
  }
}
