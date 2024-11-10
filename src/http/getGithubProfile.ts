import axios from "axios";

type getGithubProfileType = {
  name: string;
  company: string | null;
  avatar_url: string;
  login: string;
  followers: number;
  html_url: string;
}

export async function getGithubProfile(): Promise<getGithubProfileType> {
  // await new Promise(resolve => setTimeout(resolve,3000))

  const response = await axios.get('https://api.github.com/users/ngustavo80')

  const { data } = response

  return data
}