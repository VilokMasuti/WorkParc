// GitHub.jsx
import { useState } from "react"
import ProfileCard from "./components/ProfileCard"
import Repo from "./components/Repo"
import Searchbox from "./components/Searchbox"

const GitHub = () => {
  const [username, setUsername] = useState("")
  const [data, setData] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async () => {
    if (!username.trim()) return

    setLoading(true)
    setError(null)
    setData(null)
    setRepos([])

    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`)
      if (!userRes.ok) throw new Error("User not found")
      const user = await userRes.json()

      const repoRes = await fetch(`${user.repos_url}?sort=stars&per_page=6`)
      const repoData = await repoRes.json()

      setData(user)
      setRepos(Array.isArray(repoData) ? repoData : [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    // Rule: min-h-screen + generous padding = room to breathe
    <main className="min-h-screen bg-zinc-50 shadow-2xl px-4 py-16 flex flex-col text-zinc-950 items-center gap-10">

      {/* Header — hierarchy: big title, soft subtitle */}
      <div className="text-center">
        <h1 className="text-3xl font-bold  text-zinc-950 tracking-tight">
          GitHub Finder
        </h1>
        <p className="text-slate-400 mt-1 text-sm">
          Search any GitHub profile
        </p>
      </div>

      <Searchbox
        username={username}
        setUsername={setUsername}
        onSearch={handleSearch}
      />

      {/* States */}
      {loading && (
        <p className="text-slate-400 text-sm animate-pulse">Searching...</p>
      )}
      {error && (
        // Rule: accent border on left — personality without heavy styling
        <div className="border-l-4 border-red-500 bg-red-950/40 px-4 py-3 rounded-r-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      {data && <ProfileCard data={data} />}
      {repos.length > 0 && <Repo repos={repos} />}
    </main>
  )
}

export default GitHub