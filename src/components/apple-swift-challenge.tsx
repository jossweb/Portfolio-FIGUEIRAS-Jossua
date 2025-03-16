"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import GradientButton from "./ui/swiftButton";

export default function AppleSwiftChallenge() {
    const { translations } = useLanguage();
    return (
        <section className="w-full p-5 mx-auto text-center" id="apple-swift-challenge">
            <h2 className="text-4xl text-white font-bold m-2">Swift Student Challenge</h2>
            <Image
                src="/img/ssc-logo-code.webp"
                alt="Apple Swift Challenge"
                width={150}
                height={150}
                className="mx-auto m-10"
            />
            <p className="text-white text-lg mt-5 w-[50%] max-w-[600px] mx-auto">
                {translations.studentChallenge.text}
            </p>
            <GradientButton
                href={translations.studentChallenge.link}
                type="link"
                openInNewTab={true}
                className="w-[45%] max-w-[200px] flex justify-center mx-auto mt-10"
            >
                {translations.studentChallenge.buttonText}
            </GradientButton>
        </section>
    );
}