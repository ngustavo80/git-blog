import axios from "axios";

type IssuesType = {
  total_count: number,
  items: {
    number: number,
    title: string,
    comments: number,
    created_at: Date,
    id: number;
    body: string,
    user: {
      login: string,
    }
  }[],
}

export async function getIssues(): Promise<IssuesType> {
  await new Promise(resolve => setTimeout(resolve, 3000))

  const response = await axios.get('https://api.github.com/search/issues?q=repo:rocketseat-education/reactjs-github-blog-challenge')

  const { data } = response

  return data
}