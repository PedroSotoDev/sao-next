const BASE_PATH = process.env.NODE_ENV === "production" ? "/sao-next" : "";

export function getImagePath(src: string): string {
    
    if (/^(https?:)?\/\//.test(src) || src.startsWith("data:") || src.startsWith("blob:")) {
        return src;
    }

    const path = src.startsWith("/") ? src : `/${src}`;

    return `${BASE_PATH}${path}`;
}