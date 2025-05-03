interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export function Button({ children, className, onClick, onMouseEnter, onMouseLeave }: ButtonProps) {
    return (
        <button onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={className}>
            {children}
        </button>
    )
}