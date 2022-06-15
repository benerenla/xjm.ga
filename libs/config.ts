export const CONFIG = {
    USER_ID : '760499240966684683',
    items: [{ title: "/home", href: "/" }, { title: "/projects", href: "/projects" }] as INavbarItems[]
}

export interface INavbarItems {
    title: string;
    href: string;
}