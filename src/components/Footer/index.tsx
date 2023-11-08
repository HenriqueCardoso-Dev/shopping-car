import Logo from "../../../public/assets/logo";
import "./style.css"

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-14 px-14">
      <div className="flex justify-between w-full mb-14">
        <aside>
          <Logo classname="flex-none mb-4" />
          <div className="max-w-[292px] text-base font-medium text-[#131313]/[.6] break-words">
            Our vision is to provide convenience and help increase your sales business.
          </div>
        </aside>

        <aside className="flex">
          <ul className="max-w-[152px] mx-14">
            <h1 className="text-xl font-semibold text-[#131313] mb-6">About</h1>

            <li>How it works</li>
            <li>Featured</li>
            <li>Partnership</li>
            <li>Bussiness Relation</li>
          </ul>

          <ul className="max-w-[152px] mx-14">
            <h1 className="text-xl font-semibold text-[#131313] mb-6">Community</h1>

            <li>Events</li>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Invite a friend</li>
          </ul>
          <ul className="max-w-[152px] mx-14">

            <h1 className="text-xl font-semibold text-[#131313] mb-6">Socials</h1>

            <li>Discord</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </aside>
      </div>
      <hr />
      <div className="flex justify-between mt-12 font-semibold text-base">
        <span>
          ©2022 MORENT. All rights reserved
        </span>

        <div>
          <span className="mr-14">Privacy & Policy</span>
          <span>Terms & Condition</span>
        </div>
      </div>
    </footer>
  )
}