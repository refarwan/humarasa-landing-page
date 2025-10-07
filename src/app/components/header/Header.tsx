"use client";

import { useState } from "react";
import Link from "next/link";

import { HamburgerIcon } from "../Icons";
import NestedMenu from "./NestedMenu";

const Header = () => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);
    const [subMenuVisible, setSubMenuVisible] = useState<
        ("program" | "aboutUs" | "getInvolved")[]
    >([]);

    return (
        <header className="fixed top-0 w-full bg-white shadow">
            <div className="flex h-[73px] w-full items-center justify-between px-[24px] xl:mx-auto xl:w-[918px]">
                <Link href="/" className="text-warna-1 text-[20px] font-bold">
                    Humarasa
                </Link>
                <nav
                    className={`bg-warna-program absolute top-[72px] left-0 flex select-none xl:relative xl:top-[unset] xl:h-max xl:w-max xl:flex-row xl:bg-[unset] ${mobileMenuVisible ? "h-max" : "h-0"} w-full flex-col overflow-hidden xl:overflow-visible`}
                >
                    <NestedMenu
                        onClick={() => {
                            setSubMenuVisible((prev) =>
                                prev.includes("program")
                                    ? prev.filter((item) => item !== "program")
                                    : [...prev, "program"],
                            );
                        }}
                        textMenu="PROGRAM"
                        subMenuVisible={subMenuVisible.includes("program")}
                        subMenuItems={[
                            { text: "PENDIDIKAN", url: "#" },
                            { text: "KONSELING", url: "#" },
                            { text: "PEMBERDAYAAN MASYARAKAT", url: "#" },
                        ]}
                    />

                    <NestedMenu
                        onClick={() => {
                            setSubMenuVisible((prev) =>
                                prev.includes("aboutUs")
                                    ? prev.filter((item) => item !== "aboutUs")
                                    : [...prev, "aboutUs"],
                            );
                        }}
                        textMenu="ABOUT US"
                        subMenuVisible={subMenuVisible.includes("aboutUs")}
                        subMenuItems={[
                            { text: "OUR MISSION", url: "#" },
                            { text: "OUR TEAM", url: "#" },
                            { text: "MITRA", url: "#" },
                        ]}
                    />

                    <NestedMenu
                        onClick={() => {
                            setSubMenuVisible((prev) =>
                                prev.includes("getInvolved")
                                    ? prev.filter(
                                          (item) => item !== "getInvolved",
                                      )
                                    : [...prev, "getInvolved"],
                            );
                        }}
                        textMenu="GET INVOLVED"
                        subMenuVisible={subMenuVisible.includes("getInvolved")}
                        subMenuItems={[
                            { text: "MAGANG", url: "#" },
                            { text: "VOLUNTEER", url: "#" },
                            { text: "DONASI", url: "#" },
                        ]}
                    />

                    <Link
                        href={"#"}
                        className="hover:bg-warna-1 xl:text-warna-1 block h-[55px] px-[25px] leading-[55px] hover:text-white xl:hover:bg-[unset] xl:hover:text-black"
                    >
                        CONTACT US
                    </Link>
                </nav>
                <button
                    className="cursor-pointer xl:hidden"
                    onClick={() => {
                        setMobileMenuVisible((prev) => !prev);
                    }}
                >
                    <HamburgerIcon size={36} className="text-warna-1" />
                </button>
            </div>
        </header>
    );
};

export default Header;
