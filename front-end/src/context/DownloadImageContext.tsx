import { createContext, useState } from "react";

export const DownloadImageContext = createContext<any>({});

interface dialogProviderProps {
    children: React.ReactNode;
}

export function DownloadImageProvider({ children }: dialogProviderProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [download, setDownload] = useState<boolean>(false);

    function setdialogState(state:boolean) {
        setIsOpen(state);
    }
    
    return (
        <DownloadImageContext.Provider
            value={{ isOpen, setdialogState, download, setDownload }}
        >
            {children}
        </DownloadImageContext.Provider>
    );
}