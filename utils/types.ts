export type NavItems = {
    label: string;
    href?: string;
    children?: NavItems[];
}

export type CommonCardProps = {
    heading: string,
    description: string,
    videoUrl?: string,
    cardDetails?: {
        cardTitle?: string,
        cardDescription?: string,
        cardImage?: string,
    }[]
}

export type ServicePageDetails = {
    pageUrl: string,
    pageDetails: CommonCardProps
}

export type ProductPageDetails = {
    pageUrl: string,
    pageDetails: CommonCardProps
}

export type SocailMediaLinks = {
    facebook?: string,
    instagram?: string,
    linkedin?: string
}
