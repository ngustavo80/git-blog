import axios from "axios"

export async function SearchIssue(query: string) {
  const response = await axios.get('https://api.github.com/search/issues', {
    headers: {
       'Accept': 'application/vnd.github+json',
    },
    params: {
      q: query + ' repo:rocketseat-education/reactjs-github-blog-challenge'
    }
  })

  const { data } = response

  return data
}