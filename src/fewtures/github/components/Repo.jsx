const Repo = ({ repos }) => {
  return (
  <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
     {repos.map((repo) => (
  <a
    key={repo.id}
    href={repo.html_url}
    target="_blank"
    rel="noreferrer"
    className="flex flex-col gap-1 px-4 py-3 bg-zinc-100 rounded-lg shadow-sm hover:shadow-md"
  >
    <p className="font-semibold text-zinc-900">{repo.name}</p>
    <p className="text-sm text-zinc-500">{repo.description || "No description"}</p>
    <span className="flex gap-4 text-xs text-zinc-400">
      <p>⭐ {repo.stargazers_count}</p>
      <p>🔤 {repo.language || "Unknown"}</p>
    </span>
  </a>
))}
    </div>
  )
}

export default Repo