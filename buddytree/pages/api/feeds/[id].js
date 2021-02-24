import { feeds } from '../../../data'

export default function feedsHandler(
  { query: { id } },
  res
) {
  const filtered = feeds.filter(
    (p) => p.id.toString() === id
  )

  // Feed with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({
      message: `Feed with id: ${id} not found.`,
    })
  }
}
