"use client";

import { Volume2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface Question {
  title: string;
  id: number;
}

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

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

        <div className="bg-white h-full w-full rounded-2xl relative justify-center items-center">
          {/* Top Bar */}
          <div className="flex p-7 justify-between font-bold text-xl">
            <div className="flex gap-x-3">
              <div data-tooltip-id="speak-tooltip" data-tooltip-content="Speak">
                <Volume2
                  size={30}
                  onClick={() => {}}
                  className="cursor-pointer"
                />
              </div>
            </div>

            {questionnaireType !== "test2" ? (
              <div>
                <button
                  className="w-10 h-10"
                  onClick={previousPage}
                  disabled={isLoading}
                  data-tooltip-id="previous-tooltip"
                  data-tooltip-content="Previous Question"
                >
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#000000"
                      d="m16 8l1.43 1.393L11.85 15H24v2H11.85l5.58 5.573L16 24l-8-8l8-8z"
                    />
                    <path
                      fill="#000000"
                      d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4Z"
                    />
                  </svg>
                </button>
                <button
                  className="w-10 h-10"
                  onClick={nextPage}
                  disabled={isLoading}
                  data-tooltip-id="next-tooltip"
                  data-tooltip-content="Next Question"
                >
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#000000"
                      d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8l-8-8z"
                    />
                    <path
                      fill="#000000"
                      d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4Z"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <div>
                <h1 className="text-2xl"></h1>
              </div>
            )}
            <div>
              <h1 className="text-2xl">
                {currentPage + 1}/{questions.length}
              </h1>
            </div>
          </div>
          {/* Main Content */}

          <div className="text-center justify-center px-6 sm:px-36">
            {/* {currentPage < questions.length && ( */}
            <div>
              <h1 className="font-bold text-xl sm:text-lg md:text-xl lg:text-xl xl:text-3xl">
                Question No 1
              </h1>
            </div>
            {/* )} */}
            <h1>Elements of Story Writing</h1>
          </div>

          {/* Microphone */}
          <div className="">
            <div className="">
              {questionnaireType === "test1" &&
                (isRecording ? (
                  // button for stopping recording
                  <button
                    onClick={() => {}}
                    data-tooltip-id="stop-tooltip"
                    data-tooltip-content="Stop Recording"
                    disabled={isLoading}
                    className="m-auto flex items-center fixed left-0 right-0 bottom-2 justify-center bg-red-400 hover:bg-red-500 rounded-full w-20 h-20 focus:outline-none"
                  >
                    <svg
                      className="h-12 w-12 "
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="white" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  </button>
                ) : (
                  // button for starting recording
                  <button
                    onClick={() => {}}
                    data-tooltip-id="start-tooltip"
                    data-tooltip-content="Start Recording"
                    disabled={isLoading}
                    className="m-auto flex items-center fixed left-0 right-0 bottom-2 justify-center bg-yellow-400 hover:bg-yellow-500 rounded-full w-20 h-20 focus:outline-none"
                  >
                    <svg
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-white"
                    >
                      <path
                        fill="currentColor"
                        d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z"
                      />
                    </svg>
                  </button>
                ))}

              {questionnaireType !== "test2" ? (
                <div>
                  <button
                    className="absolute bottom-5 right-5 bg-yellow-400 hover:bg-yellow-500 rounded-full w-12 h-12 focus:outline-none"
                    onClick={() => {}}
                    data-tooltip-id="submit-tooltip"
                    data-tooltip-content="Submit Response"
                    type="submit"
                    disabled={isLoading}
                  >
                    <svg
                      width="500"
                      height="500"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#fff"
                        d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    className="absolute bottom-5 right-5 bg-yellow-400 hover:bg-yellow-500 rounded-full w-12 h-12 focus:outline-none"
                    onClick={() => {}}
                    data-tooltip-id="submit-tooltip"
                    data-tooltip-content="Submit Response"
                    type="submit"
                    disabled={isLoading}
                  >
                    <svg
                      width="500"
                      height="500"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#fff"
                        d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"
                      />
                    </svg>
                  </button>
                </div>
              )}

              {isLastPage() && (
                <button
                  onClick={() => {}}
                  type="submit"
                  disabled={!flag || isLoading}
                  className="flex absolute bottom-5 text-white left-5 right-0 items-center justify-center bg-red-500 hover:bg-red-600 rounded-md w-20 h-10 focus:outline-none"
                >
                  End Test
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
