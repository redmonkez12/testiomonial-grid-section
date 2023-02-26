import Image from "next/image";
import clsx from "clsx";

type Props = {
    title: string;
    text: string;
    name: string;
    personTitle: string;
    photoUrl: string;
    quotes?: boolean;
    variant: "purple" | "grey" | "white" | "black";
};

export function Testimonial({ title, text, name, personTitle, photoUrl, quotes = false, variant }: Props) {
    return (
        <article className={clsx("shadow-card text-[0.8125rem] rounded-lg flex flex-col", {
            "bg-quotes bg-no-repeat": quotes,
            "bg-purple p-8 md:pt-[1.625rem]": variant === "purple",
            "bg-black p-8 md:py-[1.625rem]": variant === "black",
            "bg-white p-8 md:py-[1.625rem]": variant === "white",
            "bg-darkGrey p-8 md:pt-[1.625rem]": variant === "grey",
        })}>
            <div className={"flex gap-4 items-center"}>
                <div className={"relative w-[1.75rem] h-[1.75rem]"}>
                    <Image className={clsx("rounded-full", {"border-2 border-lightPurple": variant === "purple"})} src={photoUrl} fill alt={"Person image"}/>
                </div>
                <div className={clsx({"text-darkGrey font-medium": variant === "white", "text-white": variant !== "white" })}>
                    <h2 className={"text-[0.8125em] leading-[0.8125em] "}>{name}</h2>
                    <p className={"opacity-50 text-[0.6875rem] leading-[0.6875rem] mt-0.5"}>{personTitle}</p>
                </div>
            </div>

            <p className={clsx("mt-4 text-xl font-semibold leading-[1.5rem]", {
                "text-darkGrey": variant === "white",
                "text-white": variant !== "white",
            })}>{title}</p>

            <p className={clsx("font-medium opacity-70 leading-[1.125rem]", {
                "text-darkGrey": variant === "white",
                "text-mediumGrey": variant !== "white",
                "mt-10 md:mt-4": variant === "purple",
                "mt-4 md:mt-6": variant !== "purple",
            })}>{text}</p>
        </article>
    );
}