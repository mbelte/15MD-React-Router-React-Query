
type CharacterRequestInfo = {
    count: number,
    next: string | null,
    pages: number,
    prev: string | null,
}

type CharacterBasicInfo = {
    id: number,
    name: string,
    species: string,
    status: "Alive" | "Dead" | "unknown",
    image: string,
}

type CharacterToDisplay = CharacterBasicInfo & {
    location: {
        name: string,
        url: string
    },
    origin: string,
}

type CharacterRequestResults = CharacterBasicInfo & {
    created: string,
    episode: string[],
    gender: string,
    id: number,
    origin: {
        name: string,
        url: string,
    },
    location: {
        name: string,
        url: string,
    },
    type: string,
    url: string,
}

type CharacterRequest = {
    info: CharacterRequestInfo,
    results: CharacterRequestResults[],
}

type EpisodeRequest = {
    air_date: string,
    characters: string[],
    created: string,
    episode: string,
    id: number,
    name: string,
    url: string,
}

export type {
    CharacterRequestInfo,
    CharacterToDisplay,
    CharacterRequestResults,
    CharacterRequest,
    EpisodeRequest
}