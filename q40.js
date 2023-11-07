/**Album:
 
Write a function called make_album() that builds a Object describing a music album.

The function should take in an artist name and an album title, and it should return
a Object containing these two pieces of information.

Use the function to make three dictionaries representing different albums.

Print each return value to show that Objects are storing the album information correctly.

Add an optional parameter to make_album() that allows you to store the number of tracks on an album.

If the calling line includes a value for the number of tracks, add that value to the album’s Object.

Make at least one new function call that includes the number of tracks on an album. */
function make_album(artist, title, tracks) {
    let album = {
        Artist: artist,
        Title: title,
    };
    if (tracks !== undefined) {
        album.Tracks = tracks;
    }
    return album;
}
console.log(make_album("Fakhir", "Dil Ruba"));
console.log(make_album("Alamgir", "Mausam"));
console.log(make_album("Janoon", "Azadi", 10));
export {};
// interface album {
//     artist: string;
//     title: string;
//     tracks?: number;
// }
// function make_album(artist: string, title: string, tracks?: number): album {
//     let Album: album = {
//         artist: artist,
//         title: title,
//     };
//     if (tracks !== undefined) {
//         Album.tracks = tracks;
//     }
//     return Album;
// }
// console.log(make_album('Artist 1', 'Album Title 1'));
// console.log(make_album('Artist 2', 'Album Title 2', 12));
// console.log(make_album('Artist 3', 'Album Title 3'));
