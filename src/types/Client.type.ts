export type Client = {
    "prenom": string,
    "nom": string,
    "email": string,
    "telephone": string
}

export type UpdateClient = {
    "prenom"?: string,
    "nom"?: string,
    "email"?: string,
    "telephone"?: string  
}