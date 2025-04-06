import { useRouter } from 'next/router'  // Usage: Page router

export default function BackButton() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.back()}>
      Back
    </button>
  )
}