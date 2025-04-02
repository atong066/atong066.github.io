interface props {
    src: string,
    className?: string
}
export default function ProfilePicture({ src, className }: props) {
    return (
        <div className={`rounded-full size-10 overflow-hidden ${className}`}>
            <img className="w-full h-full" src={src} alt="" />
        </div>
    )
}