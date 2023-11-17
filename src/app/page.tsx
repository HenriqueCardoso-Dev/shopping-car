import FilterPanel from "@/components/FilterPanel";
import PopularCarsPannel from "@/components/PopularCarsPannel";
import RecomendationsCards from "@/components/RecomendationsCards";

export default function Home() {
  return (
    <div>
      <RecomendationsCards />
      <FilterPanel />
      <PopularCarsPannel />
    </div>
  )
}
