export async function fetchAllJunctions() {
  const response = await fetch('http://localhost:5001/junctions', {
    cache: 'no-store',
  })

  if (!response.ok) {
    console.log('Failed to fetch data')
    throw new Error('Failed to fetch data')
  }

  return response.json()
}
