'use client';

import { createContext, useContext, useEffect, useState } from "react";

/* export const UploadContext = createContext<{
    uploadIsConfirmed: boolean;
    confirmUpload: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    uploadIsConfirmed: false,
    confirmUpload: () => { },
}); */

//export const UploadContext = createContext<any>({});

interface UploadContextType {
    uploadIsConfirmed: boolean;
    setUploadIsConfirmed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UploadContext = createContext<UploadContextType | undefined>(undefined);

interface UploadProviderProps {
    children: React.ReactNode;
}

export function UploadProvider({ children }: UploadProviderProps) {

    const [uploadIsConfirmed, setUploadIsConfirmed] = useState<boolean>(false);

    function confirmUpload() {
        setUploadIsConfirmed(true);
    }
    
    console.log(uploadIsConfirmed);
    
    return (
        <UploadContext.Provider value={{ uploadIsConfirmed, setUploadIsConfirmed }}>
            {children}
        </UploadContext.Provider>
    );
}

export const useUploadContext = () => {
    const context = useContext(UploadContext);
    if (!context) {
        throw new Error("useUploadContext must be used within an UploadProvider");
    }
    return context;
};
