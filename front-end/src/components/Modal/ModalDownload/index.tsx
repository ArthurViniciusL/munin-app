
import { usedialog } from '@/hooks/usedialog';
import { Button } from '../../Button';
import styles from './dialogDownload.module.css';
import { IconClose, IconImageDown } from '@/modules/app.modules';
import { useState } from 'react';
import Image from 'next/image';

interface DownloadImageProps {
    image: any;
    children: React.ReactNode;
    onClick: () => void;
}

export function dialogDownload({ image, children, onClick }: DownloadImageProps) {

    // const { isOpen, setdialogState, download, setDownload } = usedialog();

    const [indialog, setIndialog] = useState<boolean>(false);

    function handleBackground() {
        if (!indialog) {
            // setdialogState(false);
        }
    }

    function handleIndialog(state: boolean) {
        if (state) {
            //console.log('entrou no dialog: ', 'ok')
            setIndialog(true);
        }

        else {
            //console.log('saiu do dialog: ', 'ok')
            setIndialog(false);
        }
    }

    function handleCancel() {
        // setdialogState(false);
        // setDownload(false);
    }

    function handleConfirm() {
        // setDownload(true);
        // setTimeout(setdialogState(false), 1000);
    }

    return (
        <>
            {/* 
            {isOpen && !download ?
                
                : <></>
            }
            <>
                <div onClick={onClick}>
                    {children}
                </div>
            </>
            */}
        </>
    );
}