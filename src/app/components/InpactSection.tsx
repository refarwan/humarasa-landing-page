const ImpactSection = () => {
    return (
        <div className="flex flex-col gap-[40px] p-[32px] py-[100px]">
            <h2 className="text-warna-1 text-center text-[40px] font-semibold">
                Membangun Budaya Kebersamaan
            </h2>
            <div className="flex flex-col gap-[12px]">
                <p className="mx-auto text-center xl:w-[950px]">
                    Di Humarasa Foundation, kami percaya setiap langkah kecil
                    menuju pendidikan, konseling, dan pemberdayaan bisa
                    menciptakan perubahan besar. Kami hadir untuk menumbuhkan
                    semangat gotong royong, berbagi, dan saling menguatkan agar
                    masyarakat dapat berkembang lebih berdaya.
                </p>
                <p className="mx-auto text-center xl:w-[950px]">
                    Sejak berdiri, kami telah mendampingi ribuan individu untuk
                    belajar, tumbuh, dan berkontribusi bagi lingkungannya.
                    Bersama, mari kita lanjutkan perjalanan ini untuk
                    menghadirkan lebih banyak kebaikan.
                </p>
            </div>
            <div className="flex flex-col gap-[25px] sm:mx-auto sm:w-full sm:flex-row xl:w-[950px]">
                <div className="flex flex-col gap-[25px] sm:w-full">
                    <div className="bg-warna-program text-warna-1 flex h-[51px] w-full items-center justify-center text-center text-[28px] font-semibold">
                        IMPACT
                    </div>
                    <div className="flex flex-col gap-[25px] sm:flex-row">
                        <div className="bg-warna-program text-warna-1 flex-cool flex h-[139px] w-full flex-col items-center justify-center text-center">
                            <span className="text-[32px] font-semibold">
                                500+
                            </span>
                            <span>Penerima Manfaat</span>
                        </div>
                        <div className="bg-warna-program text-warna-1 flex-cool flex h-[139px] w-full flex-col items-center justify-center text-center">
                            <span className="text-[32px] font-semibold">
                                35
                            </span>
                            <span>Program Berjalan</span>
                        </div>
                        <div className="bg-warna-program text-warna-1 flex-cool flex h-[139px] w-full flex-col items-center justify-center text-center">
                            <span className="text-[32px] font-semibold">
                                120
                            </span>
                            <span>Relawan</span>
                        </div>
                    </div>
                </div>
                <div className="bg-warna-1 flex w-full flex-col items-center py-[32px] text-white sm:w-[197px]">
                    <span className="text-[40px] font-semibold">100 Jt</span>
                    <span className="text-center text-[20px]">
                        Total Donasi
                    </span>
                    <span className="text-center text-[20px]">(Rp)</span>
                </div>
            </div>
        </div>
    );
};

export default ImpactSection;
