import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { IArtist } from "../models/Artist.interface";
import { Song } from "../models/Song.interface";
import { SongsBySearch } from "../models/SongsBySearch.interface";

export const ShazamCoreApi = createApi({
  reducerPath: "ShazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        process.env.NEXT_PUBLIC_SHAZAM_API_KEY as string
      );
      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getTopCharts: builder.query<Song[], string>({
      query: () => "/charts/world",
    }),
    getSongDetails: builder.query<Song, string | string[] | undefined>({
      query: (sondId) => `/tracks/details?track_id=${sondId}`,
    }),
    getRelatedSongs: builder.query<Song[], string | string[] | undefined>({
      query: (songId) => `/tracks/related?track_id=${songId}`,
    }),
    getArtistDetails: builder.query<IArtist, string | string[] | undefined>({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
    getSongsBySearch: builder.query<
      SongsBySearch,
      string | string[] | undefined
    >({
      query: (search) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${search}`,
    }),
    getSongsByCountry: builder.query<Song[], string>({
      query: (countryCode) => `/charts/country?country_code=${countryCode}`,
    }),
    getSongsByGenre: builder.query<Song[], string>({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
  useGetArtistDetailsQuery,
  useGetSongsBySearchQuery,
  useGetSongsByCountryQuery,
  useGetSongsByGenreQuery,
  util: { getRunningOperationPromises },
} = ShazamCoreApi;

export const {
  getSongsByGenre,
  getTopCharts,
  getSongDetails,
  getRelatedSongs,
  getArtistDetails,
  getSongsBySearch,
  getSongsByCountry,
} = ShazamCoreApi.endpoints;
