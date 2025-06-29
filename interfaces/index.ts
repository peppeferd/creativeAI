interface PostPrompt {
  command: string
  style: string
}
interface Post {
  data: string | undefined
}

interface Style {
  label: string
  value: string
}

interface Marito {
  valore: number
}

interface Due {
  name: string
  subid: string
  email: string
  images: string[]
}

interface Profile {
  uid: string
  credits: number
}
