
import { useModal } from '@/hooks/useModal';
import { Button } from '../../Button';
import styles from './ModalDownload.module.css';
import { IconDownload } from '@/modules/app.modules';

interface DownloadImageProps {
    children: React.ReactNode;
}

export function DownloadImage({ children }: DownloadImageProps) {

    const { isOpen, handleModal, setDownload } = useModal();

    function handleCancel() {
        handleModal();
        setDownload(false);
    }

    function handleConfirm() {
        setDownload(true);
    }
    
    return (
        <>
            {isOpen ?
                <main className={`${styles.container} art:bg:black:20%`} >
                    <div className={`${styles.content} art:bg:white-02 art:border:r-02`}>
                        <h2 className='art:font:subtitle-02 art:font:semibold'>Baixar imagem?</h2>
                        <IconDownload size={30} />
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
                </main>
                : <></>
            }
            <>
                {children}
            </>
        </>
    );
}