"use client";
import { Button } from "@nextui-org/react";
import dayjs from "dayjs";
import { useState } from "react";
import { RxArrowLeft, RxArrowRight, RxCalendar } from "react-icons/rx";

const Item = ({ text, image }: any) => {
  return (
    <div className="flex w-full">
      <img src={image} alt="" className="h-12 w-12 rounded-xl" />
      <div className="flex w-full bg-gray-200/10 rounded-xl items-center justify-center">
        <p className="text-white font-montserrat font-extralight text-small">
          {text}
        </p>
      </div>
    </div>
  );
};

export default function MenuInfo() {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (days: number) => {
    setSelectedDate((prevDate: any) => prevDate.add(days, "day"));
  };

  const formattedDate = selectedDate.format("DD MMM YY");

  return (
    <div className="col-span-1 border-1 border-gray-400/30 rounded-3xl p-3 flex flex-col justify-between h-full">
      <div className="flex justify-around pt-4">
        <RxCalendar size={30} className="text-white" />
        <section className="text-white font-montserrat font-thin text-small">
          <p>Next Checkup</p>
          <p>Fri, 24 Mar</p>
        </section>
      </div>

      {/* Selector de fecha */}
      <div className="w-full justify-between flex items-center bg-gray-300/15 border-1 rounded-full border-gray-500">
        <button
          className="rounded-full h-14 w-14 border-1 border-gray-500 bg-gray-100/30 hover:bg-gray-100/50 flex items-center justify-center text-gray-300"
          onClick={() => handleDateChange(-1)}
        >
          <RxArrowLeft className="font-bold" size={20} />
        </button>
        <p className="font-montserrat text-xs text-white">{formattedDate}</p>
        <button
          className="rounded-full h-14 w-14 border-1 border-gray-500 bg-gray-100/30 hover:bg-gray-100/50 flex items-center justify-center text-gray-300"
          onClick={() => handleDateChange(1)}
        >
          <RxArrowRight size={20} />
        </button>
      </div>

      <div className="space-y-3">
        <Item
          text="Diego Cedrón"
          image="https://mmv2api.s3.us-east-2.amazonaws.com/products/images/2-image-stickbatsymbol-1-productimagenowatermark.jpg"
        />
        <Item
          text="Estrelluela"
          image="https://mmv2api.s3.us-east-2.amazonaws.com/products/images/2-image-stickbatsymbol-1-productimagenowatermark.jpg"
        />
        <Item
          text="Diego Cedric"
          image="https://mmv2api.s3.us-east-2.amazonaws.com/products/images/2-image-stickbatsymbol-1-productimagenowatermark.jpg"
        />
      </div>

      <Button
        className="w-full mt-4 font-montserrat font-light flex justify-between"
        color="primary"
        endContent={<RxArrowRight size={20} />}
      >
        Consult new
      </Button>
    </div>
  );
}
