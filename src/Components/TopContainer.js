import { Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Bell, User } from "../icons/Icons";
const TopContainer = () => {
  return (
    <div className=" h-14 flex items-center justify-between border-b-2 bg-blue-200 ">
      <div className="h-8 w-60  md:w-80 md:ml-6 ml-3 flex items-center border-inherite border-solid border">
        <Input
          placeholder="Search..."
          className="w-56 md:w-72 border-none placeholder-black"
        />
        <div className="w-8 h-8 ml-1">{<SearchOutlined />}</div>
      </div>
      <div className="flex items-center mr-2 w-24 justify-evenly">
        <Bell />
        <User />
      </div>
    </div>
  );
};

export default TopContainer;
