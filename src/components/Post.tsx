type PostProps = {
  title: string;
  body: string;
}

export function Post({ body, title }: PostProps) {
  return (
    <div className="bg-base-post p-8 rounded-lg h-64 overflow-hidden text-ellipsis hover:outline outline-base-title">
      <div className="flex justify-between gap-4">
        <h2 className="flex-1 text-base-title text-xl">{title}</h2>
        <span className="text-base-span text-sm">Há 1 dia</span>
      </div>

      <p  className="mt-4 text-base-text text-ellipsis">
        {body}
      </p>
    </div>
  )
}