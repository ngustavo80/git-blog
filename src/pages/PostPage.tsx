import { Link, useParams } from "react-router-dom"
import { getSpecificIssue } from "../http/getSpecificIssue"
import { 
  ArrowSquareOut, 
  CalendarBlank, 
  CaretLeft, 
  ChatCircle, 
  GithubLogo 
} from "@phosphor-icons/react"
import { useQuery } from "@tanstack/react-query"
import Markdown from "react-markdown"
import remarkGfm from 'remark-gfm'

export function PostPage() {
  const { issueNumber } = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['specificIssue'],
    queryFn: () => getSpecificIssue(issueNumber),
  })

  if(isLoading) {
    return (
      <main className="w-[864px] m-auto">
        <section className="flex items-center justify-center mt-8">
          <h1>Carregando</h1>
        </section>
      </main>
    )
  }


  return (
    <main className="w-[864px] m-auto">
      <section>
        <div className="flex gap-8 bg-base-profile px-10 py-8 rounded-lg mt-[-5rem] relative">
          <div className="w-full">
            <div className="flex justify-between items-center mt-2 mb-5">
              <Link to="/" className="flex items-center justify-center gap-2 text-blue text-xs font-bold hover:underline">
                <CaretLeft size={15} /> VOLTAR
              </Link>
              <a target="_blank" href={data?.html_url} className="flex items-center justify-center gap-2 text-blue text-xs font-bold hover:underline">
                VER NO GITHUB
                <ArrowSquareOut size={15} weight="bold" />
              </a>
            </div>

            <h1 className="text-2xl text-base-title">{data?.title}</h1>

            <div className="flex mt-2 gap-6">
              
              <div className="flex items-center gap-1">
                <GithubLogo size={18} weight="bold" className="text-base-label" />
                <span className="text-base-label">{data?.user.login}</span>
              </div>

              <div className="flex items-center gap-1">
                <CalendarBlank size={18} weight="fill" className="text-base-label" />
                <span className="text-base-label">Há 1 dia</span>
              </div>

              <div className="flex items-center gap-1">
                <ChatCircle size={18} weight="fill" className="text-base-label" />
                <span className="text-base-label">{data?.comments} comentários</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 mb-10 px-3">
        <Markdown remarkPlugins={[remarkGfm]}>
          {data?.body}
        </Markdown>
      </section>
    </main>
  )
}