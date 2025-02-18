"use client";

import Image from "next/image";
import iconStar from "../../public/images/icon-star.svg";
import receipt from "../../public/images/illustration-thank-you.svg";
import { useState } from "react";

export default function Home() {
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [reviewNumber, setReviewNumber] = useState(-1);
  const [isError, setIsError] = useState(false);

  const handleReviewClick = (index: number) => {
    setReviewNumber(index + 1);
  };

  const handleSubmit = () => {
    if (reviewNumber > 0) {
      setReviewSubmitted(true);
    } else {
      setIsError(true);
    }
  };

  return (
    <>
      <div className="bg-darkBlue p-5 md:p-10 text-white rounded-xl w-[90%] md:w-[500px] h-auto ">
        {!reviewSubmitted ? (
          <>
            <span className="bg-white/10 flex justify-center items-center rounded-full w-12 h-12 md:w-14 md:h-14  ">
              <Image src={iconStar} className=" w-6 h-6  " alt="star" />
            </span>
            <div className="flex flex-col mt-10  gap-8">
              <h2 className="text-3xl  font-overpassSemibold">
                How did we do?{" "}
              </h2>
              <p className="text-lightGrey font-overpassSemibold text-lg">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
              <div className="flex items-center gap-2 md:gap-5">
                {[...Array(5)].map((_, index) => (
                  <span
                    className={`text-lightGrey cursor-pointer hover:bg-orange hover:text-veryDarkBlue rounded-full w-12 h-12 md:w-14 md:h-14 font-overpassBold flex justify-center items-center text-center text-[18px] ${
                      reviewNumber === index + 1
                        ? "bg-white text-veryDarkBlue"
                        : "bg-white/10"
                    } `}
                    key={index}
                    onClick={() => handleReviewClick(index)}
                  >
                    <p>{index + 1}</p>
                  </span>
                ))}
              </div>
              <button
                className="bg-orange hover:bg-white  text-veryDarkBlue text-xl text-center p-3 rounded-full w-full uppercase font-overpassBold"
                onClick={handleSubmit}
              >
                Submit
              </button>
              {isError && (
                <p className="text-orange text-center">Please select a rating number</p>
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-8 items-center justify-center">
            <span>
              <Image src={receipt} alt="star" />
            </span>
            <span className="bg-white/10 py-2 px-5 rounded-full">
              <p className="text-orange text-sm">{`You selected ${reviewNumber} out of 5`}</p>
            </span>
            <h3 className="text-3xl font-overpassSemibold  ">Thank you!</h3>
            <p className="text-center text-lightGrey ">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        )}
      </div>
    </>
  );
}
