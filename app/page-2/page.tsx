"use client";

import Image from "next/image";
import { Short_Stack } from "next/font/google";
import { useRouter } from "next/navigation";

const shortStack = Short_Stack({ weight: "400", subsets: ["latin"] });

const Page = () => {
  const router = useRouter();

  const previousPage = () => {
    router.push("/");
  };

  return (
    <div>
      <div className="h-full fixed w-full p-20 items-center justify-center bg-[#F8D1E0]">
        <div className="absolute top-0 left-0">
          <Image
            src="/funfox-logo.svg"
            alt="FunFox Logo"
            width={180}
            height={180}
          />
        </div>
        <div className="absolute top-[20%] left-0 right-0">
          <Image src="/pencil.svg" alt="Pencil" width={80} height={80} />
        </div>
        <div className="absolute top-[45%] left-0 right-0">
          <Image src="/bag.svg" alt="Bag" width={80} height={80} />
        </div>
        <div className="absolute top-[70%] left-0 right-0">
          <Image src="/open-book.svg" alt="Open Book" width={80} height={80} />
        </div>
        <div className="absolute top-20 left-0 right-0">
          <Image
            src="/dotted-lines-1.png"
            alt="Dotted Line 1"
            width={80}
            height={80}
          />
        </div>
        <div className="absolute top-[15%] right-0">
          <Image src="/scale.svg" alt="Scale" width={80} height={80} />
        </div>
        <div className="absolute top-[45%] right-0">
          <Image
            src="/close-book.svg"
            alt="Close Book"
            width={80}
            height={80}
          />
        </div>
        <div className="absolute top-[70%] right-0">
          <Image src="/cap.svg" alt="Cap" width={80} height={80} />
        </div>
        <div className="absolute top-20 right-0">
          <Image
            src="/dotted-lines-2.png"
            alt="Dotted Line 2"
            width={80}
            height={80}
          />
        </div>

        <div className="bg-[#f8f9ff] h-full w-full rounded-2xl relative py-2 justify-center items-center overflow-y-auto">
          <div className={shortStack.className}>
            <div className="flex flex-col items-center justify-center space-y-2 px-10">
              <div className="px-3">
                <h1 className="text-3xl">
                  Can you figure out the definition of setting from the
                  following
                  <br /> examples?
                </h1>
                <p className="text-xl">(Take a minute to think about this)</p>
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 py-4 space-x-10">
                    <Image
                      src="/sunny-day.png"
                      alt="Sunny Day"
                      width={300}
                      height={300}
                    />
                    <Image
                      src="/rainy-night.png"
                      alt="Rainy Night"
                      width={340}
                      height={400}
                    />
                  </div>
                </div>

                <p className="my-2">
                  So what do you think the definition of setting is?
                </p>
                <div className="flex items-center justify-center space-x-10">
                  <p>Any guesses?</p>
                  <Image
                    src="/any-guesses.png"
                    alt="Any Guesses"
                    width={600}
                    height={400}
                  />
                  <p>Hints: </p>
                  <Image
                    src="/hints.png"
                    alt="Hints"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/blue-rectangle.svg"
                  alt="Blue Rectangle"
                  width={300}
                  height={300}
                  className="w-full h-full"
                />
                <h1 className="absolute mx-7 inset-0 flex text-xl items-center justify-center text-white">
                  Setting is the time and place of a story. It often answers the
                  questions: when? and where?
                </h1>
              </div>
              <p className="px-3">
                The time of the story could be in the past, future, day, night,
                summer or winter. A story may take place in a <br /> school, a
                mall, a desert, an airplane or in a variety of other places.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-1 left-[8%]">
          <Image
            src="/speak-button.png"
            alt="Speak Button"
            width={60}
            height={60}
            className="hover:filter opacity-80 hover:opacity-100 cursor-pointer transition duration-300 ease-in-out"
          />
        </div>

        <div className="relative mt-2 space-x-5 flex justify-center items-center">
          <button onClick={previousPage}>
            <Image
              src="/back-button.png"
              alt="Back Button"
              width={60}
              height={60}
              className="hover:filter opacity-80 hover:opacity-100 cursor-pointer transition duration-300 ease-in-out"
            />
          </button>
          <Image
            src="/page-no-2.png"
            alt="Page Number 2"
            width={100}
            height={100}
            className="hover:filter opacity-80 hover:opacity-100 cursor-pointer transition duration-300 ease-in-out"
          />
          <Image
            src="/next-button.png"
            alt="Next Button"
            width={60}
            height={60}
            className="hover:filter opacity-80 hover:opacity-100 cursor-pointer transition duration-300 ease-in-out"
          />
        </div>

        <div className="absolute bottom-1 right-[8%]">
          <Image
            src="/help-button.png"
            alt="Help Button"
            width={60}
            height={60}
            className="hover:filter opacity-80 hover:opacity-100 cursor-pointer transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
