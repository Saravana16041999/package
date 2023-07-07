import React from "react";
import { DatePicker } from "antd";
import { Arrow } from "../icons/Icons";
import { AiOutlineDown,AiOutlineDoubleRight } from "react-icons/ai";


const { RangePicker } = DatePicker;

const DateContainer = () => {
  return (
    <div className="bg-white h-14 flex items-center border-b-2 md:justify-end  ">
      <div className="flex flex-col md:flex-row w-32 md:w-60 md:items-center justify-center mr-2" >
        <span className="text-xs md:text-sm ml-5">Date</span>
        <RangePicker
          className=" w-32 md:w-56 h-8 "
          suffixIcon={false}
          separator={<Arrow />}
          bordered={false}
        />
        
      </div>
      <div className="h-14 w-2 border-inherit border-solid border-r  mr-2"></div>
      <div className="flex align-middle w-20 md:w-28  justify-center ">
      <span className="text-xs md:text-sm">Device</span>
      <button className="flex align-middle justify-start text-xs md:text-sm" >All <AiOutlineDown className="ml-2 m-1"/></button>
      </div>
      <div className="h-14 w-2 border-inherit border-solid border-r m-2  "></div>
      <div className="flex align-middle w-20 md:w-28  justify-center ">
      <span className="md:text-sm text-xs ">Channel</span>
      <button className="flex align-middle justify-start text-xs md:text-sm" >All <AiOutlineDown className="ml-2 m-1"/></button>
      </div>
      <div className="h-14 w-2 border-inherit border-solid border-r m-2 "></div>
      <div className="mr-2 md:mr-8 md:ml-4  w-8 ">
        <button className="order-sky-500 border-solid border h-8  w-10 md:h-10 flex  justify-center"><AiOutlineDoubleRight className="mt-2 text-sm md:text-xl text-sky-500"/></button>
      </div>
    </div>
  );
};

export default DateContainer;
