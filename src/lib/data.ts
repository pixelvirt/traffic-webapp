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

export async function getCameras({ junctionId }: { junctionId: string }) {
  const res = await fetch(`${backend_url}/junctions/${junctionId}/cameras`, {
    next: {
      revalidate: 3600,
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getViolations() {
  const res = await fetch(`${backend_url}/violations`, {
    next: {
      revalidate: 3600,
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
