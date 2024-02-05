'use server'

const backend_url = process.env.BACKEND_URL

export async function fetchAllJunctions() {
  return await fetch(`${backend_url}/junctions`, {
    cache: 'no-store',
  })
    .then((res) => {
      return res.json()
    })
    .catch((error) => {
      return error
    })
}

export async function addJunction({ junctionName }: { junctionName: string }) {
  fetch(`${backend_url}/junctions`, {
    method: 'POST',
    body: JSON.stringify({
      name: junctionName,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
