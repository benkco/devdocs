export interface UserInterface {
    _id: readonly string
    Uid: readonly string
    Name: string
    Email: readonly string
    Avatar: string
    Plan: string
    Role: string
    Created_At: readonly Date
    Updated_At: readonly Date
}

export interface AnalyticInterface {
    _id: readonly string
    Browser: readonly string
    Device: readonly string
    Country: readonly string
    Sytem: readonly string
    City: readonly string
    Ip: readonly string
    Created_At: readonly Date
}

export interface VisitInterface {
    _id: readonly string
    Browser: readonly string
    Device: readonly string
    Country: readonly string
    Sytem: readonly string
    City: readonly string
    Ip: readonly string
    Created_At: readonly Date
}

export type ProfileInterface = {
    Info: {
        Name: string,
        Surname: string,
        Category: string,
        Avatar: string,
    },
    Content: {
        Bio: string,
        Description: string,
    },
    Company: {
        Position: string,
        Name: string,
        Website: string,
    },
    Location: {
        City: string,
        Country: string,
    },
    Socials: [
        {
            Id: number,
            Name: string,
            Link: string,
        }
    ],
    Customizations: {
        Custom_Color: string,
        Gradient_Color: string,
        Text_Color: string,
        Label_Color: string,
        Font_Family: string,
        Border_Color: string
    },
    Created_At: Date,
    Updated_At: Date
}

export interface ResponderInterface {
    res: NextApiResponse
    success: boolean
    data?: any
    translation: string
}

export interface DomainInterface {
    Domain: string
}

export interface DomainDropDownI {
    id: number,
    title: string,
    component: null | ReactNode
}
