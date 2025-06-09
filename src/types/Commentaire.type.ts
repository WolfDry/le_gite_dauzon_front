export type Commentaire = {
    commentaire: string;
    nom: string;
    prenom: string;
    note: number;
    date: string;
}

export type UpdateCommentaire = {
    verif?: boolean;
    commentaire?: string;
    nom?: string;
    prenom?: string;
    note?: number;
}