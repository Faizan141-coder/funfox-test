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
          Hello World
        </div>
      </div>
    </div>
  );
}
