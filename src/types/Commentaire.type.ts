export type Comment = {
    id?: number
    verif: boolean
    created?: string
    commentaire: string
    name: string
    note: number
}
export type UpdateCommentaire = {
    verif?: boolean;
    commentaire?: string;
    name?: string;
    note?: number;
}