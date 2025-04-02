
export function FlexContainer({ children, alignCenter, className, spaceBetween }: any) {
    return (
        <div role="container" className={`flex gap-2 flex-wrap ${alignCenter && "justify-center"} ${spaceBetween && "justify-between"} ${className}`}>
            {children}
        </div>
    )
}