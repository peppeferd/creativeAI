export async function generatePost(postPrompt: PostPrompt) {
  return await fetch('/api/imagegenerator', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postPrompt),
  })
}

export async function saveImage(postImage: Boh) {
  return await fetch('/api/userimages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postImage),
  })
}
