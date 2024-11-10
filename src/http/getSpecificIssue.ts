import axios from "axios";

type IssueType = {
  user: {
    login: string;
  };
  title: string;
  created_at: Date;
  comments: number;
  body: string;
  html_url: string;
}

export async function getSpecificIssue(issueNumber: string | undefined): Promise<IssueType> {
  if(issueNumber == undefined) {
    throw new Error("Issue not found")
  }

  await new Promise(resolve => setTimeout(resolve, 3000))

  const response = await axios.get(`https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${issueNumber}`)
  const { data } = response

  return data
}