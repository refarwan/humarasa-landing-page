import Link from "next/link";
import { ComponentType } from "react";

import {
    HealthCareIcon,
    IconProps,
    PeopleIcon,
    RegisterBookIcon,
} from "./Icons";

interface Props {
    title: string;
    description: string;
    url: string;
    Icon: ComponentType<IconProps>;
}

const ProgramItem = ({ title, description, url, Icon }: Props) => {
    return (
        <div className="flex h-[330px] w-[300px] flex-col items-center gap-[10px] rounded-[10px] bg-white p-[32px] shadow">
            <Icon className="text-warna-1" size={75} />
            <h2 className="text-warna-1 text-[18px] font-bold">{title}</h2>
            <p className="text-center">{description}</p>
            <Link href={url} className="text-warna-1 font-semibold">
                Selengkapnya
            </Link>
        </div>
    );
};

const ProgramSection = () => {
    return (
        <div className="bg-warna-program flex flex-col gap-[28px] py-[100px]">
            <h2 className="text-warna-1 text-center text-[40px] font-semibold">
                Program
            </h2>
            <div className="flex flex-col items-center gap-[45px] xl:flex-row xl:justify-center">
                <ProgramItem
                    Icon={RegisterBookIcon}
                    title="Pendidikan"
                    description="Menyediakan ruang belajar dan pelatihan untuk meningkatkan pengetahuan serta keterampilan masyarakat."
                    url="#"
                />
                <ProgramItem
                    Icon={HealthCareIcon}
                    title="Konseling"
                    description="Mendampingi individu dan keluarga melalui konseling yang mendukung kesehatan mental dan ketahanan hidup."
                    url="#"
                />
                <ProgramItem
                    Icon={PeopleIcon}
                    title="Pemberdayaan Masyarakat"
                    description="Membangun kemandirian melalui pelatihan kerja, kewirausahaan, dan pendampingan komunitas."
                    url="#"
                />
            </div>
        </div>
    );
};

export default ProgramSection;
