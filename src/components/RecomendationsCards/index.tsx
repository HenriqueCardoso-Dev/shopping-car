import SecondaryBackground from "../../../public/assets/img/secondary-background.png";
import PrimaryBackground from "../../../public/assets/img/primary-background.png";

import ButttonDefault from "../ButtonDefault";

import Image from "next/image";

import CarPhoto1 from "../../../public/assets/img/car-1.png"
import CarPhoto2 from "../../../public/assets/img/car-2.png"


export default function RecomendationsCards() {
  return (
    <section className="w-full flex justify-between max-w-[1312px] m-auto">
      <div
        style={{
          backgroundImage: `url(${PrimaryBackground.src})`,
          height: "360px", width: "640px",
          backgroundSize: 'cover',
        }}
      >
        <div
          className="flex flex-col text-white p-6 pb-0"
        >
          <h1 className="text-[32px] mb-[16px]  max-w-[272px]">
            The Best Platform
            for Car Rental
          </h1>

          <span className="text-base max-w-[284px] break-words tracking-[.32px] font-medium mb-[16px]">Ease of doing a car rental safely and reliably. Of course at a low price.</span>
          <ButttonDefault classname="rounded w-[120px] h-[44px] text-base" content="Rental Car" />
        </div>
        <div className="flex justify-center">
          <Image src={CarPhoto1.src} alt={""} width={406} height={116} className="object-cover"/>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${SecondaryBackground.src})`,
          height: "360px", width: "640px",
          backgroundSize: 'cover',
        }}
      >
        <div
          className="flex flex-col text-white p-6 pb-0"
        >
          <h1 className="text-[32px] mb-[16px] max-w-[272px]">
            Easy way to rent a car at a
            low price
          </h1>

          <span className="text-base max-w-[284px] break-words tracking-[.32px] font-medium mb-[16px]">
            Providing cheap car rental services and safe and comfortable facilities.
          </span>
          <ButttonDefault classname="rounded w-[120px] h-[44px] text-base" content="Rental Car" theme="primary-light"/>
        </div>
        <div className="flex justify-center">
          <Image src={CarPhoto2.src} alt={""} width={340} height={108} className="object-cover"/>
        </div>
      </div>
    </section>
  )
}
