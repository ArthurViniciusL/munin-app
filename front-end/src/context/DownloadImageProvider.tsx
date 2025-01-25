import { createContext, useState } from "react";

export const DownloadImageContext = createContext<any>({});

interface ModalProviderProps {
    children: React.ReactNode;
}

export function DownloadImageProvider({ children }: ModalProviderProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [download, setDownload] = useState<boolean>(false);

    function handleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <DownloadImageContext.Provider
            value={{ isOpen, handleModal, download, setDownload }}
        >
            {children}
        </DownloadImageContext.Provider>
    );
}