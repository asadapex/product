import React from "react";
import managementImg from "../../assets/images/management.png";

const Management = () => {
  return (
    <section className="mt-[150px] mx-[130px]">
      <div className="flex justify-between">
        <div className="flex flex-col items-start gap-[131px]">
          <div className="flex flex-col items-start gap-[8px]">
            <p className="text-[#22343D] font-semibold">
              Effortless Validation for
            </p>
            <h2 className="text-[#22343D] font-bold text-[32px] ">
              Management
            </h2>
          </div>

          <div className="flex flex-col gap-[25px] items-start">
            <div className="flex flex-col items-start gap-[12px]">
              <p className="font-semibold text-[16px]">Accessory makers</p>

              <p className="text-[16px] w-[486px] font-normal">
                While most people enjoy casino gambling, sports betting, lottery
                and bingo playing for the fun
              </p>
            </div>
            <div className="flex flex-col items-start gap-[12px]">
              <p className="font-semibold text-[16px]">Alterationists</p>

              <p className="text-[16px] w-[486px] font-normal">
                If you are looking for a new way to promote your business that
                won’t cost you more money,
              </p>
            </div>
          </div>
        </div>
        <img src={managementImg} alt="" />
      </div>
    </section>
  );
};

export default Management;
