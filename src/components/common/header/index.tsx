import Menu from "@components/common/menu";
import LightDarkModeToggleButton from "@components/common/header/LightDarkModeToggleButton";

export default function Header() {
    return (
        <div className="flex justify-between w-full">
            <Menu />
            <LightDarkModeToggleButton />
        </div>
    );
}
