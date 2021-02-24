import useSWR from 'swr'
import React, {
  useState,
  useRef,
  useCallback,
} from 'react'

export default function useFeed() {
  const fetcher = (url) =>
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
