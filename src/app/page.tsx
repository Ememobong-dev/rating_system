import Image from "next/image";
import iconStar from "../../public/images/icon-star.svg";

export default function Home() {
  return (
    <>
      <div className="bg-veryDarkBlue p-10 text-white rounded-xl w-[500px] h-[500px] ">
        <span className="bg-white/10 flex justify-center items-center rounded-full p-2 w-14 h-14 ">
          <Image
            src={iconStar}
            className=" w-6 h-6  "
            alt="star"
          />
        </span>
        <div>
          <h2 className="text-3xl my-10">How did we do</h2>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex gap-5">
            {
              [...Array(5)].map( (_, index) => (
                <>
                <span className="bg-white/10 flex justify-center items-center rounded-full p-2 w-14 h-14 " key={index}>
                  <p> {index+1}</p>
                </span>
                </>
              ) )
            }
          </div>
          <button>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
