import { DownloadImageContext } from "@/context/DownloadImageContext";
import { useContext } from "react";

export function useModal() {
    return useContext(DownloadImageContext);
}