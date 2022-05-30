import { gql } from "@apollo/client";

export const LOAD_INDEX = gql`
    query ($page: Int, $perPage: Int, $search: String) {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media(search: $search, type: ANIME, genre_not_in: ["hentai"]) {
                id
                title {
                    english
                    native
                    romaji
                }
                coverImage {
                    medium
                }
                status
                averageScore
            }
        }
    }
`;

export const GET_DETAIL_ANIME = gql`
    query ($id: Int) {
        Page {
            media(type: ANIME, id: $id) {
                id
                title {
                    english
                    native
                    romaji
                }
                description
                episodes
                genres
                averageScore
                coverImage {
                    medium
                }
                bannerImage
            }
        }
    }
`;
