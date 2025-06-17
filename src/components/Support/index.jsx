import React from "react";
import laptopImg from "../../assets/images/laptop.png";
import { SupportSvg } from "../../assets/icons/SupportSvg";

const Support = () => {
  return (
    <div className="mx-[130px] mt-[150px] flex justify-between items-center">
      <img src={laptopImg} alt="" />

      <div className="flex gap-[25px]">
        <div className="flex flex-col text-start gap-2">
          <p className="font-semibold text-[16px]">
            Easier decision making for
          </p>
          <h2 className="font-bold text-[32px]">Customer Support</h2>

          <p className="font-normal text-[16px] w-[486px] text-[#22343D]">
            The Myspace page defines the individual, his or her characteristics,
            traits, personal choices and the overall personality of the person.
          </p>

          <div className="flex gap-[30px] mt-[30px]">
            <SupportSvg />
            <p className="font-normal text-[16px] w-[365px]">
              Never worry about overpaying for your energy again.{" "}
            </p>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <SupportSvg />
            <p className="font-normal text-[16px] w-[365px]">
              Never worry about overpaying for your energy again.{" "}
            </p>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <SupportSvg />
            <p className="font-normal text-[16px] w-[365px]">
              Never worry about overpaying for your energy again.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
