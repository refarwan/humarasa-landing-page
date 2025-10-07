import { ArrowDownIcon } from "../Icons";
import Link from "next/link";

interface Props {
    onClick: VoidFunction;
    textMenu: string;
    subMenuItems: { text: string; url: string }[];
    subMenuVisible: boolean;
}

const NestedMenu = ({
    onClick,
    textMenu,
    subMenuVisible,
    subMenuItems,
}: Props) => {
    return (
        <div>
            <div
                onClick={onClick}
                className={`hover:bg-warna-1 ${subMenuVisible ? "xl:text-black" : "xl:text-warna-1"} group flex h-[55px] cursor-pointer items-center justify-between px-[25px] hover:text-white xl:relative xl:w-max xl:gap-[10px] xl:hover:bg-[unset] xl:hover:text-[unset]`}
            >
                <span>{textMenu}</span>
                <ArrowDownIcon
                    size={12}
                    className={`${subMenuVisible ? "rotate-180" : ""} transition-all`}
                />
            </div>
            <div
                className={`${subMenuVisible ? "" : "h-0"} xl:bg-warna-program flex flex-col overflow-hidden xl:absolute xl:shadow`}
            >
                {subMenuItems.map((item, index) => (
                    <Link
                        href={item.url}
                        key={index}
                        className="hover:bg-warna-1 xl:hover:text-warna-1 xl:hover h-[55px] px-[40px] leading-[55px] hover:text-white xl:hover:bg-[unset]"
                    >
                        {item.text}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NestedMenu;
