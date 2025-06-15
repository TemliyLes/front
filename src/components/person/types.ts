
type TChildren = {
    id: number,
    type: string,
    text: string
}

type TPhoto = {
    url: string,
}

type TAbout = {
    type: string,
    children: TChildren[]
}

type CardData = {
    id: number,
    documentId: string,
    name: string,
    about: TAbout[],
    photo: TPhoto
}

export type { CardData }