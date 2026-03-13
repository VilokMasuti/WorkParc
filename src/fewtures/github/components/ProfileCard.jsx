const ProfileCard = ({ data }) => {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm px-5 py-5 rounded-xl bg-zinc-200 shadow-md">
      
      <img
        src={data.avatar_url}
        alt={data.login}
        className="w-16 h-16 rounded-full object-cover"
      />

      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-xl text-zinc-900">{data.name}</h1>
        <p className="text-sm text-zinc-500">@{data.login}</p>
        <p className="text-sm text-zinc-600">{data.bio || "No bio"}</p>
      </div>

      <span className="flex gap-6 text-sm text-zinc-700 font-medium">
        <p>{data.followers} Followers</p>
        <p>{data.following} Following</p>
        <p>{data.public_repos} Repos</p>
      </span>

      <span className="flex flex-col gap-1 text-sm text-zinc-600">
        <p>📍 {data.location || "No location"}</p>
        <a href={data.blog || "#"} target="_blank" className="text-blue-500 underline">
          {data.blog || "No website"}
        </a>
      </span>

    </div>
  )
}

export default ProfileCard