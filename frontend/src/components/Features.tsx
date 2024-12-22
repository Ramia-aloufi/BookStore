import { BsBookmarkHeart } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbStarsFilled } from "react-icons/tb";

const Features = () => {
  return (
    <section className="max-padd-container py-16 text-gray-30">
      <div className="max-padd-container grid grid-cols-2 md:grid-cols-3">
        <div className="flexCenter flex-col gap-3">
          <BsBookmarkHeart className="h-[28px] w-[28px]" />
          <div className="flexCenter flex-col">
          <hr className="w-8 bg-secondaryOne h-1 rounded-full border-none" />
            <h6>Advabced search filter</h6>
          </div>
          <p className="text-center !text-gray-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur, officiis.
          </p>
        </div>
        <div className="flexCenter flex-col gap-3">
          <HiOutlineAdjustmentsHorizontal className="h-[28px] w-[28px]" />
          <div className="flexCenter flex-col">
          <hr className="w-8 bg-secondaryOne h-1 rounded-full border-none" />
            <h6>Wishlist and favorite</h6>
          </div>
          <p className="text-center !text-gray-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur, officiis.
          </p>
        </div>
        <div className="flexCenter flex-col gap-3">
          <TbStarsFilled className="h-[28px] w-[28px]" />
          <hr className="w-8 bg-secondaryOne h-1 rounded-full border-none" />
          <div className="flexCenter flex-col">
            <h6>Advabced search filter</h6>
          </div>
          <p className="text-center !text-gray-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur, officiis.
          </p>
        </div>
        <div className="flexCenter flex-col gap-3">
          <RiSecurePaymentLine className="h-[28px] w-[28px]" />
          <div className="flexCenter flex-col">
          <hr className="w-8 bg-secondaryOne h-1 rounded-full border-none" />

            <h6>Wishlist and favorite</h6>
          </div>
          <p className="text-center !text-gray-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur, officiis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
