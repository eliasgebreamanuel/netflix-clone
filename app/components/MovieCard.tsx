interface iAppProps {
    title: string;
    overview: string;
    movieId: string;
    watchList: boolean;
    watchListId: string;
    youtubeUrl: string;
}
export function MovieCard({movieId, overview, title, watchListId, watchList, youtubeUrl}: iAppProps) {
    return <h1>Hello from MovieCard</h1>
}