import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { getIssues } from "../http/getIssues"
import { Post } from "./Post"
import { SearchForm } from "./SearchForm"
import { PulseLoader } from "react-spinners"

export function Issues() {
  const { data, isLoading } = useQuery({
    queryKey: ['issues'],
    queryFn: () => getIssues(),
  })

  if(isLoading) {
    return (
      <div className="flex items-center justify-center mt-10">
        <PulseLoader color="#3A536B" speedMultiplier={0.7} />
      </div>
    )
  }

  return (
    <>
      <section className="mt-16 space-y-3">
        <div className="flex justify-between">
          <span className="text-lg text-base-subtitle">Publicações</span>
          <span className="text-sm text-base-span">{data?.total_count} publicações</span>
        </div>
        <SearchForm />
      </section>

      <section className="grid grid-cols-2 gap-8 mt-12 mb-52">
        {data?.items.map(issue => {
          return (
            <Link 
              key={issue.id} 
              to={`post/${issue.number}`}
            >
              
              <Post 
                title={issue.title} 
                body={issue.body} 
              />

            </Link>
          )
        })}
      </section>
    </>
  )
}