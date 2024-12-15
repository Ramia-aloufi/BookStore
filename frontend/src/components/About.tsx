import { TbTruckReturn } from "react-icons/tb"
import Title from "./Title"
import { MdOutlinePayment } from "react-icons/md"
import { BiSupport } from "react-icons/bi"

const About = () => {
  return (
    <section className="max-padd-container py-12 xl:py-24">
      <div className="flexCenter flex-col gap-16 xl:gap-8 xl:flex-row">

        <div className="flex-1">
          <Title title1="Unveiling Our" title2="Stores key feature"
          titleStyle="pb-10" paraStyle="!block"/>
          <div className="flex flex-col items-start gap-y-4">
            <div className="flexCenter gap-x-4">
              <div className="h-16 min-w-14 bg-secondaryOne flexCenter rounded-md">
                <TbTruckReturn className="text-2xl"/>
              </div>
              <div className="">
                <h4 className="medium-18">Secure payment options</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing 
                  elit. Quos, recusandae fuga! Quae, eius.</p>
              </div>
            </div>
            <div className="flexCenter gap-x-4">
              <div className="h-16 min-w-14 bg-secondaryOne flexCenter rounded-md">
                <MdOutlinePayment  className="text-2xl"/>
              </div>
              <div className="">
                <h4 className="medium-18">Easy return process</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing 
                  elit. Quos, recusandae fuga! Quae, eius.</p>
              </div>
            </div>
            <div className="flexCenter gap-x-4">
              <div className="h-16 min-w-14 bg-secondaryOne flexCenter rounded-md">
                <BiSupport className="text-2xl"/>
              </div>
              <div className="">
                <h4 className="medium-18">Live customer support</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing 
                  elit. Quos, recusandae fuga! Quae, eius.</p>
              </div>
            </div>

          </div>
          
        </div>
        <div className=" flex-1 flexCenter">
          <div className=" bg-secondaryOne flexCenter p-24 max-h-[33rem] min-w-[33rem] rounded-3xl">
            <img src="" alt=""  height={244} width={244} className="shadow-2xl stroke-slate-900/50 rounded-lg"/>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About