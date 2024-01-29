import { ReactNode, ReactNode } from 'react'
import { DomainInterface, ProfileInterface } from '@/ts'

export type Languages = 'en_US'
export type NotificationTypes = 'success' | 'error' | 'warning'
export type ProfileFieldsTypes =
    | 'Info'
    | 'Content'
    | 'Company'
    | 'Location'
    | 'Socials'
    | 'Customizations'

export type OnlyChildrenTypes = {
    [key: string]: ReactNode | string
}

export type BlogItemTypes = {
    author: string
    github: string
    title: string
    date: string
    emoji: string
    language: string
    tags: string[]
}

export type FormOnChangeTypes = {
    Profile: ProfileInterface
    SetProfile: Function
    target: ProfileFieldsTypes
    property: string // TODO: fix property types, include them all, like Fields types
    value: string
    index?: number
}

export type FormOnDeleteTypes = {
    Profile: ProfileInterface
    SetProfile: Function
    target: 'Socials'
    index: number
}

export type SocialMediaTypes = {
    Id: number
    Name: string
    Link: string
}

export type FormOnAddObjectTypes = {
    Profile: ProfileInterface
    SetProfile: Function
    target: 'Socials'
    object: SocialMediaTypes
}

export type ProfileLayoutTypes = {
    children: any
    title: string
}

export type AdminWrapperTypes = {
    page: any
    title: string
    pageWrapClasses: string
}

export type AdminLayoutTypes = {
    children: any
    title: string
    pageWrapClasses?: string
}

export type BreaklineTypes = {
    show: boolean
    className?: string
}

export type TranslationsTypes = {
    [key: string]: string
}

export type AnalyticCardTypes = {
    name: string
    value: string | ReactNode | number
}

export type PageHeaderTypes = {
    translation: string
}

export type DashboardHeaderType = {
    icon: ReactNode
    translation: string
}

export type AnalyticTypes = {
    _id?: string
    counts: AnalyticsType
    views: AnalyticsType
}

export type ErrorTypes = {
    mode: '404' | '500'
}

export type AdminSidebarItemTypes = {
    id: number
    name: string
    icon: ReactNode
    href: string
    hrefRaw: string
    published: boolean
}

export type MetaTagsTypes = {
    title: string | undefined
}

export type isProfileType = {
    isProfile: boolean
}

export type TableHeadersType = {
    title: string | ReactNode
}

export type TableRowTypes = {
    row: TableRowsType
}

export type TableHeaderListTypes = {
    title: string
}

export interface TableHeaderTypes {
    headers: TableHeadersType[]
}

export type TableTypes = {
    headers: TableHeadersType[]
    rows: TableRowsType[]
    loading: boolean
    sentryRef: any
    hasMore: boolean
}

export type ListLoadingTypes = {
    show: boolean
    classes?: string
    columns: number
    rows: number
}

export type ListNoneTypes = {
    show: boolean
    classes?: string
}

export type ListEndTypes = {
    show: boolean
}

export type MenuItemTypes = {
    navitem: AdminSidebarItemTypes
    router: any
    path: string
    active: Function
}

export type TableFiltersTypes = {
    target: string
    loading: boolean
    filters: ListFiltersType
    setFilters: Function
    search: string
    setSearch: Function
    isFiltersOpen: boolean
    setFiltersOpen: Function
}

export type TagColumnTypes = {
    data: string
    color: string
    depth?: string
}

export type InputTypes = {
    placeholder: string
    value: string
    setValue: any
    label?: string
    classes?: string
    type: string
    input: 'input' | 'textarea'
    rows?: number
    inputStyle?: string
}

export type ActionsColumnTypes = {
    viewLink?: string
    editLink?: string
}

export type FilterButtonTypes = {
    isFiltersOpen: boolean
    setFiltersOpen: Function
}

export type SortFilterTypes = {
    filters: any
    setFilters: Function
}

export type IconHandlerNotificationTypes = {
    type: NotificationTypes
}

export type AddButtonTypes = {
    targetTranslation: string
}

export type IconTypes = {
    icon?: ReactNode
    text?: string
    href?: string
    loading?: boolean
    size?: string
    color?: string
    className?: string
    classes?: string
    stroke?: string
    onClick?: () => void
    mode?: string
}

export type SidebarItemTypes = {
    id: number
    name: string
    icon: ReactNode
    href: string
    hrefRaw: string
    published: boolean
}

export type ListFilterTypes = {
    filters?: Record<
        string | number,
        string | number | boolean | undefined | object
    >
    sort?: Record<
        string | number,
        string | number | boolean | undefined | object
    >
    select?: Record<
        string | number,
        string | number | boolean | undefined | object
    >
    offset?: number
    limit?: number
}

export type FilterHeaderType = {
    loading: boolean
    translation: string
    handler: () => void
}

export type FilterItemTypes = {
    object:
        | 'additionalData.created_at'
        | 'additionalData.views'
        | 'additionalData.sold'
        | 'data.category'
        | 'data.country'
    filters: ListFiltersType
    translation?: string
    text?: string
    setFilters: Function
    value: number | string
    setFiltersOpen: Function
    mode: 'sort' | 'filter'
}

export type AuthStateTypes = {
    User: UserInterface
    Auth: boolean
    Loading: boolean
    LoginUser: (payload: any) => void
    LogoutUser: () => void
}

export type NotificationStateTypes = {
    Notifications: Array<NotificationItem>
    OpenNotification: (payload: any) => void
    CloseNotification: (payload: any) => void
}

export type ConfirmationStateTypes = {
    Title: string
    Message: string
    Type: ConfirmationTypes
    Open: boolean
    onConfirm: Function
    onCancel: Function
    OpenConfirmation: (payload: any) => void
    CancelConfirmation: () => void
}

export type DropdownTypes = {
    userDropdownOpen: boolean
    setUserDropdownOpen: Function
}

export type DropdownIconTypes = {
    action?: () => void
    href?: string
    text: string
    a?: string
}

export type FiltersModalTypes = {
    isFiltersOpen: boolean
    children: ReactNode
}

export type ProfileStateTypes = {
    Profile: ProfileInterface
    SetProfile: (newUserInfo: ProfileInterface) => void
}

export type TableFiltersSearchTypes = {
    search: string
    setSearch: Function
    placeholder: string
}

export type HeaderDesignerFormProps = {
    title: string
    description: string
    className?: string
    icon: ReactNode
}

export type ExtentionsData = {
    id: number
    name: string
    rating: number
    description: string
    subscription: string
    reviews: number
}

export type UserStateType = {
    User: UserInterface | false
    Loading: boolean
    LoginUser: (payload: any) => void
    LogoutUser: () => void
    PropertyChange: (payload: any) => void
}

export type RequestType = {
    method: 'POST'
    headers: Record<string, string>
    body: string
}

export type RequestProps = {
    target: string
    token: string | null
    payload: any
}

export type AuthUserProps = {
    token: string
    name: string
    email: string
    avatar: string
    uid: string
}

export type RequestResponseTypes = {
    success: boolean
    data: any
    message: string
}

export type SecondaryColumnTypes = {
    data: string | number
}

export type SelectOptionType = {
    id: number
    value: string
    name: string
}

export type SelectType = {
    options: SelectOptionType[]
    setValue: any
    label?: string
    disabledOption?: string
    selectStyle?: string
}

export type DomainStateType = {
    Domain: DomainInterface
    SetDomain: (newDomainName: string) => void
}

export type DomainChange = {
    Domain: DomainInterface
    SetDomain: Function
    target: string
    value: string
}

export type DropdownActions = {
    id: number
    title: string
    description?: string
    icon: ReactNode
    onClick?: () => void
    href?: any
}

export type OtherLinks = {
    id: number
    link: string
    icon: ReactNode
}

export type DropdownType = {
    dropDownList: DropdownActions[]
    otherLinks?: OtherLinks[]
    type: string
}

export type HeaderLinks = {
    id: number
    name: string
    path: string
    modal?: ReactNode
}

export type HeaderHome = {
    headerLinks: HeaderLinks[]
}

export type AdminPageHeaderComponentProps = {
    translation: string
}

export type Button = {
    text: string
    color: string
    onClick: () => void
    classes?: string
}

export type Icons = {
    name: string
    icon: ReactNode
}

export type IconsList = {
    collection: string
    dimensions: string
    description: string
    icons: Icons[]
}

export type IcebergList = {
    id: number
    image: string
    title: string
    text: string
}

export type TwitterAccount = {
    accountName: string
    username: string
}

export type TweetList = {
    tweet: string
    account: TwitterAccount
}
