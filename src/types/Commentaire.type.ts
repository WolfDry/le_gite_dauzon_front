export type Comment = {
    id: number
    verif: boolean
    created: Date
    commentaire: string
    name: string
    note: number
}
export type UpdateCommentaire = {
    verif?: boolean;
    commentaire?: string;
    nom?: string;
    prenom?: string;
    note?: number;
}