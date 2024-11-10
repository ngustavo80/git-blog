import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SearchIssue } from "../http/searchIssue";

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  const {mutateAsync: searchIssue} = useMutation({
    mutationFn: SearchIssue,
    onError() {
      alert("Não foi possível realizar a busca")
    },   
    onSuccess(data) {
      queryClient.setQueryData(['issues'], data)
    },
  })

  function handleSearchIssues(data: SearchFormInput) {
    searchIssue(data.query)
  }

  return (
    <form onSubmit={handleSubmit(handleSearchIssues)} className="flex gap-2">
      <input 
        {...register('query')}
        placeholder="Buscar conteúdo" 
        type="text"
        className="w-full p-4 rounded-lg bg-base-input border border-base-border placeholder:text-base-label"  
      />
      <button 
        type="submit" 
        className="py-4 px-8 rounded-lg bg-base-input border border-blue text-blue disabled:opacity-30 "
        disabled={isSubmitting}
      >
        <MagnifyingGlass size={20} />
      </button>
    </form>
  )
}