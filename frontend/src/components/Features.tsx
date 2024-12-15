import { BsBookmarkHeart } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbStarsFilled } from "react-icons/tb";

const Features = () => {
  return (
    <section className="max-padd-container py-16">
      <div className="max-padd-container grid grid-cols-2 md:grid-cols-3">
        <div className="flexCenter flex-col gap-3">
          <BsBookmarkHeart className="h-[44px] w-[44px]" />
          <div className="flexCenter flex-col">
            <h5>Advabced search filter</h5>
            <hr className="w-8 bg-secondary h-1 rounded-full border-none" />
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur, officiis.
          </p>
        </div>
        <div className="flexCenter flex-col gap-3">
          <HiOutlineAdjustmentsHorizontal className="h-[44px] w-[44px]" />
          <div className="flexCenter flex-col">
            <h5>Wishlist and favorite</h5>
            <hr className="w-8 bg-secondary h-1 rounded-full border-none" />
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur, officiis.
          </p>
        </div>
        <div className="flexCenter flex-col gap-3">
          <TbStarsFilled className="h-[44px] w-[44px]" />
          <div className="flexCenter flex-col">
            <h5>Advabced search filter</h5>
            <hr className="w-8 bg-secondary h-1 rounded-full border-none" />
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur, officiis.
          </p>
        </div>
        <div className="flexCenter flex-col gap-3">
          <RiSecurePaymentLine className="h-[44px] w-[44px]" />
          <div className="flexCenter flex-col">
            <h5>Wishlist and favorite</h5>
            <hr className="w-8 bg-secondary h-1 rounded-full border-none" />
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur, officiis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
