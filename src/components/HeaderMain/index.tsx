import Logo from "../../../public/assets/logo";
import SearchFilter from "../../../public/assets/searchFilter";
import SearchLinear from "../../../public/assets/searchLinear";

export default function HeaderMain() {
  return (
    <div className="flex w-100 py-10 px-14">
      <Logo />

      <div className="flex border-2 rounded-full py-2">
        <SearchLinear size={20} classname="mx-4"/>
        <input type="search" placeholder="Search something here" />
        <SearchFilter />
      </div>
    </div>
  );
}
