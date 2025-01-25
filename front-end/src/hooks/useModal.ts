
import { DownloadImageContext } from "@/context/DownloadImageProvider";
import { useContext } from "react";

export function useModal() {
    return useContext(DownloadImageContext);
}