import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-warna-1 text-white p-[56px] flex gap-[32px] flex-col">
            <div className="flex flex-col gap-[32px] px-[10px] xl:flex-row xl:mx-auto xl:justify-between xl:w-[925px]">
                <div className="w-[197px]">
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
                    <h2 className="font-semibold text-[24px] mb-[4px]">
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
                    <h2 className="font-semibold text-[24px] mb-[4px]">
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
                <div className="flex flex-col gap-[7px]">
                    <h2 className="font-semibold text-[24px] mb-[4px]">
                        Kontak
                    </h2>
                    <div className="text-[12px]">Magang & Volunteer</div>
                    <div className="text-[12px]">Mitra & Kolaborasi</div>
                    <div className="text-[12px]">Dukungan</div>
                    <div></div>
                </div>
            </div>
            <div className="px-[10px] pt-[32px] flex border-t border-white/12 flex-col sm:flex-row sm:justify-between xl:w-[925px] xl:mx-auto">
                <div>&copy; Humarasa. All rights reserved</div>
                <div>Privacy Policy</div>
            </div>
        </footer>
    );
};

export default Footer;
