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

export type BranchDetails = {
    branchName: string,
    branchAddress: string,
    branchPhone?: string,
    branchEmail?: string,
    branchMapUrl?: string,
    branchPhoto?: string
}

export type TeamMemberDetails = {
    name: string,
    position: string,
    profileImage?: string,
    contact: SocailMediaLinks
}

export type ContactFormState = {
    success: boolean;
    message: string;
};