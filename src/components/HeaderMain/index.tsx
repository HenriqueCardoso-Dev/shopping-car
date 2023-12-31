import HeartBold from "../../../public/assets/HeartBold";
import NotificationBold from "../../../public/assets/NotificationBold";
import SettingsBold from "../../../public/assets/SettingsBold";
import Logo from "../../../public/assets/logo";
import SearchFilter from "../../../public/assets/searchFilter";
import SearchLinear from "../../../public/assets/searchLinear";
import IconButton from "../IconButton";
import PerfilPhoto from "../../../public/assets/img/perfil-fake-image.png";
import Image from "next/image";

export default function HeaderMain() {
  return (
    <div className="flex w-full py-10 px-14 items-center justify-between border-b">
      <div className="flex w-full">
        <Logo classname="flex-none"/>

        <div className="flex border-2 rounded-full py-2 w-full max-w-lg ms-16">
          <SearchLinear size={20} classname="mx-4"/>
          <input type="search" placeholder="Search something here" className="flex-1 outline-0 font-medium"/>
          <SearchFilter classname="mx-5"/>
        </div>

      </div>

      <div className="flex items-center">
        <IconButton icon={<HeartBold/>}/>
        <IconButton icon={<NotificationBold/>}/>
        <IconButton icon={<SettingsBold />} />
        <Image src={PerfilPhoto} alt={""} className="object-cover h-11 w-11"/>
      </div>
    </div>
  );
}
