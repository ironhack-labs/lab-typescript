export interface Person{
    name: String
}

export interface SocialNetwork{
    title:String;
    getUsers():Person[];

}