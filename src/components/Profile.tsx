import { ArrowSquareOut, Building, GithubLogo, Users } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { getGithubProfile } from "../http/getGithubProfile";

export function Profile() {
  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: getGithubProfile,
    staleTime: Infinity
  })

  return (
    <section>
      <div className="h-[212px] flex gap-8 bg-base-profile px-10 py-8 rounded-lg mt-[-5rem] relative">
        <img src={data?.avatar_url} alt="" className="size-36 rounded-lg" />
        <div className="w-full">
          <div className="flex justify-between items-center mt-2 mb-2">
            <h1 className="text-base-title text-2xl">{data?.name}</h1>
            <a target="_blank" href={data?.html_url} className="flex items-center justify-center gap-2 text-blue text-xs font-bold">
              GITHUB
              <ArrowSquareOut size={15} weight="bold" />
            </a>
          </div>

          <span className="text-base-text text-clip">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo adipisci, expedita ipsam minima maiores error, 
            repellendus
          </span>

          <div className="flex h-[50px] items-end gap-6">
            
            <div className="flex items-center gap-1">
              <GithubLogo size={18} weight="bold" className="text-base-label" />
              <span className="text-base-subtitle">{data?.login}</span>
            </div>

            <div className="flex items-center gap-1">
              <Building size={18} weight="fill" className="text-base-label" />
              <span className="text-base-subtitle">{data?.company == null ? "Não informado" : data?.company}</span>
            </div>

            <div className="flex items-center gap-1">
              <Users size={18} weight="fill" className="text-base-label" />
              <span className="text-base-subtitle">{data?.followers} seguidores</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}