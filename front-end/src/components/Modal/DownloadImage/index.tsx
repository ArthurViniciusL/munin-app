
import { useModal } from '@/hooks/useModal';
import { Button } from '../../Button';
import styles from './ModalDownload.module.css';
import { IconClose, IconImageDown } from '@/modules/app.modules';
import { useState } from 'react';

interface DownloadImageProps {
    children: React.ReactNode;
}

export function DownloadImage({ children }: DownloadImageProps) {

    const { isOpen, setModalState, download, setDownload } = useModal();

    const [inModal, setInModal] = useState<boolean>(false);

    function handleBackground() {
        if (!inModal) {
            setModalState(false);
        }
    }

    function handleInModal(state: boolean) {
        if (state) {
            console.log('entrou no modal: ', 'ok')
            setInModal(true);
        }

        else {
            console.log('saiu do modal: ', 'ok')
            setInModal(false);
        }
    }

    function handleCancel() {
        setModalState(false);
        // setDownload(false);
    }

    function handleConfirm() {
        setDownload(true);
        // setTimeout(setModalState(false), 1000);
    }

    return (
        <>
            {isOpen && !download ?
                <main onClick={handleBackground} className={`${styles.container} art:bg:black:20%`} >

                    <div className={`${styles.box}`}>
                        {/* 
                        <span className={styles.boxBtnClose} >
                            <Button onClick={handleCancel} className={`
                                ${styles.btnClose}
                                art:bg:white-02
                                art:font:red-02
                                art:hover:bg:red-02
                                art:hover:font:white-02
                            `}>
                                <IconClose size={20} />
                            </Button>
                        </span>
                    */}
                        <div className={styles.btnCloseContent}>
                            <Button className={`art:bg:white-02 art:font:black-02 art:hover:bg:red-02 art:hover:font:white-01`} onClick={handleCancel}>
                                <IconClose size={14} />
                            </Button>
                        </div>

                        <div
                            onMouseEnter={() => handleInModal(true)}
                            onMouseLeave={() => handleInModal(false)}
                            className={`
                                    ${styles.modalContent}
                                    art:bg:white-02
                                    art:border:r-02
                                `}
                        >
                            <h2 className='art:font:subtitle-02 art:font:semibold'>Baixar imagem?</h2>
                            <IconImageDown size={30} className={`art:font:black-03 art:bg:white-03 art:p-02 art:border:r-02`} />
                            <div className={styles.buttons}>
                                <Button
                                    onClick={handleCancel}
                                    className='
                                art:btn:medium
                                art:font:semibold
                                art:font:red-01
                                art:bg:red:10%
                                art:hover:bg:red-02
                                art:hover:font:white-01
                            '>
                                    Cancelar
                                </Button>

                                <Button
                                    onClick={handleConfirm}
                                    className='
                                    art:btn:medium
                                    art:font:semibold

                                    art:no-dark:ft:black-01
                                    art:bg:white-03

                                    art:hover:bg:yellow-02
                                    art:hover:font:white-01

                                    art:hover:border:remove
                                '>
                                    Baixar
                                </Button>
                            </div>
                        </div>

                    </div>
                </main>
                : <></>
            }
            <>
                {children}
            </>
        </>
    );
}