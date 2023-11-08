import Swap from "../../../public/assets/Swap";

export default function FilterPanel() {
  return (
    <section className="my-8 flex justify-between items-center">
      <div className="py-6 px-11 bg-white max-w-max rounded-lg">
        <span>
          <input type="radio" name="filter" id="filter-01" className="mr-2 cursor-pointer"/>
          <label htmlFor="filter-01" className="cursor-pointer font-semibold">Pick - Up</label>
        </span>
          
        <div className="filters text-base mt-3 flex">
          <fieldset className="pr-8 mr-8 border-r-2">
            <label htmlFor="locations-pickup" className="font-semibold">Locations</label>
            <br />
            <select id="locations-pickup" className="text-xs font-medium text-[#90A3BF] outline-none cursor-pointer">
              <option disabled selected>select your city</option>
            </select>
          </fieldset>

          <fieldset className="pr-8 mr-8 border-r-2">
            <label htmlFor="date-pickup" className="font-semibold">Date</label>
            <br />
            <select id="date-pickup" className="text-xs font-medium text-[#90A3BF] outline-none cursor-pointer">
              <option disabled selected>select your date</option>
            </select>
          </fieldset>

          <fieldset className="pr-8">
            <label htmlFor="time-pickup" className="font-semibold">Time</label>
            <br />
            <select id="time-pickup" className="text-xs font-medium text-[#90A3BF] outline-none cursor-pointer">
              <option disabled selected>select your time</option>
            </select>
          </fieldset>
        </div>
      </div>
    
      <button className="swap-button p-4 bg-[#3563E9] rounded-lg h-[60px]">
        <Swap/>
      </button>

      <div className="py-6 px-11 bg-white max-w-max rounded-lg">
        <span>
          <input type="radio" name="filter" id="filter-02" className="mr-2 cursor-pointer"/>
          <label htmlFor="filter-02" className="cursor-pointer font-semibold">Drop - Off</label>
        </span>
          
        <div className="filters text-base mt-3 flex">
          <fieldset className="pr-8 mr-8 border-r-2">
            <label htmlFor="locations-dropoff" className="font-semibold">Locations</label>
            <br />
            <select id="locations-dropoff" className="text-xs font-medium text-[#90A3BF] outline-none cursor-pointer">
              <option disabled selected>select your city</option>
            </select>
          </fieldset>

          <fieldset className="pr-8 mr-8 border-r-2">
            <label htmlFor="date-dropoff" className="font-semibold">Date</label>
            <br />
            <select id="date-dropoff" className="text-xs font-medium text-[#90A3BF] outline-none cursor-pointer">
              <option disabled selected>select your date</option>
            </select>
          </fieldset>

          <fieldset className="pr-8">
            <label htmlFor="time-dropoff" className="font-semibold">Time</label>
            <br />
            <select id="time-dropoff" className="text-xs font-medium text-[#90A3BF] outline-none cursor-pointer">
              <option disabled selected>select your time</option>
            </select>
          </fieldset>
        </div>
      </div>
    </section>
  )
}