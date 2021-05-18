const KEY = 'AIzaSyCwViRnNZ3QgTjo2C4cD13m2Wl8Cslz9sw'

export const url = {
    search: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${KEY}&maxResults=3`,
    channel: `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&key=${KEY}`,
    video: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&key=${KEY}`
}
