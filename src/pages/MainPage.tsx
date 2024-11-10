import { Profile } from "../components/Profile";
import { Issues } from "../components/Issues";

export function MainPage() {
  return (
    <main className="w-[864px] m-auto">
      <Profile />
      <Issues />
    </main>
  )
}