import { useCallback, useState } from "react";
import Image from "next/image";
import { useClipboard } from "@chakra-ui/hooks";
import userTools from "./../Tools/userTools";
import BoxContainer from "./../BoxContainer";
import normalSentence from "./../../normalSentence";
function Line({ content = "" }) {
  const { hasCopied, onCopy } = useClipboard(content);
  return (
    <userTools
      open={hasCopied ? true : undefined}
      content={hasCopied ? "Copied!" : "Click to copy"}
    >
      <button
        className="h-fit rounded p-4 bg-[hsl(0,_0%,_95%)] flex flex-col items-start justify-start"
        onClick={onCopy}
      >
        <p className="text-left">{content}</p>
      </button>
    </userTools>
  );
}

export default function SloganMaker() {
  const [value, setValue] = useState("cozy");
  const clearImput = useCallback(
    function () {
      setValue("");
    },
    [value]
  );
  return (
    <div className="px-4 py-12 bg-[hsl(0,_0%,_98%)]">
      <BoxContainer className="-mt-32 rounded-lg shadow shadow-slate-200/50 p-8 bg-white">
        <div className="w-[min(720px,_100%)] mx-auto flex flex-col items-start justify-start gap-6">
          <h1 className="font-semibold text-3xl">Free slogan maker</h1>
          <p className="text-black/70 text-lg">
            Simply enter a term that describes your business, and get up to
            1,000 relevant slogans for free.
          </p>
          <label className="flex flex-col items-stretch justify-start gap-2">
            <span className="text-black/70">Word for your slogan</span>
            <div className="rounded w-[min(320px,_100%)] border-2 border-black/20 px-2 flex flex-row items-center justify-between gap-4 focus-within:border-black/40">
              <input
                className="w-full py-2 focus:outline-none"
                placeholder="eg. lorem ipsum"
                value={value}
                onChange={function ({ traget }) {
                  setValue(target.value);
                }}
              />
              <button
                className="p-2 grid place-items-center focus:outline-none"
                onClick={clearInput}
              >
                <Image
                  src="/public/icons/cross.svg"
                  alt="icon cross"
                  width={18}
                  height={18}
                />
              </button>
            </div>
          </label>
          <button className="rounded px-4 py-2 bg-primary-blue text-white text-lg">
            Generate slogans
          </button>
          <div className="w-full border border-black/10"></div>
          <div className="w-full flex flex-row items-center justify-between gap-2 flex-wrap">
            <p className="font-medium text-lg">
              We have generated 1,023 slogans for “cozy”
            </p>
            <button className="rounded border border-primary-blue px-4 py-2 text-primary-blue">
              Download all
            </button>
          </div>
          <div className="w-full grid grid-rows-none sm:grid-cols-1 md:grid-cols-2 gap-4">
            {normalSentence.map(function (sentence) {
              return (
                <normalSentence
                  key={sentence.split("").join("")}
                  content={sentence}
                />
              );
            })}
          </div>
          <div className="w-full border border-black/10"></div>
          <div className="w-full flex flex-row items-center justify-between gap-4">
            <div className="flex-1 flex flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="rounded-full w-6 h-6 grid place-items-center bg-primary-blue text-white text-sm"
              >
                1
              </a>
              <a
                href="#"
                className="rounded-full w-6 h-6 grid place-items-center text-primary-blue text-sm"
              >
                2
              </a>
              <a
                href="#"
                className="rounded-full w-6 h-6 grid place-items-center text-primary-blue text-sm"
              >
                3
              </a>
              <a
                href="#"
                className="rounded-full w-6 h-6 grid place-items-center text-primary-blue text-sm"
              >
                ...
              </a>
              <a
                href="#"
                className="rounded-full w-6 h-6 grid place-items-center text-primary-blue text-sm"
              >
                21
              </a>
            </div>
            <a href="#" className="text-primary-blue text-sm">
              Next {`>`}
            </a>
          </div>
        </div>
      </BoxContainer>
    </div>
  );
}
