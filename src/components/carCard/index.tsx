import { intCarProps } from "@/interfaces";
import Image from "next/image";
import Hearth from "../../../public/assets/Hearth";
import ButtonDefault from "../ButtonDefault";
import FuelTank from "../../../public/assets/FuelTank";
import Transmission from "../../../public/assets/Transmission";
import Peoples from "../../../public/assets/Peoples";

export default function CarCard(car : intCarProps) {

  return (
    <div className="w-[304px] h-[388px] bg-white rounded-lg p-6 flex flex-col justify-between">
      <div className="flex justify-between">
        <p className="text-xl font-bold">
          {car.name}
          <br />
          <span className="text-sm text-[#90A3BF]">{ car.type }</span>
        </p>

        <Hearth isActive={car.isFavorite} classname="cursor-pointer"/>
      </div>

      <Image src={car.photo} alt="" width={232} height={72}/>

      <div>
        <div className="flex w-full text-sm font-medium text-[#90A3BF]">
          <div className="flex items-center">
            <FuelTank classname="mr-1.5"/>
            {car.fuelTank}
          </div>
          <div className="flex items-center mx-2">
            <Transmission classname="mr-1.5"/>
            {car.transmission}
          </div>
          <div className="flex items-center">
            <Peoples classname="mr-1.5"/>
            {car.seats}
          </div>
        </div>

        <div className="flex mt-5 justify-between">
          <p className="font-bold text-sm text-[#90A3BF]"><span className="text-xl text-[#000]">${car.pricePerDay}/</span>day</p>
          <ButtonDefault theme="primary" content="Rent Now" classname="rounded text-white text-base !px-6 !py-3"/>
        </div>
      </div>
    </div>
  )
}