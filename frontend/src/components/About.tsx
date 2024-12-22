import { TbTruckReturn } from "react-icons/tb"
import { MdOutlineLocalOffer, MdOutlinePayment } from "react-icons/md"
import { BiSupport } from "react-icons/bi"

const About = () => {
  return (
    <section className="max-padd-container mb-2 bg-white p-6  text-gray-30">
      <div className="flex flex-row flex-wrap g-2 justify-between gap-y-3">
            <div className="flexCenter gap-x-4">
              <div className="h-14 min-w-12 bg-primary flexCenter rounded-md">
                <TbTruckReturn className="text-xl text-secondaryOne"/>
              </div>
              <div className="">
                <span className="bold-14 lg:bold-16">Return & Refund</span>
                <p className="!text-[12px]">Money back guarantee</p>
              </div>
            </div>
            <div className="flexCenter gap-x-4">
              <div className="h-14 min-w-12 bg-primary flexCenter rounded-md">
                <MdOutlinePayment  className="text-xl text-secondaryOne"/>
              </div>
              <div className="">
                <span className="bold-14 lg:bold-16">Easy return process</span>
                <p className="!text-[12px]">Money back guarantee</p>
              </div>
            </div>
            <div className="flexCenter gap-x-4">
              <div className="h-14 min-w-12 bg-primary flexCenter rounded-md">
                <BiSupport className="text-xl text-secondaryOne"/>
              </div>
              <div className="">
                <span className="bold-14 lg:bold-16">Live customer support</span>
                <p className="!text-[12px]">Always online 24/7</p>
              </div>
              
            </div>
            <div className="flexCenter gap-x-4">
              <div className="h-14 min-w-12 bg-primary flexCenter rounded-md">
                <MdOutlineLocalOffer className="text-xl text-secondaryOne"/>
              </div>
              <div className="">
                <span className="bold-14 lg:bold-16">Daily Offers</span>
                <p className="!text-[12px]">20% off by subscribing</p>
              </div>
              
            </div>

      </div>

    </section>
  )
}

export default About