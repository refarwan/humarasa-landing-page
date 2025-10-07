import Link from "next/link";
import {
    FacebookIcon,
    InstagramIcon,
    LocationIcon,
    RoundMailIcon,
    TelephoneIcon,
    YoutubeIcon,
} from "./Icons";

const Footer = () => {
    return (
        <footer className="bg-warna-1 mt-[400px] flex flex-col gap-[32px] p-[56px] text-white">
            <div className="flex flex-col gap-[32px] px-[10px] xl:mx-auto xl:w-[925px] xl:flex-row xl:justify-between">
                <div className="max-w-[197px]">
                    <h2 className="font-medium">
                        <span className="text-[48px]">H</span>
                        <span className="text-[24px]">umarasa</span>
                    </h2>
                    <p>
                        Humarasa Foundation hadir untuk mendukung pendidikan,
                        pemberdayaan sosial, dan keberlanjutan melalui program
                        inklusif bagi semua lapisan masyarakat.
                    </p>
                </div>
                <div className="flex flex-col gap-[7px]">
                    <h2 className="mb-[4px] text-[24px] font-semibold">
                        Navigasi
                    </h2>
                    <Link href={"#"} className="text-[12px]">
                        Home
                    </Link>
                    <Link href={"#"} className="text-[12px]">
                        Program
                    </Link>
                    <Link href={"#"} className="text-[12px]">
                        Tentang Kami
                    </Link>
                    <Link href={"#"} className="text-[12px]">
                        Publikasi
                    </Link>
                    <Link href={"#"} className="text-[12px]">
                        Berita
                    </Link>
                    <Link href={"#"} className="text-[12px]">
                        Kontak
                    </Link>
                </div>

                <div className="flex flex-col gap-[7px]">
                    <h2 className="mb-[4px] text-[24px] font-semibold">
                        Keterlibatan
                    </h2>
                    <Link href={"#"} className="text-[12px]">
                        Magang & Volunteer
                    </Link>
                    <Link href={"#"} className="text-[12px]">
                        Mitra & Kolaborasi
                    </Link>
                    <Link href={"#"} className="text-[12px]">
                        Dukungan
                    </Link>
                </div>
                <div className="flex max-w-[197px] flex-col gap-[7px]">
                    <h2 className="mb-[4px] text-[24px] font-semibold">
                        Kontak
                    </h2>
                    <div className="flex items-start gap-[12px] text-[12px]">
                        <LocationIcon size={22} className="text-[#D8BDFF]" />
                        <span className="flex-1">
                            Jl. Mawar No. 10, Banguntapan, Bantul, Daerah
                            Istimewa Yogyakarta 55198
                        </span>
                    </div>
                    <div className="flex items-start gap-[12px] text-[12px]">
                        <TelephoneIcon size={22} className="text-[#D8BDFF]" />
                        <span className="flex-1">+62 812-3456-7890</span>
                    </div>
                    <div className="flex items-start gap-[12px] text-[12px]">
                        <RoundMailIcon size={22} className="text-[#D8BDFF]" />
                        <span className="flex-1">info@humarasa.org</span>
                    </div>

                    <div className="flex gap-[7px]">
                        <FacebookIcon size={31} className="text-[#D8BDFF]" />
                        <InstagramIcon size={31} className="text-[#D8BDFF]" />
                        <YoutubeIcon size={31} className="text-[#D8BDFF]" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-t border-white/12 px-[10px] pt-[32px] sm:flex-row sm:justify-between xl:mx-auto xl:w-[925px]">
                <div>&copy; Humarasa. All rights reserved</div>
                <div>Privacy Policy</div>
            </div>
        </footer>
    );
};

export default Footer;
