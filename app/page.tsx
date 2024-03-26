"use client";

import { useState } from "react";
import Image from "next/image";
import { Short_Stack } from "next/font/google";

interface Question {
  title: string;
  id: number;
}

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

const shortStack = Short_Stack({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [flag, setFlag] = useState(false);
  const [transcript, setTranscript] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [questionnaireType, setQuestionnaireType] = useState<string>();

  const nextPage = () => {
    if (currentPage < questions.length - 1) {
      setCurrentPage(currentPage + 1);
      setTranscript([]);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const isLastPage = () => {
    return currentPage === questions.length - 1;
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
        <div className="absolute top-3 left-40 right-0">
          <Image src="/week1.svg" alt="Week 1" width={180} height={180} />
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
        <div className="absolute bottom-1 left-[8%]">
          <Image
            src="/speak-button.png"
            alt="Speak Button"
            width={60}
            height={60}
          />
        </div>
        <div className="absolute bottom-1 right-[56%] left-[40%]">
          <Image
            src="/back-button.png"
            alt="Back Button"
            width={60}
            height={60}
          />
        </div>
        <div className="absolute bottom-2 left-[46%] right-[46%]">
          <Image
            src="/page-no.png"
            alt="Page Number"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute bottom-1 right-[40%] left-[56%]">
          <Image
            src="/next-button.png"
            alt="Next Button"
            width={60}
            height={60}
          />
        </div>
        <div className="absolute bottom-1 right-[8%]">
          <Image
            src="/help-button.png"
            alt="Help Button"
            width={60}
            height={60}
          />
        </div>

        <div className="bg-white h-full w-full rounded-2xl relative justify-center items-center">
          <div className={shortStack.className}>
            <div className="flex flex-col items-center justify-center space-y-2 px-5">
              <div className="relative">
                <Image
                  src="/pink-rectangle.svg"
                  alt="Pink Rectangle"
                  width={400}
                  height={400}
                />
                <h1 className="absolute inset-0 flex text-xl items-center justify-center text-white">
                  Elements of Story Writing
                </h1>
              </div>
              <div className="">
                <p className="px-3">
                  Welcome to term 2 of Writers Club. Are you excited for this
                  amazing journey? Over the next week, we will be <br />
                  practicing the different elements of story writing. Our aim is
                  to make stories more interesting and exciting.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/blue-rectangle.svg"
                  alt="Blue Rectangle"
                  width={300}
                  height={300}
                  className="w-full"
                />
                <h1 className="absolute ml-7 mr-36 inset-0 flex text-xl items-center justify-center text-white">
                  There are elements which make the foundation for story
                  writing. An element is an essential part of something and
                  every fiction story has the same key elements:
                </h1>
                <Image
                  src="/student.svg"
                  alt="Student"
                  width={80}
                  height={80}
                  className="absolute top-5 right-10"
                />
              </div>
              <div className="flex space-x-4">
                <Image
                  src="/cloud-1.svg"
                  alt="Cloud 1"
                  width={150}
                  height={150}
                />
                <Image
                  src="/cloud-2.svg"
                  alt="Cloud 2"
                  width={150}
                  height={150}
                />
                <Image
                  src="/cloud-3.svg"
                  alt="Cloud 3"
                  width={150}
                  height={150}
                />
                <Image
                  src="/cloud-4.svg"
                  alt="Cloud 4"
                  width={150}
                  height={150}
                />
                <Image
                  src="/cloud-5.svg"
                  alt="Cloud 5"
                  width={150}
                  height={150}
                />
              </div>
              <p className="px-3">
                You must be familiar with some of these. If not, do not worry!
                we will cover all these elements as we go along.
              </p>
              <div className="relative">
                <Image
                  src="/pink-white-rectangle.svg"
                  alt="Pink White Rectangle"
                  width={300}
                  height={300}
                  className="w-full"
                />
                <h1 className="absolute mb-6 ml-6 px-10 inset-0 flex text-xl items-center justify-center">
                  For today’s lesson, we will try to understand and practice
                  writing the setting for our stories.
                  <br />
                  The setting is an important element of every fiction story.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
