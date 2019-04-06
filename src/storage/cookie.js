export function getCookie(name: string): (string | null) {
    const re = new RegExp(`${name}=([^;]+)`);
    const value = typeof document !== 'undefined' ? re.exec(document.cookie) : null;
    return (value != null) ? decodeURI(value[1]) : null;
}