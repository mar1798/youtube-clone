const KEY = 'AIzaSyCwViRnNZ3QgTjo2C4cD13m2Wl8Cslz9sw'

export const url = {
    videos: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&key=${KEY}&maxResults=20`,
    search: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${KEY}&maxResults=20`,
    channel: `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&key=${KEY}`,
    video: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&key=${KEY}`,
}
