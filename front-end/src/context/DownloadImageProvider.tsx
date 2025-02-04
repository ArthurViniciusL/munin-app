import { createContext, useState } from "react";

export const DownloadImageContext = createContext<any>({});

interface ModalProviderProps {
    children: React.ReactNode;
}

export function DownloadImageProvider({ children }: ModalProviderProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [download, setDownload] = useState<boolean>(false);

    function setModalState(state:boolean) {
        setIsOpen(state);
    }
    
    return (
        <DownloadImageContext.Provider
            value={{ isOpen, setModalState, download, setDownload }}
        >
            {children}
        </DownloadImageContext.Provider>
    );
}