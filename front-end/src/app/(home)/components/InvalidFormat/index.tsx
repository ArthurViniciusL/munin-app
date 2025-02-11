import { CircleOff } from "lucide-react";

export function InvalidFormat() {
    return (
        <div>
            <CircleOff className="art:font:red-01" />
            <p className="
                  art:font:black-03
                  art:font:semibold
                  ">
                Formato de arquivo inválido!
            </p>
        </div>
    );
}