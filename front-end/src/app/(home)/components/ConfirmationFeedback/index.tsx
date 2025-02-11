import Image from "next/image";
import astronaut from "@/assets/images/send_image.svg";

export function Confirmation() {
    return (
        <>
            <Image className='mac:motion:ease-in-out-infinite:[R:-10deg]' src={astronaut} width={300} alt='astronaut send image' priority={true} />
            <p className="art:font:semibold">
                Imagem enviada com sucesso!
            </p>
        </>
    );
}