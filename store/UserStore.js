import create from 'zustand';

//Zustand er bare et hjelpebibliotek, 3. partsbibliotek
//deklarerer en global hook ved hjelp av Zustand
export const useUserStore = create(set => ({
    //oppretter et tomt user-objekt
    user  : {},
    //funksjon for å endre user
    setUser: (user) => set(({ user: user})),
}))
