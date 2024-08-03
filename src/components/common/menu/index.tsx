import LogoutButton from "@components/common/menu/LogoutButton";
import {clsx} from "clsx";

export default function Menu() {
    return (
        <menu className={clsx("flex")}>
            <LogoutButton className={"justify-end mr-2"} />
        </menu>
    );
}
