// interface IAudioPlayer {
//     audioVolume: number;
//     songDuration: number;
//     song: string;
//     details: IDetails;

// }

// interface IDetails {
//     author: string;
//     year: number;
// }


// const audioPlayer: IAudioPlayer = {
//     audioVolume: 90,
//     songDuration: 36,
//     song: 'Mess',
//     details: {
//         author: 'ed Sheeran',
//         year: 2015
//     }
// }

// const song = 'New Song';

// const { 
//     song: anotherSong,
//     songDuration: duration,
//     details
// } = audioPlayer;

// const { author, year } = details

// console.log(song);
// console.log('Song', anotherSong);
// console.log('Duration', duration);
// console.log('Author', author);
// console.log('Year', year);


const dbz: string[] = ['Goku', 'Vegeta', 'Trunk'];
const [ p1, p2, p3 ] = dbz;

const [ , , personaje3 = 'Not Found' ]  = dbz; 

console.log('Personaje 3: ', dbz[3] || 'No hay personaje');
console.log('Personaje 3:', p3);
console.log('Personaje 3:', personaje3);

export {}