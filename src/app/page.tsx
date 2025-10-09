import Link from "next/link";
import ProgramSection from "./components/ProgramSection";
import ImpactSection from "./components/InpactSection";

export default function Home() {
    return (
        <main className="pt-[73px]">
            <div className="flex h-[407px] w-full flex-col items-center justify-center gap-[20px] bg-gray-400/75 bg-[url('/hero.png')] bg-[750px_auto] bg-center bg-no-repeat px-[29px] text-white bg-blend-multiply sm:bg-cover">
                <h2 className="max-w-[500px] text-center text-[28px] font-bold">
                    Berdaya Bersama, Berkarya untuk Sesama
                </h2>
                <p className="max-w-[500px] text-center">
                    Dedikasi kami untuk membangun masyarakat yang kuat,
                    inklusif, dan berkelanjutan.
                </p>
                <Link
                    href={"#"}
                    className="mx-auto block h-[34px] w-max rounded-[4px] border-[2px] border-white px-[24px] text-center"
                >
                    OUR MISSION
                </Link>
            </div>
            <ProgramSection />
            <ImpactSection />
        </main>
    );
}
