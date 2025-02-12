import { DownloadImageContext } from "@/context/DownloadImageContext";
import { useContext } from "react";

export function usedialog() {
    return useContext(DownloadImageContext);
}