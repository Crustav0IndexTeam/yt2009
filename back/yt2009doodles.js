/*
yt2009 doodles

property names inside of doodles variable are mm-dd!!
*/
const doodles = {
    "2-1": "Crustav0IndexTeam/yt2009/back/pic_youtubelogo_123x63 (1).gif",
    "2-14": "Crustav0IndexTeam/yt2009/back/pic_youtubelogo_123x63 (1).gif",
    "3-13": "Crustav0IndexTeam/yt2009/back/pic_youtubelogo_123x63 (1).gif",
    "3-17": "Crustav0IndexTeam/yt2009/back/pic_youtubelogo_123x63 (1).gif",
    "4-15": "Crustav0IndexTeam/yt2009/back/pic_youtubelogo_123x63 (1).gif",
    "5-16": "Crustav0IndexTeam/yt2009/back/pic_youtubelogo_123x63 (1).gif",
    "6-12": "Crustav0IndexTeam/yt2009/back/pic_youtubelogo_123x63 (1).gif",
    "7-4": "Crustav0IndexTeam/yt2009/back/pic_youtubelogo_123x63 (1).gif",
    "7-20": "Crustav0IndexTeam/yt2009/back/pic_youtubelogo_123x63 (1).gif",
    "10-9": "Crustav0IndexTeam/yt2009/back/pic_youtubelogo_123x63 (1).gif",
    "10-12": "Crustav0IndexTeam/yt2009/back/pic_youtubelogo_123x63 (1).gif",
    "10-31": "Crustav0IndexTeam/yt2009/back/pic_youtubelogo_123x63 (1).gif",
    "11-17": "Crustav0IndexTeam/yt2009/back/pic_youtubelogo_123x63 (1).gif",
    "christmas": "/Crustav0IndexTeam/yt2009/back/pic_youtubelogo_123x63 (1).gif"
}

const replacableCodes = [
    `<button id="logo" class="master-sprite"></button>`,
    `<button id="logo" class="master-sprite" title=""></button>`,
    `<button id="logo" class="master-sprite" title="" onclick="window.top.location.href='/'; return false;"></button>`,
]

module.exports = {
    "getDoodle": function() {
        let d = new Date()
        let date = (d.getMonth() + 1) + "-" + d.getDate()
        if(d.getMonth() == 11 && (d.getDate() >= 21 && d.getDate() <= 25)) {
            date = "christmas"
        }

        return doodles[date] || false;
    },

    "applyDoodle": function(code, req) {
        if(this.getDoodle()
        && (!req || !req.headers || !req.headers.cookie
        || !req.headers.cookie.includes("no_doodles"))) {
            let d = this.getDoodle()
            let dc = `<img id="logo" src="${d}" style="width: auto;height: auto;"/>`
            replacableCodes.forEach(c => {
                code = code.replace(c, dc)
            })
        }

        return code;
        
    }
}