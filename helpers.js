export const handleError = (res, e) => {
  res.status(500).json(e)
}
