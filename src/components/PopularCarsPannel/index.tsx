import { intCarProps } from "@/interfaces"
import CarPhoto1 from "../../../public/assets/img/car-1.png"
import CarPhoto2 from "../../../public/assets/img/car-2.png"
import CarPhoto3 from "../../../public/assets/img/car-3.png"
import CarCard from "../carCard"

export default function PopularCarsPannel() {

  const topPopularCars :intCarProps[] = [
    {
      name: "Koenigsegg",
      type: "Sport",
      transmission: "Manual",
      seats: "2",
      fuelTank: "90L",
      pricePerDay: "99.00",
      photo: CarPhoto1.src,
      isFavorite: true
    },
    {
      name: "Nissan GT - R",
      type: "Sport",
      transmission: "Manual",
      seats: "2",
      fuelTank: "80L",
      pricePerDay: "80.00",
      photo: CarPhoto2.src,
      isFavorite: false
    },
    {
      name: "Rolls - Royce",
      type: "Sedan",
      transmission: "Manual",
      seats: "4",
      fuelTank: "70L",
      pricePerDay: "96.00",
      photo: CarPhoto3.src,
      isFavorite: true
    },
    {
      name: "Nissan GT - R",
      type: "Sport",
      transmission: "Manual",
      seats: "2",
      fuelTank: "90L",
      pricePerDay: "80.00",
      photo: CarPhoto2.src,
      isFavorite: false
    },
  ]

  return (
    <section>
      <h2 className="text-base text-[#90A3BF] font-semibold ml-6 mb-6">Popular Cars</h2>
      <div className="flex justify-between">
        {topPopularCars && topPopularCars.map((car, index) => {
          return <CarCard
            name={car.name}
            fuelTank={car.fuelTank}
            type={car.type}
            photo={car.photo}
            pricePerDay={car.pricePerDay}
            seats={car.seats}
            transmission={car.transmission}
            isFavorite={car.isFavorite}
            key={index}
          />
        })}
      </div>
    </section>
  )
}