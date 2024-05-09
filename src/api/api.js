export async function getSpotifyToken() {
    try {
        const data = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + import.meta.env.VITE_CLIENT_ID + '&client_secret=' + import.meta.env.VITE_CLIENT_SECRET
            }).then(res=> res.json()).then(data => {
            return data
        })
        return data
    } catch {
        return {error: "Something went wrong"}
    }
}

export async function getSpotifyAlbum(token) {
    try {
        const data = await fetch('https://api.spotify.com/v1/albums/5o8angNlspr4TfgRskQvsN', {
            method: 'GET',
            headers: {
                'Authorization' : `Bearer ${token}`
            },
            }).then(res=> res.json()).then(data => {
            return data
        })
        return data
    } catch {
        return {error: "Something went wrong"}
    }
}