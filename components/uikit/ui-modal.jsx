import { clsx } from "clsx"
import { createPortal } from "react-dom"

export function UiModal({width = "md", className, children, isOpen=false, onClose}){
    const handleClick = (e) => {
        const inModal = console.log(e.target.closest('[data-id=modal]'))
        if(inModal){
            return;
        }
        onClose()
    }
    if(!isOpen){
        return null;
    }
 
    const modal = (
        <div
            onClick={handleClick}
            className={clsx("fixed inset-0 bg-slate-900/60 blackdrop-blur pt-10 pb-10 overflow-y-auto", className)}>
            <div
                data-id="modal"
                className={clsx(
                    "bg-white rounded-lg min-h-[320px] mx-auto relative",
                    "flex flex-col",
                    {
                        md: 'max-w-[640px] w-full',
                        full: 'mx-5'
                    }[width]
                )}
            > {children}
                <button
                    onClick={onClose}
                    className="
                        w-8 h-8 rounded flex items-center justify-center transition-colors
                        hover:bg-white/40 bg-white/10 absolute top-0 left-[calc(100%+12px)]"
                >
                    <CrossLightIcon className={"w-4 h-4 text-white"}/> 
                </button>
            </div>
        </div>
    ) 

    return createPortal(modal, document.getElementById("modals"))
}

UiModal.Header = function UiModalHeader({ children, className }){
    return <div className={clsx(className, "px-6 pt-6 pb-4 text-2xl")}>{children}</div>
}

UiModal.Body = function UiModalBody({ children, className }){
    return <div className={clsx(className, "px-6")}>{children}</div>
}

UiModal.Footer = function UiModalFooter({ children, className }){
    return <div className={clsx(className, "mt-auto p-6 flex gap-4 justify-end")}>{children}</div>
}

function CrossLightIcon({className}){
    return (
        <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.7814 24.0001C8.62686 24.0001 8.47578 23.9543 8.34728 23.8685C8.21878 23.7826 8.11862 23.6606 8.05948 23.5178C8.00033 23.3751 7.98486 23.218 8.01502 23.0664C8.04518 22.9148 8.11961 22.7756 8.2289 22.6664L22.6664 8.22885C22.8129 8.08232 23.0117 8 23.2189 8C23.4261 8 23.6249 8.08232 23.7714 8.22885C23.9179 8.37539 24.0002 8.57413 24.0002 8.78135C24.0002 8.98858 23.9179 9.18732 23.7714 9.33385L9.3339 23.7714C9.26141 23.844 9.17528 23.9016 9.08047 23.9408C8.98565 23.9801 8.88402 24.0002 8.7814 24.0001Z"
                fill="currentColor"
            />
            <path 
                d="M23.2189 24.0001C23.1163 24.0002 23.0146 23.9801 22.9198 23.9408C22.825 23.9016 22.7389 23.844 22.6664 23.7714L8.2289 9.33385C8.08236 9.18732 8.00004 8.98858 8.00004 8.78135C8.00004 8.57413 8.08236 8.37539 8.2289 8.22885C8.37543 8.08232 8.57417 8 8.7814 8C8.98862 8 9.18736 8.08232 9.3339 8.22885L23.7714 22.6664C23.8807 22.7756 23.9551 22.9148 23.9853 23.0664C24.0154 23.218 24 23.3751 23.9408 23.5178C23.8817 23.6606 23.7815 23.7826 23.653 23.8685C23.5245 23.9543 23.3734 24.0001 23.2189 24.0001Z" 
                fill="currentColor"
            />
        </svg>  
    )
}