const games = [
    {
        "gameID": "612",
        "steamAppID": null,
        "cheapest": "15.95",
        "cheapestDealID": "0f%2B4gT2VVUn4UcmFzPxXnuqoXKAOYoJ5mpFZRWNyohc%3D",
        "external": "LEGO Batman",
        "internalName": "LEGOBATMAN",
        "thumb": "https://cdn.fanatical.com/production/product/400x225/105f34ca-7757-47ad-953e-7df7f016741e.jpeg"
    },
    {
        "gameID": "167613",
        "steamAppID": null,
        "cheapest": "15.95",
        "cheapestDealID": "2XSMlnYtPjLoKI9g2vhZch9deHZ%2BE%2BpL7IoBprkWtgM%3D",
        "external": "LEGO Batman 2",
        "internalName": "LEGOBATMAN2",
        "thumb": "https://cdn.fanatical.com/production/product/400x225/4cf0701e-77bf-4539-bda7-129ab3e81f8b.jpeg"
    },
    {
        "gameID": "167910",
        "steamAppID": "502820",
        "cheapest": "4.99",
        "cheapestDealID": "Vv2BkWU%2FEoIlHNbYtLBFjLJP8noeCUodfp1IXbQJZ6w%3D",
        "external": "Batman: Arkham VR",
        "internalName": "BATMANARKHAMVR",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/502820/capsule_sm_120.jpg?t=1684483128"
    },
    {
        "gameID": "136751",
        "steamAppID": null,
        "cheapest": "49.99",
        "cheapestDealID": "tWdHYhBxTi%2Boen9dGX6I0I%2BfklTJOHB0SykaLcbpsqk%3D",
        "external": "LEGO Batman Trilogy",
        "internalName": "LEGOBATMANTRILOGY",
        "thumb": "https://hb.imgix.net/fec566de2b11fbe22a542086fb3758652f790551.jpg?auto=compress,format&fit=crop&h=84&w=135&s=1159b53389e7c72d23ef72b5c883d725"
    },
    {
        "gameID": "107598",
        "steamAppID": "208650",
        "cheapest": "3.99",
        "cheapestDealID": "%2BRR8iNYa2ZB%2FIhfZml8B1USYGhQVeYAv0Tl8JPkZ8UM%3D",
        "external": "Batman: Arkham Knight",
        "internalName": "BATMANARKHAMKNIGHT",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/capsule_sm_120.jpg?t=1702934528"
    },
    {
        "gameID": "97941",
        "steamAppID": "209000",
        "cheapest": "3.99",
        "cheapestDealID": "6YSaSYFA%2Bjmj9L4HsCBLThDoYEUhWPQ1ssIZ0t2k%2BnU%3D",
        "external": "Batman: Arkham Origins",
        "internalName": "BATMANARKHAMORIGINS",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/209000/capsule_sm_120.jpg?t=1681234740"
    },
    {
        "gameID": "198190",
        "steamAppID": null,
        "cheapest": "15.99",
        "cheapestDealID": "DnVEZriqpYWyJoC4CN2%2Fe07Su8RZ61DATyjmfNk%2FwKI%3D",
        "external": "Batman Arkham City GOTY",
        "internalName": "BATMANARKHAMCITYGOTY",
        "thumb": "https://us.gamesplanet.com/acache/15/46/1/us/packshot-92b3116edd0584b61a131fa716d0a766.jpg"
    },
    {
        "gameID": "198317",
        "steamAppID": "320795",
        "cheapest": "8.99",
        "cheapestDealID": "g5zcqhDot%2FhT5s%2BIfHgygYaagbxBH09cSgR5xdyVS5g%3D",
        "external": "Batman: Arkham Collection",
        "internalName": "BATMANARKHAMCOLLECTION",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/subs/320795/capsule_sm_120.jpg?t=1636658684"
    },
    {
        "gameID": "2425",
        "steamAppID": "21000",
        "cheapest": "2.99",
        "cheapestDealID": "uCO441gpSEGJP6K9x66LeC7yi7ILolaTmvo8lOMCdIc%3D",
        "external": "LEGO Batman: The Videogame",
        "internalName": "LEGOBATMANTHEVIDEOGAME",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/21000/capsule_sm_120.jpg?t=1681923978"
    },
    {
        "gameID": "126255",
        "steamAppID": "313690",
        "cheapest": "2.99",
        "cheapestDealID": "%2BA3ge6nu7jMLKH1mWUj9rq6VYWRTsENzY%2B08DdMR1FE%3D",
        "external": "LEGO Batman 3: Beyond Gotham",
        "internalName": "LEGOBATMAN3BEYONDGOTHAM",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/313690/capsule_sm_120.jpg?t=1573510385"
    },
    {
        "gameID": "199261",
        "steamAppID": null,
        "cheapest": "39.98",
        "cheapestDealID": "vVlFdl8%2BVYZuEwKlNPy7iUrK49IXdqtNSKDgTrhw4sM%3D",
        "external": "Batman Game of the Year Pack",
        "internalName": "BATMANGAMEOFTHEYEARPACK",
        "thumb": "https://images.greenmangaming.com/9c282eceace145df99f76f0d08febdfe/1fbba96f5f8a4ffbb135e320bcc2346c.jpg"
    },
    {
        "gameID": "155074",
        "steamAppID": "498240",
        "cheapest": "5.99",
        "cheapestDealID": "uSsyxlu%2BfwGY%2FuhQ813YGUsHJmjOSI%2B7wANjAMlsbtw%3D",
        "external": "Batman - The Telltale Series",
        "internalName": "BATMANTHETELLTALESERIES",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/498240/capsule_sm_120.jpg?t=1686747257"
    },
    {
        "gameID": "262248",
        "steamAppID": null,
        "cheapest": "14.99",
        "cheapestDealID": "OKARgK1wBMW6W6Mod6tfJ%2FS582x6mmaZzcsrhKNN9zw%3D",
        "external": "HOT WHEELS - Batman Expansion",
        "internalName": "HOTWHEELSBATMANEXPANSION",
        "thumb": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HOTWHEELSBatmanExpansion_MilestoneSrl_DLC_S2_1200x1600-eb509c7f016c85c206fb702fe7483ebf"
    },
    {
        "gameID": "88269",
        "steamAppID": "213330",
        "cheapest": "2.99",
        "cheapestDealID": "PLK%2BInMYUooml%2FkEGWW%2Bw8MluNwy5q9ZSzKcLaciTU4%3D",
        "external": "LEGO Batman 2: DC Super Heroes",
        "internalName": "LEGOBATMAN2DCSUPERHEROES",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/213330/capsule_sm_120.jpg?t=1681923916"
    },
    {
        "gameID": "214905",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "OTJxScRuO1D3hoLSFDjrWKZKm%2FrcXvSACoDDGijZjrY%3D",
        "external": "Telltale Batman Shadows Mode",
        "internalName": "TELLTALEBATMANSHADOWSMODE",
        "thumb": "https://images.gog-statics.com/e60c4596e9f9a74ca587efcb561b94d0e61e80648bd478a7e74ec8f6cd93c44a_product_tile_117h.webp"
    },
    {
        "gameID": "89107",
        "steamAppID": null,
        "cheapest": "19.99",
        "cheapestDealID": "yPE8bI5eH%2FFwI0L7KaEUTfOzYmWLPj%2F76DHrJEnFWeY%3D",
        "external": "Batman: Arkham City GOTY Edition",
        "internalName": "BATMANARKHAMCITYGOTYEDITION",
        "thumb": "https://hb.imgix.net/08abd0c1b25f2ffc652ae7d6537443cee7eccf94.jpg?auto=compress,format&fit=crop&h=84&w=135&s=6ae6339224425ee6e7b7e48ddea68e1d"
    },
    {
        "gameID": "143771",
        "steamAppID": null,
        "cheapest": "5.00",
        "cheapestDealID": "N0aiUBib2nX52PNBU37BWWfDDD%2FhkbcYlPHCQUxmuQ8%3D",
        "external": "Batman: Arkham Knight - Season Pass",
        "internalName": "BATMANARKHAMKNIGHTSEASONPASS",
        "thumb": "https://sttc.gamersgate.com/images/product/batmantm-arkham-knight-season-pass/cover-180-5d9655.jpg"
    },
    {
        "gameID": "214906",
        "steamAppID": null,
        "cheapest": "14.98",
        "cheapestDealID": "A3hjhaYvTj0ZcYKpdslQ4PASVGEwe0Zwfrd61gkWLXE%3D",
        "external": "Telltale Batman Shadows Edition",
        "internalName": "TELLTALEBATMANSHADOWSEDITION",
        "thumb": "https://images.greenmangaming.com/bb1f86edd3be41e3bb8948c00523e5ef/bd6b538c1a7b4f138b862d3c825ff005.jpg"
    },
    {
        "gameID": "87778",
        "steamAppID": null,
        "cheapest": "16.99",
        "cheapestDealID": "uppD8xHMJiqlB88HAnAVeVuInMdQh8eIXN0r2eaC6VI%3D",
        "external": "Batman Arkham Asylum GOTY Edition",
        "internalName": "BATMANARKHAMASYLUMGOTYEDITION",
        "thumb": "https://hb.imgix.net/2a07e9e90c9af53c5120151c9ff4e0aa3771ce99.jpeg?auto=compress,format&fit=crop&h=84&w=135&s=0f42069b4949098d7d589d28a9f66311"
    },
    {
        "gameID": "246183",
        "steamAppID": null,
        "cheapest": "19.99",
        "cheapestDealID": "3VlwNpcd%2FDMETYgzpXd1WDzLWBTn9qHFBhtkSUbnCMs%3D",
        "external": "Batman Arkham City: Game of the Year",
        "internalName": "BATMANARKHAMCITYGAMEOFTHEYEAR",
        "thumb": "https://images.greenmangaming.com/3e529338224949f280276fa6a5b75fec/933b9d36ea2d49b4b389899814729378.jpg"
    },
    {
        "gameID": "102510",
        "steamAppID": null,
        "cheapest": "14.99",
        "cheapestDealID": "%2BThIUJIoyxRy9u7NDjuvidcljQ6heP%2FiEmWT%2FkUc5aE%3D",
        "external": "Batman Arkham Origins Season Pass",
        "internalName": "BATMANARKHAMORIGINSSEASONPASS",
        "thumb": "https://images.greenmangaming.com/1c43fd1ff43744c08e854d6ff963c91d/2c8b09a294f4401ab3747b99b6d828f1.jpg"
    },
    {
        "gameID": "214907",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "lBW7zyO4rDYgP9peypdBSZC%2B6dp8bUJMtwXlUVt9ghY%3D",
        "external": "Batman Shadows Mode: The Enemy Within",
        "internalName": "BATMANSHADOWSMODETHEENEMYWITHIN",
        "thumb": "https://images.gog-statics.com/70d653226ede85bb70a8d4022a2d02b6c2e2bb9775e87b6a9ca5c30d6ac7f815_product_tile_117h.webp"
    },
    {
        "gameID": "221906",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "E7P6Oz50WDEWzQZZjj8b1l6e7C3S0sr43hOQnoDCtqk%3D",
        "external": "Batman - The Enemy Within Shadows Mode",
        "internalName": "BATMANTHEENEMYWITHINSHADOWSMODE",
        "thumb": "https://images.greenmangaming.com/85ad7081bac34a3cb4151daeb6540b50/9e93071c54604454974132c72bab146f.jpg"
    },
    {
        "gameID": "246576",
        "steamAppID": null,
        "cheapest": "29.99",
        "cheapestDealID": "Fi5iMIssmS3PtiA3m42zXTR22B9GvIcr2NE8Csb5kFw%3D",
        "external": "The Telltale Batman Shadows Edition",
        "internalName": "THETELLTALEBATMANSHADOWSEDITION",
        "thumb": "https://cdn1.epicgames.com/f2bfff793b224f6190a394f461c9a4b8/offer/TheTelltaleBatmanShadowsEdition-2560x1440-1ababb36a948b5c732ab85a330787e85.jpg"
    },
    {
        "gameID": "225758",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "PUPfxJiMyt4dbcslwvOVad0v%2BgtknEhy8c90qOpVp9w%3D",
        "external": "Telltale Batman Shadows Mode Bundle",
        "internalName": "TELLTALEBATMANSHADOWSMODEBUNDLE",
        "thumb": "https://hb.imgix.net/bcd6694f5442c730d3b16bdb07e956e52fe17b32.png?auto=compress,format&fit=crop&h=84&w=135&s=748daa2aa04096c42a24db2baf8320ff"
    },
    {
        "gameID": "250727",
        "steamAppID": null,
        "cheapest": "19.99",
        "cheapestDealID": "WT%2FMFjw1bIOhh5gs6slTqvwUdrGR2W4wEwyYGlT1G98%3D",
        "external": "Batman: Arkham Asylum Game of the Year",
        "internalName": "BATMANARKHAMASYLUMGAMEOFTHEYEAR",
        "thumb": "https://images.greenmangaming.com/0c2b457baa0a4e778c31771ead715300/88c9e725b8ff4610a2e1970e0f4a08f1.jpg"
    },
    {
        "gameID": "143817",
        "steamAppID": null,
        "cheapest": "31.88",
        "cheapestDealID": "5Cwq5t9J3RKsRCP3EYIktz2QNQkzl%2FZ9ZvqHJz8N7Ik%3D",
        "external": "Batman: Arkham Knight - Premium Edition",
        "internalName": "BATMANARKHAMKNIGHTPREMIUMEDITION",
        "thumb": "https://images.greenmangaming.com/b47c3b1bc8a5468ab3ada8832be8355c/4de3b472f988463abf6a869bcdda44d7.jpg"
    },
    {
        "gameID": "108605",
        "steamAppID": null,
        "cheapest": "8.49",
        "cheapestDealID": "1kwCcJiqxMJJyas58G3FQ4Od%2BbujQrxSF19FRSAmcPE%3D",
        "external": "Batman: Arkham Origins - Cold, Cold Heart",
        "internalName": "BATMANARKHAMORIGINSCOLDCOLDHEART",
        "thumb": "https://images.greenmangaming.com/ba8d4cd6e14e40fca132f346e2d0d3b4/44f1b54092f3498f88b3d7c1df88451b.jpg"
    },
    {
        "gameID": "136749",
        "steamAppID": null,
        "cheapest": "3.00",
        "cheapestDealID": "k1S33Cgc2ot%2BV%2BxJVUyBogaB0PxBSNK5mFY32oX8npU%3D",
        "external": "LEGO Batman 3: Beyond Gotham Season Pass",
        "internalName": "LEGOBATMAN3BEYONDGOTHAMSEASONPASS",
        "thumb": "https://sttc.gamersgate.com/images/product/lego-batman-3-beyond-gotham-season-pass/cover-180-e8ad17.jpg"
    },
    {
        "gameID": "221904",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "oWzY%2BWDZExyELDQrL4xy3kd6P1p%2BOQMQ%2FIOeMaN0QaU%3D",
        "external": "Batman - The Telltale Series Shadows Mode",
        "internalName": "BATMANTHETELLTALESERIESSHADOWSMODE",
        "thumb": "https://images.greenmangaming.com/9cc80f2eb57e4588b159b818fed76288/7afd0ac5cde2472b8fde02a4720dc0ad.jpg"
    },
    {
        "gameID": "89095",
        "steamAppID": "200260",
        "cheapest": "3.99",
        "cheapestDealID": "RPqJV%2BI3Cw5NOoq%2B89MzssePMS%2BQgv2M1OnDzsdR0Jo%3D",
        "external": "Batman Arkham City Game of the Year Edition",
        "internalName": "BATMANARKHAMCITYGAMEOFTHEYEAREDITION",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/200260/capsule_sm_120.jpg?t=1702934622"
    },
    {
        "gameID": "178376",
        "steamAppID": null,
        "cheapest": "34.99",
        "cheapestDealID": "pTeQKzHuRK4TDqHYLY4xolVHA5s%2BVlwXQrlqzqnLCks%3D",
        "external": "LEGO Batman 3: Beyond Gotham Premium Edition",
        "internalName": "LEGOBATMAN3BEYONDGOTHAMPREMIUMEDITION",
        "thumb": "https://images.gog-statics.com/0d81cdadc840148cbd6e1f1a6897bdf9d38994b3045c7a394f8426a82775b9f4_product_tile_117h.webp"
    },
    {
        "gameID": "171102",
        "steamAppID": "675260",
        "cheapest": "5.99",
        "cheapestDealID": "O3R9Lb8H5%2FOde%2BYxvObV4bHESrZT7WooRK6Re4QKtLw%3D",
        "external": "Batman: The Enemy Within - The Telltale Series",
        "internalName": "BATMANTHEENEMYWITHINTHETELLTALESERIES",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/675260/capsule_sm_120.jpg?t=1686747613"
    },
    {
        "gameID": "146",
        "steamAppID": "35140",
        "cheapest": "3.99",
        "cheapestDealID": "HR5V6hEl39sGwYodeqwwWuo8dKtKukteV0W9we9pI7I%3D",
        "external": "Batman: Arkham Asylum Game of the Year Edition",
        "internalName": "BATMANARKHAMASYLUMGAMEOFTHEYEAREDITION",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/35140/capsule_sm_120.jpg?t=1702934705"
    },
    {
        "gameID": "107869",
        "steamAppID": "267490",
        "cheapest": "3.99",
        "cheapestDealID": "6aW%2BsA5i2cZ8pb2wvI0kuSfspYxuaeFKWl2iWWoCU7k%3D",
        "external": "Batman: Arkham Origins Blackgate - Deluxe Edition",
        "internalName": "BATMANARKHAMORIGINSBLACKGATEDELUXEEDITION",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/267490/capsule_sm_120.jpg?t=1651865751"
    },
    {
        "gameID": "250195",
        "steamAppID": null,
        "cheapest": "2.99",
        "cheapestDealID": "A2XgGTglsm6iTyN%2BzxnWqIrErGb1uxYlGt4vUZyeG0k%3D",
        "external": "LEGO DC Super-Villains Batman: The Animated Series Level Pack",
        "internalName": "LEGODCSUPERVILLAINSBATMANTHEANIMATEDSERIESLEVELPACK",
        "thumb": "https://images.gog-statics.com/7b55f49b5d2898986176e45d97391b263cc46b804ce7e8dc81ecb242c72f1e7d_product_tile_117h.webp"
    }
]

const chapest = games.filter(function (element, index) {
    return Number(element.cheapest) < 5
})

console.log(chapest)

const person = {
    firstName: 'Tim',
    lastName: 'Cook',
    age: 60,
    job: 'CEO',
    fullName: function () {
        return person.firstName + " " + person.lastName
    }
}

console.log(person.firstName + " " + person.lastName)

// function A(){
//     console.log(person.firstName + " " + person.lastName)
// }

// function B() {
//     console.log(person.firstName + " " + person.lastName)
// }

const dragonballAnime = {
    "data": [
        {
            "mal_id": 177,
            "url": "https://myanimelist.net/anime/177/Tsubasa_Chronicle",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/9/6555.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/9/6555t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/9/6555l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/9/6555.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/9/6555t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/9/6555l.webp"
                }
            },
            "trailer": {
                "youtube_id": "MZEV9QQdWO4",
                "url": "https://www.youtube.com/watch?v=MZEV9QQdWO4",
                "embed_url": "https://www.youtube.com/embed/MZEV9QQdWO4?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/MZEV9QQdWO4/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/MZEV9QQdWO4/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/MZEV9QQdWO4/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/MZEV9QQdWO4/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/MZEV9QQdWO4/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Tsubasa Chronicle"
                },
                {
                    "type": "Synonym",
                    "title": "Tsubasa: RESERVoir CHRoNiCLE"
                },
                {
                    "type": "Japanese",
                    "title": "ツバサ・クロニクル"
                },
                {
                    "type": "English",
                    "title": "Tsubasa RESERVoir CHRoNiCLE"
                },
                {
                    "type": "German",
                    "title": "Tsubasa CHRoNiCLE"
                },
                {
                    "type": "Spanish",
                    "title": "Tsubasa CHRoNiCLE"
                },
                {
                    "type": "French",
                    "title": "Tsubasa CHRoNiCLE"
                }
            ],
            "title": "Tsubasa Chronicle",
            "title_english": "Tsubasa RESERVoir CHRoNiCLE",
            "title_japanese": "ツバサ・クロニクル",
            "title_synonyms": [
                "Tsubasa: RESERVoir CHRoNiCLE"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 26,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2005-04-09T00:00:00+00:00",
                "to": "2005-10-15T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 9,
                        "month": 4,
                        "year": 2005
                    },
                    "to": {
                        "day": 15,
                        "month": 10,
                        "year": 2005
                    }
                },
                "string": "Apr 9, 2005 to Oct 15, 2005"
            },
            "duration": "25 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.51,
            "scored_by": 97830,
            "rank": 1848,
            "popularity": 1083,
            "members": 231768,
            "favorites": 2040,
            "synopsis": "Sakura and Syaoran live peaceful lives in the desert country of Clow. Despite the King's disapproval of the budding romance between the princess and her archeologist friend, their days remain blissful if not a little dull. But that soon changes when Sakura appears in front of Syaoran in a trance with wings on her back. When the wings dissolve into feathers and Sakura loses consciousness, Syaoran is spurred to action.\n\nSyaoran soon learns that he must collect Sakura's feathers, which have been scattered across many different realms, in order to protect her life. After making a deal with the Dimensional Witch Yuuko Ichihara, Syaoran teams up with Mokona Modoki, a creature who has the power to traverse realms. Also accompanying him on this journey are Fai D. Flourite, a carefree man fleeing persecution in his home world, and Kurogane, a swordsman forced to travel to refine his strength and character. Together, the bizarre alliance works to reclaim Sakura's feathers—no matter how impossible it seems to find them all.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "spring",
            "year": 2005,
            "broadcast": {
                "day": "Saturdays",
                "time": "18:30",
                "timezone": "Asia/Tokyo",
                "string": "Saturdays at 18:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 111,
                    "type": "anime",
                    "name": "NHK",
                    "url": "https://myanimelist.net/anime/producer/111/NHK"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 5,
                    "type": "anime",
                    "name": "Bee Train",
                    "url": "https://myanimelist.net/anime/producer/5/Bee_Train"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https://myanimelist.net/anime/genre/22/Romance"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 969,
            "url": "https://myanimelist.net/anime/969/Tsubasa_Chronicle_2nd_Season",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/4/6554.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/4/6554t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/4/6554l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/4/6554.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/4/6554t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/4/6554l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Tsubasa Chronicle 2nd Season"
                },
                {
                    "type": "Synonym",
                    "title": "Tsubasa Chronicles - Second Season"
                },
                {
                    "type": "Synonym",
                    "title": "Tsubasa: RESERVoir CHRoNiCLE"
                },
                {
                    "type": "Japanese",
                    "title": "ツバサ・クロニクル 第2シリーズ"
                },
                {
                    "type": "English",
                    "title": "Tsubasa RESERVoir CHRoNiCLE Season Two"
                },
                {
                    "type": "German",
                    "title": "Tsubasa CHRoNiCLE Staffel 2"
                },
                {
                    "type": "French",
                    "title": "Tsubasa CHRoNiCLE Saison 2"
                }
            ],
            "title": "Tsubasa Chronicle 2nd Season",
            "title_english": "Tsubasa RESERVoir CHRoNiCLE Season Two",
            "title_japanese": "ツバサ・クロニクル 第2シリーズ",
            "title_synonyms": [
                "Tsubasa Chronicles - Second Season",
                "Tsubasa: RESERVoir CHRoNiCLE"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 26,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2006-04-29T00:00:00+00:00",
                "to": "2006-11-04T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 29,
                        "month": 4,
                        "year": 2006
                    },
                    "to": {
                        "day": 4,
                        "month": 11,
                        "year": 2006
                    }
                },
                "string": "Apr 29, 2006 to Nov 4, 2006"
            },
            "duration": "25 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.57,
            "scored_by": 59956,
            "rank": 1620,
            "popularity": 1895,
            "members": 119405,
            "favorites": 405,
            "synopsis": "Syaoran, Sakura, Kurogane, Fai and Mokona's journey through to different world's continue as they search for Sakura's feathers. The fated journey slowly becomes more complicated for our travelers, as they find themselves diving deeper into more dangerous worlds.",
            "background": "",
            "season": "spring",
            "year": 2006,
            "broadcast": {
                "day": "Saturdays",
                "time": "18:25",
                "timezone": "Asia/Tokyo",
                "string": "Saturdays at 18:25 (JST)"
            },
            "producers": [
                {
                    "mal_id": 111,
                    "type": "anime",
                    "name": "NHK",
                    "url": "https://myanimelist.net/anime/producer/111/NHK"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 5,
                    "type": "anime",
                    "name": "Bee Train",
                    "url": "https://myanimelist.net/anime/producer/5/Bee_Train"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https://myanimelist.net/anime/genre/8/Drama"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https://myanimelist.net/anime/genre/22/Romance"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 2685,
            "url": "https://myanimelist.net/anime/2685/Tsubasa__Tokyo_Revelations",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/4/49129.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/4/49129t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/4/49129l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/4/49129.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/4/49129t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/4/49129l.webp"
                }
            },
            "trailer": {
                "youtube_id": "I6IW3hP_H1E",
                "url": "https://www.youtube.com/watch?v=I6IW3hP_H1E",
                "embed_url": "https://www.youtube.com/embed/I6IW3hP_H1E?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/I6IW3hP_H1E/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/I6IW3hP_H1E/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/I6IW3hP_H1E/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/I6IW3hP_H1E/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/I6IW3hP_H1E/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Tsubasa: Tokyo Revelations"
                },
                {
                    "type": "Synonym",
                    "title": "Tsubasa Reservoir Chronicle OVA"
                },
                {
                    "type": "Synonym",
                    "title": "Tsubasa Reservoir Chronicle: Tokyo Revelations"
                },
                {
                    "type": "Japanese",
                    "title": "ツバサ TOKYO REVELATIONS"
                },
                {
                    "type": "English",
                    "title": "Tsubasa RESERVoir CHRoNiCLE: Tokyo Revelations"
                },
                {
                    "type": "German",
                    "title": "Tsubasa CHRoNiCLE: Toyko Revelations"
                },
                {
                    "type": "French",
                    "title": "Tsubasa CHRoNiCLE: Tokyo Révélations"
                }
            ],
            "title": "Tsubasa: Tokyo Revelations",
            "title_english": "Tsubasa RESERVoir CHRoNiCLE: Tokyo Revelations",
            "title_japanese": "ツバサ TOKYO REVELATIONS",
            "title_synonyms": [
                "Tsubasa Reservoir Chronicle OVA",
                "Tsubasa Reservoir Chronicle: Tokyo Revelations"
            ],
            "type": "OVA",
            "source": "Manga",
            "episodes": 3,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2007-11-16T00:00:00+00:00",
                "to": "2008-03-17T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 16,
                        "month": 11,
                        "year": 2007
                    },
                    "to": {
                        "day": 17,
                        "month": 3,
                        "year": 2008
                    }
                },
                "string": "Nov 16, 2007 to Mar 17, 2008"
            },
            "duration": "24 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.26,
            "scored_by": 45646,
            "rank": 312,
            "popularity": 2198,
            "members": 96962,
            "favorites": 824,
            "synopsis": "Continuing their journey from Record Country (the place that held the book of memories), Syaoran and company land into Tokyo Country, a blood-filled country under war from opposing factions for natural resources and survival. While reluctantly involved in the race to live, the group faces their own problems as certain revelations are made, changing their journey forever.\n\nA shocking betrayal and a battle that risks all of their lives. After this revelation, they will never be the same again.",
            "background": "Bundled with the limited editions of the 21st, 22nd, and 23rd volumes of the Tsubasa Chronicle manga.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Production I.G",
                    "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https://myanimelist.net/anime/genre/8/Drama"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https://myanimelist.net/anime/genre/22/Romance"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 4938,
            "url": "https://myanimelist.net/anime/4938/Tsubasa__Shunraiki",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/9/33841.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/9/33841t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/9/33841l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/9/33841.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/9/33841t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/9/33841l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Tsubasa: Shunraiki"
                },
                {
                    "type": "Synonym",
                    "title": "Tsubasa Reservoir Chronicle OVA"
                },
                {
                    "type": "Synonym",
                    "title": "Tsubasa Reservoir Chronicle: Spring Thunder"
                },
                {
                    "type": "Japanese",
                    "title": "ツバサ 春雷記"
                },
                {
                    "type": "English",
                    "title": "Tsubasa RESERVoir CHRoNiCLE: Spring Thunder Chronicle"
                },
                {
                    "type": "French",
                    "title": "Tsubasa CHRoNiCLE Shunraiki: Chronique de Tonnerres de Printemps"
                }
            ],
            "title": "Tsubasa: Shunraiki",
            "title_english": "Tsubasa RESERVoir CHRoNiCLE: Spring Thunder Chronicle",
            "title_japanese": "ツバサ 春雷記",
            "title_synonyms": [
                "Tsubasa Reservoir Chronicle OVA",
                "Tsubasa Reservoir Chronicle: Spring Thunder"
            ],
            "type": "OVA",
            "source": "Manga",
            "episodes": 2,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2009-03-17T00:00:00+00:00",
                "to": "2009-05-15T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 17,
                        "month": 3,
                        "year": 2009
                    },
                    "to": {
                        "day": 15,
                        "month": 5,
                        "year": 2009
                    }
                },
                "string": "Mar 17, 2009 to May 15, 2009"
            },
            "duration": "28 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.08,
            "scored_by": 30356,
            "rank": 527,
            "popularity": 2843,
            "members": 63146,
            "favorites": 254,
            "synopsis": "After the battle in Celes, Fai escapes with Kurogane's aid while helping Syaoran and Sakura as well. Now in the land of Nihon, Kurogane meets with Tomoyo once more. Seishirou appears and Syaoran battles him for the feather. After finally gaining the feather, he enters the Dream World where he meets Sakura, Watanuki and the Clone.\n\n(Source: Metacritic)",
            "background": "Bundled with the limited editions of the 26th and 27th volumes of the Tsubasa Chronicle manga.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Production I.G",
                    "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https://myanimelist.net/anime/genre/8/Drama"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https://myanimelist.net/anime/genre/22/Romance"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 1614,
            "url": "https://myanimelist.net/anime/1614/Captain_Tsubasa__Road_to_2002",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/5/75526.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/5/75526t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/5/75526l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/5/75526.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/5/75526t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/5/75526l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Captain Tsubasa: Road to 2002"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa (2001)"
                },
                {
                    "type": "Synonym",
                    "title": "Road to World Cup 2002"
                },
                {
                    "type": "Synonym",
                    "title": "Road to Dream"
                },
                {
                    "type": "Japanese",
                    "title": "キャプテン翼 (2001)"
                },
                {
                    "type": "English",
                    "title": "Captain Tsubasa"
                },
                {
                    "type": "Spanish",
                    "title": "Campeones: Hacia el Mundial"
                },
                {
                    "type": "French",
                    "title": "Olive et Tom: Captain Tsubasa Le Retour"
                }
            ],
            "title": "Captain Tsubasa: Road to 2002",
            "title_english": "Captain Tsubasa",
            "title_japanese": "キャプテン翼 (2001)",
            "title_synonyms": [
                "Captain Tsubasa (2001)",
                "Road to World Cup 2002",
                "Road to Dream"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 52,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2001-10-07T00:00:00+00:00",
                "to": "2002-10-06T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 7,
                        "month": 10,
                        "year": 2001
                    },
                    "to": {
                        "day": 6,
                        "month": 10,
                        "year": 2002
                    }
                },
                "string": "Oct 7, 2001 to Oct 6, 2002"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.45,
            "scored_by": 37464,
            "rank": 2050,
            "popularity": 2921,
            "members": 60140,
            "favorites": 325,
            "synopsis": "Tsubasa Oozora loves everything about soccer: the cheer of the crowd, the speed of the ball, the passion of the players, and the excitement that comes from striving to be the best soccer player he can be. His goal is to aim for the World Cup, and to do that, he’s spent countless hours practicing soccer, ever since the moment he could walk on two legs. Now, as he plays for the Barcelona team in a fierce game, it seems as though his dreams are on the verge of coming true.\n\nCaptain Tsubasa: Road to 2002 tells the story of how Tsubasa climbed his way through the ranks, featuring his roots in the town of Nankatsu as well as his epic journey to master the art of soccer.",
            "background": "",
            "season": "fall",
            "year": 2001,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": "Unknown"
            },
            "producers": [
                {
                    "mal_id": 11,
                    "type": "anime",
                    "name": "Madhouse",
                    "url": "https://myanimelist.net/anime/producer/11/Madhouse"
                },
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 86,
                    "type": "anime",
                    "name": "Group TAC",
                    "url": "https://myanimelist.net/anime/producer/86/Group_TAC"
                }
            ],
            "genres": [
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https://myanimelist.net/anime/genre/30/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 77,
                    "type": "anime",
                    "name": "Team Sports",
                    "url": "https://myanimelist.net/anime/genre/77/Team_Sports"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 807,
            "url": "https://myanimelist.net/anime/807/Tsubasa_Chronicle__Tori_Kago_no_Kuni_no_Himegimi",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/6/45953.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/6/45953t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/6/45953l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/6/45953.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/6/45953t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/6/45953l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Tsubasa Chronicle: Tori Kago no Kuni no Himegimi"
                },
                {
                    "type": "Synonym",
                    "title": "Tsubasa Chronicle the Movie: The Princess of the Country of Birdcages"
                },
                {
                    "type": "Synonym",
                    "title": "Tsubasa Chronicle: Princess of the Country of the Birdcages"
                },
                {
                    "type": "Japanese",
                    "title": "ツバサ・クロニクル 鳥カゴの国の姫君"
                },
                {
                    "type": "English",
                    "title": "Tsubasa RESERVoir CHRoNiCLE The Movie: The Princess in the Birdcage Kingdom"
                },
                {
                    "type": "Spanish",
                    "title": "Tsubasa Chronicle, la pelicula: La Princesa del Reino enjaulado"
                },
                {
                    "type": "French",
                    "title": "Tsubasa CHRoNiCLE Le Film"
                }
            ],
            "title": "Tsubasa Chronicle: Tori Kago no Kuni no Himegimi",
            "title_english": "Tsubasa RESERVoir CHRoNiCLE The Movie: The Princess in the Birdcage Kingdom",
            "title_japanese": "ツバサ・クロニクル 鳥カゴの国の姫君",
            "title_synonyms": [
                "Tsubasa Chronicle the Movie: The Princess of the Country of Birdcages",
                "Tsubasa Chronicle: Princess of the Country of the Birdcages"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2005-08-20T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 20,
                        "month": 8,
                        "year": 2005
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Aug 20, 2005"
            },
            "duration": "35 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.3,
            "scored_by": 24022,
            "rank": 2726,
            "popularity": 3329,
            "members": 46683,
            "favorites": 63,
            "synopsis": "In their continuing journey to find the feathers that are the fragments of Sakura's lost memory, Syaoran, Kurogane, Fai, and Sakura move through time and space with Mokona. Here, they visit the \"Land of the Birdcage,\" a seemingly peaceful country where people and birds live together, each person having a bird companion. After a boy named Koruri confuses Syaoran and Sakura for \"bodyguards\" and attacks them, they learn that the king of the country possesses a mysterious power. Princess Tomoyo, Koruri, and the other oppressed citizens, having had their birds taken from them, live in hiding within the forest. In order to take back Sakura's feather, Syaoran and the others stand up against the scheming king.\n\n(Source: ANN)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 109,
                    "type": "anime",
                    "name": "Shochiku",
                    "url": "https://myanimelist.net/anime/producer/109/Shochiku"
                },
                {
                    "mal_id": 111,
                    "type": "anime",
                    "name": "NHK",
                    "url": "https://myanimelist.net/anime/producer/111/NHK"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                },
                {
                    "mal_id": 166,
                    "type": "anime",
                    "name": "Movic",
                    "url": "https://myanimelist.net/anime/producer/166/Movic"
                },
                {
                    "mal_id": 316,
                    "type": "anime",
                    "name": "Nippon Shuppan Hanbai (Nippan) K.K.",
                    "url": "https://myanimelist.net/anime/producer/316/Nippon_Shuppan_Hanbai_Nippan_KK"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Production I.G",
                    "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https://myanimelist.net/anime/genre/8/Drama"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 9922,
            "url": "https://myanimelist.net/anime/9922/Oretachi_ni_Tsubasa_wa_Nai__Under_the_Innocent_Sky",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/9/75449.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/9/75449t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/9/75449l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/9/75449.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/9/75449t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/9/75449l.webp"
                }
            },
            "trailer": {
                "youtube_id": "Ss7w3Re2MAw",
                "url": "https://www.youtube.com/watch?v=Ss7w3Re2MAw",
                "embed_url": "https://www.youtube.com/embed/Ss7w3Re2MAw?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/Ss7w3Re2MAw/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/Ss7w3Re2MAw/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/Ss7w3Re2MAw/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/Ss7w3Re2MAw/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/Ss7w3Re2MAw/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Oretachi ni Tsubasa wa Nai: Under the Innocent Sky."
                },
                {
                    "type": "Synonym",
                    "title": "Oretsuba"
                },
                {
                    "type": "Synonym",
                    "title": "We Don't Have Wings"
                },
                {
                    "type": "Synonym",
                    "title": "Ore-tachi ni Tsubasa wa Nai"
                },
                {
                    "type": "Japanese",
                    "title": "俺たちに翼はない -under the innocent sky."
                },
                {
                    "type": "English",
                    "title": "We Without Wings – Under the Innocent Sky"
                },
                {
                    "type": "Spanish",
                    "title": "We, Without Wings: Under the Innocent Sky"
                }
            ],
            "title": "Oretachi ni Tsubasa wa Nai: Under the Innocent Sky.",
            "title_english": "We Without Wings – Under the Innocent Sky",
            "title_japanese": "俺たちに翼はない -under the innocent sky.",
            "title_synonyms": [
                "Oretsuba",
                "We Don't Have Wings",
                "Ore-tachi ni Tsubasa wa Nai"
            ],
            "type": "TV",
            "source": "Visual novel",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2011-04-04T00:00:00+00:00",
                "to": "2011-06-20T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 4,
                        "month": 4,
                        "year": 2011
                    },
                    "to": {
                        "day": 20,
                        "month": 6,
                        "year": 2011
                    }
                },
                "string": "Apr 4, 2011 to Jun 20, 2011"
            },
            "duration": "24 min per ep",
            "rating": "R+ - Mild Nudity",
            "score": 6.64,
            "scored_by": 33940,
            "rank": 6035,
            "popularity": 2296,
            "members": 90166,
            "favorites": 181,
            "synopsis": "Haneda Takashi has a secret he cannot speak of. To leave his dull school-life, he was supposed to have escaped to another world. However, he is reeled in by certain ties on his heart. One of these is Kobato, his awkward younger sister. The other is Watarai Asuka, his negligent girlfriend.\n\nChitose Shuusuke is a poor freeloader. He passes his days working at various part-time jobs. One day, he has a disastrous first encounter with Tamaizumi Hiyoko. The next time they meet, Shuusuke discovers that they are fellow employees at his part-time job.\n\nNarita Hayato sees himself as a \"hard-boiled\" person. Back-breaking jobs are nothing to him. Hayato shuns normal human contact, but, during the nights, he would get together with delinquents and other denizens of the night. One such night, he meets the cheerful and oblivious Otori Naru.\n\nThe relationships with these girls will greatly affect these 3 young men. But what, exactly, is the relationship these young men have with each other?\n\n(Source: AnimeNFO)",
            "background": "",
            "season": "spring",
            "year": 2011,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": "Unknown"
            },
            "producers": [
                {
                    "mal_id": 104,
                    "type": "anime",
                    "name": "Lantis",
                    "url": "https://myanimelist.net/anime/producer/104/Lantis"
                },
                {
                    "mal_id": 711,
                    "type": "anime",
                    "name": "Delfi Sound",
                    "url": "https://myanimelist.net/anime/producer/711/Delfi_Sound"
                },
                {
                    "mal_id": 751,
                    "type": "anime",
                    "name": "Marvelous AQL",
                    "url": "https://myanimelist.net/anime/producer/751/Marvelous_AQL"
                },
                {
                    "mal_id": 829,
                    "type": "anime",
                    "name": "Studio Jack",
                    "url": "https://myanimelist.net/anime/producer/829/Studio_Jack"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 70,
                    "type": "anime",
                    "name": "Nomad",
                    "url": "https://myanimelist.net/anime/producer/70/Nomad"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https://myanimelist.net/anime/genre/8/Drama"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https://myanimelist.net/anime/genre/22/Romance"
                },
                {
                    "mal_id": 9,
                    "type": "anime",
                    "name": "Ecchi",
                    "url": "https://myanimelist.net/anime/genre/9/Ecchi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 35,
                    "type": "anime",
                    "name": "Harem",
                    "url": "https://myanimelist.net/anime/genre/35/Harem"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 2116,
            "url": "https://myanimelist.net/anime/2116/Captain_Tsubasa",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1580/134917.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1580/134917t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1580/134917l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1580/134917.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1580/134917t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1580/134917l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Captain Tsubasa"
                },
                {
                    "type": "Synonym",
                    "title": "Flash Kicker"
                },
                {
                    "type": "Japanese",
                    "title": "キャプテン翼"
                },
                {
                    "type": "Spanish",
                    "title": "Captain Tsubasa: Campeones: Oliver y Benji"
                }
            ],
            "title": "Captain Tsubasa",
            "title_english": null,
            "title_japanese": "キャプテン翼",
            "title_synonyms": [
                "Flash Kicker"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 128,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "1983-10-13T00:00:00+00:00",
                "to": "1986-03-27T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 13,
                        "month": 10,
                        "year": 1983
                    },
                    "to": {
                        "day": 27,
                        "month": 3,
                        "year": 1986
                    }
                },
                "string": "Oct 13, 1983 to Mar 27, 1986"
            },
            "duration": "24 min per ep",
            "rating": "G - All Ages",
            "score": 7.34,
            "scored_by": 53238,
            "rank": 2542,
            "popularity": 2323,
            "members": 88429,
            "favorites": 592,
            "synopsis": "Captain Tsubasa is the passionate story of an elementary school student whose thoughts and dreams revolve almost entirely around the love of soccer. 11-year-old Tsubasa Oozora started playing soccer at a very young age, and while it was mostly just a recreational sport for his friends, for him, it developed into something of an obsession. \n\nIn order to pursue his dream to the best of his elementary school abilities, Tsubasa moves with his mother to Nankatsu city, which is well-known for its excellent elementary school soccer teams. But although he was easily the best in his old town, Nankatsu has a lot more competition, and he will need all of his skill and talent in order to stand out from this new crowd.\n\nHe encounters not only rivals, but also new friends like the pretty girl Sanae Nakazawa and the talented goalkeeper, Genzo Wakabayashi, who shares the same passion as Tsubasa, and will prove to be a treasured friend in helping him push towards his dreams. Representing Japan in the FIFA World Cup is Tsubasa’s ultimate dream, but it will take a lot more than talent to reach it.",
            "background": "Captain Tsubasa has inspired real footballers such as Hidetoshi Nakata, Fernando Torres and Lionel Messi in their own football dreams. A bronze statue of Tsubasa Oozora was erected in Katsushika, Tokyo in 2013, which is the neighbourhood where the original manga creator lived.",
            "season": "fall",
            "year": 1983,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": "Unknown"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 390,
                    "type": "anime",
                    "name": "Tsuchida Productions",
                    "url": "https://myanimelist.net/anime/producer/390/Tsuchida_Productions"
                }
            ],
            "genres": [
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https://myanimelist.net/anime/genre/30/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 77,
                    "type": "anime",
                    "name": "Team Sports",
                    "url": "https://myanimelist.net/anime/genre/77/Team_Sports"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 36934,
            "url": "https://myanimelist.net/anime/36934/Captain_Tsubasa_2018",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1866/91270.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1866/91270t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1866/91270l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1866/91270.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1866/91270t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1866/91270l.webp"
                }
            },
            "trailer": {
                "youtube_id": "K6zQ1qs2hLY",
                "url": "https://www.youtube.com/watch?v=K6zQ1qs2hLY",
                "embed_url": "https://www.youtube.com/embed/K6zQ1qs2hLY?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/K6zQ1qs2hLY/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/K6zQ1qs2hLY/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/K6zQ1qs2hLY/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/K6zQ1qs2hLY/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/K6zQ1qs2hLY/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Captain Tsubasa (2018)"
                },
                {
                    "type": "Japanese",
                    "title": "キャプテン翼"
                },
                {
                    "type": "German",
                    "title": "Captain Tsubasa"
                },
                {
                    "type": "French",
                    "title": "Captain Tsubasa"
                }
            ],
            "title": "Captain Tsubasa (2018)",
            "title_english": null,
            "title_japanese": "キャプテン翼",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": 52,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2018-04-03T00:00:00+00:00",
                "to": "2019-04-02T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 3,
                        "month": 4,
                        "year": 2018
                    },
                    "to": {
                        "day": 2,
                        "month": 4,
                        "year": 2019
                    }
                },
                "string": "Apr 3, 2018 to Apr 2, 2019"
            },
            "duration": "22 min per ep",
            "rating": "G - All Ages",
            "score": 7.41,
            "scored_by": 34554,
            "rank": 2222,
            "popularity": 2520,
            "members": 77385,
            "favorites": 372,
            "synopsis": "Captain Tsubasa is the passionate story of an elementary school student whose thoughts and dreams revolve almost entirely around the love of soccer. 11-year-old Tsubasa Oozora started playing football at a very young age, and while it was mostly just a recreational sport for his friends, for him, it developed into something of an obsession. \n\nIn order to pursue his dream to the best of his elementary school abilities, Tsubasa moves with his mother to Nankatsu city, which is well-known for its excellent elementary school soccer teams. But although he was easily the best in his old town, Nankatsu has a lot more competition, and he will need all of his skill and talent in order to stand out from this new crowd.\n\nHe encounters not only rivals, but also new friends like the pretty girl Sanae Nakazawa and the talented goalkeeper, Genzo Wakabayashi, who shares the same passion as Tsubasa, and will prove to be a treasured friend in helping him push towards his dreams. Representing Japan in the FIFA World Cup is Tsubasa’s ultimate dream, but it will take a lot more than talent to reach it.",
            "background": "",
            "season": "spring",
            "year": 2018,
            "broadcast": {
                "day": "Tuesdays",
                "time": "01:35",
                "timezone": "Asia/Tokyo",
                "string": "Tuesdays at 01:35 (JST)"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 139,
                    "type": "anime",
                    "name": "Nihon Ad Systems",
                    "url": "https://myanimelist.net/anime/producer/139/Nihon_Ad_Systems"
                },
                {
                    "mal_id": 415,
                    "type": "anime",
                    "name": "Warner Bros. Japan",
                    "url": "https://myanimelist.net/anime/producer/415/Warner_Bros_Japan"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 119,
                    "type": "anime",
                    "name": "VIZ Media",
                    "url": "https://myanimelist.net/anime/producer/119/VIZ_Media"
                }
            ],
            "studios": [
                {
                    "mal_id": 287,
                    "type": "anime",
                    "name": "David Production",
                    "url": "https://myanimelist.net/anime/producer/287/David_Production"
                }
            ],
            "genres": [
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https://myanimelist.net/anime/genre/30/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 77,
                    "type": "anime",
                    "name": "Team Sports",
                    "url": "https://myanimelist.net/anime/genre/77/Team_Sports"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 880,
            "url": "https://myanimelist.net/anime/880/Aa_Megami-sama_Sorezore_no_Tsubasa",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/4/78931.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/4/78931t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/4/78931l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/4/78931.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/4/78931t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/4/78931l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Aa! Megami-sama! Sorezore no Tsubasa"
                },
                {
                    "type": "Synonym",
                    "title": "Ah! My Goddess: Sorezore no Tsubasa"
                },
                {
                    "type": "Japanese",
                    "title": "ああっ女神さまっ　それぞれの翼"
                },
                {
                    "type": "English",
                    "title": "Ah! My Goddess: Flights of Fancy"
                },
                {
                    "type": "French",
                    "title": "Ah My Goddess Saison 2"
                }
            ],
            "title": "Aa! Megami-sama! Sorezore no Tsubasa",
            "title_english": "Ah! My Goddess: Flights of Fancy",
            "title_japanese": "ああっ女神さまっ　それぞれの翼",
            "title_synonyms": [
                "Ah! My Goddess: Sorezore no Tsubasa"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 22,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2006-04-07T00:00:00+00:00",
                "to": "2006-09-15T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 7,
                        "month": 4,
                        "year": 2006
                    },
                    "to": {
                        "day": 15,
                        "month": 9,
                        "year": 2006
                    }
                },
                "string": "Apr 7, 2006 to Sep 15, 2006"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.54,
            "scored_by": 36053,
            "rank": 1717,
            "popularity": 2721,
            "members": 68179,
            "favorites": 163,
            "synopsis": "One year after goddess Belldandy emerged from Keiichi Morisato's mirror and promised to stay with him forever, a new threat to their happiness emerges, one that could end the contract between Belldandy and Keiichi.",
            "background": "",
            "season": "spring",
            "year": 2006,
            "broadcast": {
                "day": "Fridays",
                "time": "01:55",
                "timezone": "Asia/Tokyo",
                "string": "Fridays at 01:55 (JST)"
            },
            "producers": [
                {
                    "mal_id": 145,
                    "type": "anime",
                    "name": "TBS",
                    "url": "https://myanimelist.net/anime/producer/145/TBS"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                },
                {
                    "mal_id": 2135,
                    "type": "anime",
                    "name": "Imagine",
                    "url": "https://myanimelist.net/anime/producer/2135/Imagine"
                }
            ],
            "licensors": [
                {
                    "mal_id": 97,
                    "type": "anime",
                    "name": "ADV Films",
                    "url": "https://myanimelist.net/anime/producer/97/ADV_Films"
                },
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                },
                {
                    "mal_id": 595,
                    "type": "anime",
                    "name": "NYAV Post",
                    "url": "https://myanimelist.net/anime/producer/595/NYAV_Post"
                }
            ],
            "studios": [
                {
                    "mal_id": 48,
                    "type": "anime",
                    "name": "AIC",
                    "url": "https://myanimelist.net/anime/producer/48/AIC"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https://myanimelist.net/anime/genre/22/Romance"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https://myanimelist.net/anime/genre/37/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 35,
                    "type": "anime",
                    "name": "Harem",
                    "url": "https://myanimelist.net/anime/genre/35/Harem"
                }
            ],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https://myanimelist.net/anime/genre/42/Seinen"
                }
            ]
        },
        {
            "mal_id": 7222,
            "url": "https://myanimelist.net/anime/7222/Macross_F_Movie_2__Sayonara_no_Tsubasa",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/13/76398.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/13/76398t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/13/76398l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/13/76398.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/13/76398t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/13/76398l.webp"
                }
            },
            "trailer": {
                "youtube_id": "CcPpjCMRVqs",
                "url": "https://www.youtube.com/watch?v=CcPpjCMRVqs",
                "embed_url": "https://www.youtube.com/embed/CcPpjCMRVqs?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/CcPpjCMRVqs/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/CcPpjCMRVqs/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/CcPpjCMRVqs/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/CcPpjCMRVqs/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/CcPpjCMRVqs/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Macross F Movie 2: Sayonara no Tsubasa"
                },
                {
                    "type": "Synonym",
                    "title": "Macross Frontier the Movie 2"
                },
                {
                    "type": "Synonym",
                    "title": "Gekijouban Macross F: Sayonara no Tsubasa"
                },
                {
                    "type": "Synonym",
                    "title": "Macross Frontier: The Wings of Goodbye"
                },
                {
                    "type": "Synonym",
                    "title": "Macross Frontier: The Wings of Farewell"
                },
                {
                    "type": "Japanese",
                    "title": "劇場版 マクロスＦ 恋離飛翼 ～サヨナラノツバサ～"
                },
                {
                    "type": "English",
                    "title": "Macross Frontier: The Wings of Farewell"
                }
            ],
            "title": "Macross F Movie 2: Sayonara no Tsubasa",
            "title_english": "Macross Frontier: The Wings of Farewell",
            "title_japanese": "劇場版 マクロスＦ 恋離飛翼 ～サヨナラノツバサ～",
            "title_synonyms": [
                "Macross Frontier the Movie 2",
                "Gekijouban Macross F: Sayonara no Tsubasa",
                "Macross Frontier: The Wings of Goodbye",
                "Macross Frontier: The Wings of Farewell"
            ],
            "type": "Movie",
            "source": "Original",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2011-02-26T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 26,
                        "month": 2,
                        "year": 2011
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Feb 26, 2011"
            },
            "duration": "1 hr 54 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.93,
            "scored_by": 14129,
            "rank": 738,
            "popularity": 4280,
            "members": 28233,
            "favorites": 124,
            "synopsis": "Second Macross Frontier movie.",
            "background": "The movie won the Feature Film Award in the 15th Animation Kobe Awards in 2010 and the 2011 Newtype Anime Awards for Best Anime Film.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "Bandai Visual",
                    "url": "https://myanimelist.net/anime/producer/23/Bandai_Visual"
                },
                {
                    "mal_id": 351,
                    "type": "anime",
                    "name": "Big West",
                    "url": "https://myanimelist.net/anime/producer/351/Big_West"
                },
                {
                    "mal_id": 460,
                    "type": "anime",
                    "name": "KlockWorx",
                    "url": "https://myanimelist.net/anime/producer/460/KlockWorx"
                },
                {
                    "mal_id": 1097,
                    "type": "anime",
                    "name": "Bandai Namco Games",
                    "url": "https://myanimelist.net/anime/producer/1097/Bandai_Namco_Games"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 41,
                    "type": "anime",
                    "name": "Satelight",
                    "url": "https://myanimelist.net/anime/producer/41/Satelight"
                },
                {
                    "mal_id": 441,
                    "type": "anime",
                    "name": "8bit",
                    "url": "https://myanimelist.net/anime/producer/441/8bit"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 46,
                    "type": "anime",
                    "name": "Award Winning",
                    "url": "https://myanimelist.net/anime/genre/46/Award_Winning"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https://myanimelist.net/anime/genre/22/Romance"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 18,
                    "type": "anime",
                    "name": "Mecha",
                    "url": "https://myanimelist.net/anime/genre/18/Mecha"
                },
                {
                    "mal_id": 38,
                    "type": "anime",
                    "name": "Military",
                    "url": "https://myanimelist.net/anime/genre/38/Military"
                },
                {
                    "mal_id": 19,
                    "type": "anime",
                    "name": "Music",
                    "url": "https://myanimelist.net/anime/genre/19/Music"
                },
                {
                    "mal_id": 29,
                    "type": "anime",
                    "name": "Space",
                    "url": "https://myanimelist.net/anime/genre/29/Space"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 3090,
            "url": "https://myanimelist.net/anime/3090/Aa_Megami-sama_Tatakau_Tsubasa",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/7/18673.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/7/18673t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/7/18673l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/7/18673.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/7/18673t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/7/18673l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Aa! Megami-sama! Tatakau Tsubasa"
                },
                {
                    "type": "Synonym",
                    "title": "Ah! My Goddess: Tatakau Tsubasa"
                },
                {
                    "type": "Japanese",
                    "title": "ああっ女神さまっ 闘う翼"
                },
                {
                    "type": "English",
                    "title": "Ah! My Goddess: Fighting Wings"
                },
                {
                    "type": "French",
                    "title": "Ah! My Goddess: Fighting Wings"
                }
            ],
            "title": "Aa! Megami-sama! Tatakau Tsubasa",
            "title_english": "Ah! My Goddess: Fighting Wings",
            "title_japanese": "ああっ女神さまっ 闘う翼",
            "title_synonyms": [
                "Ah! My Goddess: Tatakau Tsubasa"
            ],
            "type": "TV Special",
            "source": "Manga",
            "episodes": 2,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2007-12-09T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 9,
                        "month": 12,
                        "year": 2007
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Dec 9, 2007"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.56,
            "scored_by": 13436,
            "rank": 1651,
            "popularity": 4308,
            "members": 27872,
            "favorites": 21,
            "synopsis": "An Angel Eater has been freed in Heaven. Since Goddesses and Angels share body and soul, losing your angel results in going into shock for the Goddess. Lind goes to Earth to protect Belldandy and the others unknowing that it is a trap.\n\n(Source: ANN)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 2135,
                    "type": "anime",
                    "name": "Imagine",
                    "url": "https://myanimelist.net/anime/producer/2135/Imagine"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 48,
                    "type": "anime",
                    "name": "AIC",
                    "url": "https://myanimelist.net/anime/producer/48/AIC"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https://myanimelist.net/anime/genre/22/Romance"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https://myanimelist.net/anime/genre/37/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 35,
                    "type": "anime",
                    "name": "Harem",
                    "url": "https://myanimelist.net/anime/genre/35/Harem"
                }
            ],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https://myanimelist.net/anime/genre/42/Seinen"
                }
            ]
        },
        {
            "mal_id": 2198,
            "url": "https://myanimelist.net/anime/2198/Aa_Megami-sama_Sorezore_no_Tsubasa_Specials",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/2/13530.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/2/13530t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/2/13530l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/2/13530.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/2/13530t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/2/13530l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Aa! Megami-sama! Sorezore no Tsubasa Specials"
                },
                {
                    "type": "Synonym",
                    "title": "Ah! My Goddess: Sorezore no Tsubasa Specials"
                },
                {
                    "type": "Japanese",
                    "title": "ああっ女神さまっ　それぞれの翼"
                },
                {
                    "type": "English",
                    "title": "Ah! My Goddess: Flights of Fancy Specials"
                }
            ],
            "title": "Aa! Megami-sama! Sorezore no Tsubasa Specials",
            "title_english": "Ah! My Goddess: Flights of Fancy Specials",
            "title_japanese": "ああっ女神さまっ　それぞれの翼",
            "title_synonyms": [
                "Ah! My Goddess: Sorezore no Tsubasa Specials"
            ],
            "type": "Special",
            "source": "Manga",
            "episodes": 2,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2007-02-23T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 23,
                        "month": 2,
                        "year": 2007
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Feb 23, 2007"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.49,
            "scored_by": 13285,
            "rank": 1924,
            "popularity": 4431,
            "members": 26426,
            "favorites": 28,
            "synopsis": "When Keiichi found his grandpa's diary and saw a treasure map inside, Skuld and Urd started to feel a great urge to search it. With the company of his friends, Keiichi arrives to Honda Inn, the place indicated on the map. Once the party is inside, they meet Honda Chieko, who seems to share a certain promise with Keiichi. Apart from all that confusion, it's time for Keiichi to have enough courage to say the words \"I love you\" to Belldandy.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [
                {
                    "mal_id": 97,
                    "type": "anime",
                    "name": "ADV Films",
                    "url": "https://myanimelist.net/anime/producer/97/ADV_Films"
                },
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                },
                {
                    "mal_id": 595,
                    "type": "anime",
                    "name": "NYAV Post",
                    "url": "https://myanimelist.net/anime/producer/595/NYAV_Post"
                }
            ],
            "studios": [
                {
                    "mal_id": 48,
                    "type": "anime",
                    "name": "AIC",
                    "url": "https://myanimelist.net/anime/producer/48/AIC"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https://myanimelist.net/anime/genre/22/Romance"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https://myanimelist.net/anime/genre/37/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 35,
                    "type": "anime",
                    "name": "Harem",
                    "url": "https://myanimelist.net/anime/genre/35/Harem"
                }
            ],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https://myanimelist.net/anime/genre/42/Seinen"
                }
            ]
        },
        {
            "mal_id": 40861,
            "url": "https://myanimelist.net/anime/40861/Hakumei_no_Tsubasa",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1399/104762.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1399/104762t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1399/104762l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1399/104762.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1399/104762t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1399/104762l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Hakumei no Tsubasa"
                },
                {
                    "type": "Synonym",
                    "title": "Pocket Monsters: Hakumei no Tsubasa"
                },
                {
                    "type": "Japanese",
                    "title": "薄明の翼"
                },
                {
                    "type": "English",
                    "title": "Pokémon: Twilight Wings"
                },
                {
                    "type": "Spanish",
                    "title": "Pokémon: Alas del Crepúsculo"
                }
            ],
            "title": "Hakumei no Tsubasa",
            "title_english": "Pokémon: Twilight Wings",
            "title_japanese": "薄明の翼",
            "title_synonyms": [
                "Pocket Monsters: Hakumei no Tsubasa"
            ],
            "type": "ONA",
            "source": "Game",
            "episodes": 7,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2020-01-15T00:00:00+00:00",
                "to": "2020-08-06T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 15,
                        "month": 1,
                        "year": 2020
                    },
                    "to": {
                        "day": 6,
                        "month": 8,
                        "year": 2020
                    }
                },
                "string": "Jan 15, 2020 to Aug 6, 2020"
            },
            "duration": "6 min per ep",
            "rating": "PG - Children",
            "score": 7.52,
            "scored_by": 12748,
            "rank": 1821,
            "popularity": 4727,
            "members": 22690,
            "favorites": 72,
            "synopsis": "Galar is a region where Pokemon battles have developed into a cultural sensation. Over the span of seven episodes, Pokemon: Twilight Wings will show in detail the dreams of Galar's residents, the realities they face, the challenges they must overcome and the conflicts they must resolve. In addition to these new stories, fans can expect to see a variety of Pokemon originally discovered in the Galar region appearing in the capsule series. \n\n(Source: Press Release)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1033,
                    "type": "anime",
                    "name": "Studio Colorido",
                    "url": "https://myanimelist.net/anime/producer/1033/Studio_Colorido"
                },
                {
                    "mal_id": 2033,
                    "type": "anime",
                    "name": "FILMONY",
                    "url": "https://myanimelist.net/anime/producer/2033/FILMONY"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 15,
                    "type": "anime",
                    "name": "Kids",
                    "url": "https://myanimelist.net/anime/genre/15/Kids"
                }
            ]
        },
        {
            "mal_id": 21781,
            "url": "https://myanimelist.net/anime/21781/Tsubasa_to_Hotaru",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/11/59507.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/11/59507t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/11/59507l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/11/59507.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/11/59507t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/11/59507l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Tsubasa to Hotaru"
                },
                {
                    "type": "Synonym",
                    "title": "Ribon Festa 2014"
                },
                {
                    "type": "Synonym",
                    "title": "Ribbon Festa 2014"
                },
                {
                    "type": "Synonym",
                    "title": "Tsubasa and Hotaru"
                },
                {
                    "type": "Japanese",
                    "title": "つばさとホタル"
                }
            ],
            "title": "Tsubasa to Hotaru",
            "title_english": null,
            "title_japanese": "つばさとホタル",
            "title_synonyms": [
                "Ribon Festa 2014",
                "Ribbon Festa 2014",
                "Tsubasa and Hotaru"
            ],
            "type": "Special",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2014-03-16T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 16,
                        "month": 3,
                        "year": 2014
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Mar 16, 2014"
            },
            "duration": "14 min",
            "rating": "G - All Ages",
            "score": 6.79,
            "scored_by": 6626,
            "rank": 5213,
            "popularity": 5414,
            "members": 16175,
            "favorites": 18,
            "synopsis": "Tsubasa to Hotaru follows 15-year-old Tsubasa Sonokawa, a young student—and renowned stalker? After one very romantic gesture by a popular upperclassman, she falls head over heels for who she believes to be her one true love. Unfortunately, love can be deceiving, as her feelings are soon proven to be one-sided; the upperclassman directly tells her that she’s annoying and that she needs to stop bothering him. How's that for some tough love?\n\nShortly after this horrific heartbreak, her good friend Yuri suffers from a sprained wrist, making it impossible for her to continue her position as the basketball team's manager. After some coaxing on Yuri's part, Tsubasa decides to take on the role in her place. This may be the perfect opportunity for Tsubasa to move on and forget about her unrequited love.\n\nOn Tsubasa’s first day as a manager, the team’s shooting guard Aki Hidaka saves her from being hit by a ball. Is this another fateful encounter? Or just a random, meaningless event? One thing is for certain: Tsubasa’s days will never be the same again.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "J.C.Staff",
                    "url": "https://myanimelist.net/anime/producer/7/JCStaff"
                }
            ],
            "genres": [
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https://myanimelist.net/anime/genre/22/Romance"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "School",
                    "url": "https://myanimelist.net/anime/genre/23/School"
                }
            ],
            "demographics": [
                {
                    "mal_id": 25,
                    "type": "anime",
                    "name": "Shoujo",
                    "url": "https://myanimelist.net/anime/genre/25/Shoujo"
                }
            ]
        },
        {
            "mal_id": 1126,
            "url": "https://myanimelist.net/anime/1126/Figure_17__Tsubasa___Hikaru",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1862/133787.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1862/133787t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1862/133787l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1862/133787.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1862/133787t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1862/133787l.webp"
                }
            },
            "trailer": {
                "youtube_id": "55x6wjzqM50",
                "url": "https://www.youtube.com/watch?v=55x6wjzqM50",
                "embed_url": "https://www.youtube.com/embed/55x6wjzqM50?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/55x6wjzqM50/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/55x6wjzqM50/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/55x6wjzqM50/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/55x6wjzqM50/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/55x6wjzqM50/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Figure 17: Tsubasa & Hikaru"
                },
                {
                    "type": "Synonym",
                    "title": "Figure 17 - Tsubasa and Hikaru"
                },
                {
                    "type": "Japanese",
                    "title": "フィギュア17 つばさ&ヒカル"
                },
                {
                    "type": "French",
                    "title": "Figure 17"
                }
            ],
            "title": "Figure 17: Tsubasa & Hikaru",
            "title_english": null,
            "title_japanese": "フィギュア17 つばさ&ヒカル",
            "title_synonyms": [
                "Figure 17 - Tsubasa and Hikaru"
            ],
            "type": "TV",
            "source": "Original",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2001-05-27T00:00:00+00:00",
                "to": "2002-05-26T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 27,
                        "month": 5,
                        "year": 2001
                    },
                    "to": {
                        "day": 26,
                        "month": 5,
                        "year": 2002
                    }
                },
                "string": "May 27, 2001 to May 26, 2002"
            },
            "duration": "47 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.18,
            "scored_by": 3905,
            "rank": 3341,
            "popularity": 5620,
            "members": 14652,
            "favorites": 81,
            "synopsis": "Tsubasa Shiina is a 10-year-old girl who recently moved to Hokkaido to live with her father. In school, she is very quiet and unsociable with her classmates. Then one night, she witnesses a UFO crash in the forest near her home. She rushes to the scene and finds the pilot, codenamed \"D.D.\", in a barely stable condition. Also in the scene is a Maguar, a hideous alien that hatched aboard D.D.'s ship. As the Maguar is close to taking Tsubasa's life, an alien lifeform fuses with her body to form the Riberus battle armor Figure 17, which shortly destroys the alien threat. The life form takes the name Hikaru and turns into an identical twin of Tsubasa. As time passes, Tsubasa becomes more open to everyone around her, thanks to her new twin sister Hikaru. However, with Maguar eggs scattered all over Hokkaido, their ability to form Figure 17 is needed to eliminate all hatched Maguars until backup from D.D.'s home planet arrives on Earth.\n\n(Source: ANN)",
            "background": "",
            "season": "spring",
            "year": 2001,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": "Unknown"
            },
            "producers": [
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "Bandai Visual",
                    "url": "https://myanimelist.net/anime/producer/23/Bandai_Visual"
                },
                {
                    "mal_id": 79,
                    "type": "anime",
                    "name": "Genco",
                    "url": "https://myanimelist.net/anime/producer/79/Genco"
                },
                {
                    "mal_id": 135,
                    "type": "anime",
                    "name": "MediaNet",
                    "url": "https://myanimelist.net/anime/producer/135/MediaNet"
                }
            ],
            "licensors": [
                {
                    "mal_id": 250,
                    "type": "anime",
                    "name": "Media Blasters",
                    "url": "https://myanimelist.net/anime/producer/250/Media_Blasters"
                }
            ],
            "studios": [
                {
                    "mal_id": 28,
                    "type": "anime",
                    "name": "OLM",
                    "url": "https://myanimelist.net/anime/producer/28/OLM"
                }
            ],
            "genres": [
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                },
                {
                    "mal_id": 36,
                    "type": "anime",
                    "name": "Slice of Life",
                    "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": []
        },
        {
            "mal_id": 10547,
            "url": "https://myanimelist.net/anime/10547/Oretachi_ni_Tsubasa_wa_Nai__Hadairo_Ritsu_Kyuuwari_Zou",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/3/64495.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/3/64495t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/3/64495l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/3/64495.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/3/64495t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/3/64495l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Oretachi ni Tsubasa wa Nai: Hadairo Ritsu Kyuuwari Zou!?"
                },
                {
                    "type": "Synonym",
                    "title": "Ore-tachi ni Tsubasa wa Nai OVA"
                },
                {
                    "type": "Synonym",
                    "title": "Oretachi ni Tsubasa wa Nai OVA"
                },
                {
                    "type": "Japanese",
                    "title": "俺たちに翼はない 肌色率九割増!?"
                }
            ],
            "title": "Oretachi ni Tsubasa wa Nai: Hadairo Ritsu Kyuuwari Zou!?",
            "title_english": null,
            "title_japanese": "俺たちに翼はない 肌色率九割増!?",
            "title_synonyms": [
                "Ore-tachi ni Tsubasa wa Nai OVA",
                "Oretachi ni Tsubasa wa Nai OVA"
            ],
            "type": "OVA",
            "source": "Visual novel",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2011-06-24T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 24,
                        "month": 6,
                        "year": 2011
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Jun 24, 2011"
            },
            "duration": "24 min",
            "rating": "R+ - Mild Nudity",
            "score": 6.39,
            "scored_by": 5819,
            "rank": 7455,
            "popularity": 5776,
            "members": 13722,
            "favorites": 3,
            "synopsis": "An OVA bundled with the non-adult version of the OreTsuba PC game. The OVA has more fan service than the TV series (what they call, \"nakedness plus 90%\").",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 70,
                    "type": "anime",
                    "name": "Nomad",
                    "url": "https://myanimelist.net/anime/producer/70/Nomad"
                }
            ],
            "genres": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https://myanimelist.net/anime/genre/8/Drama"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https://myanimelist.net/anime/genre/22/Romance"
                },
                {
                    "mal_id": 9,
                    "type": "anime",
                    "name": "Ecchi",
                    "url": "https://myanimelist.net/anime/genre/9/Ecchi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 35,
                    "type": "anime",
                    "name": "Harem",
                    "url": "https://myanimelist.net/anime/genre/35/Harem"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 2117,
            "url": "https://myanimelist.net/anime/2117/Shin_Captain_Tsubasa",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1235/134518.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1235/134518t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1235/134518l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1235/134518.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1235/134518t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1235/134518l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Shin Captain Tsubasa"
                },
                {
                    "type": "Synonym",
                    "title": "New Captain Tsubasa"
                },
                {
                    "type": "Japanese",
                    "title": "新・キャプテン翼"
                }
            ],
            "title": "Shin Captain Tsubasa",
            "title_english": null,
            "title_japanese": "新・キャプテン翼",
            "title_synonyms": [
                "New Captain Tsubasa"
            ],
            "type": "OVA",
            "source": "Manga",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "1989-07-01T00:00:00+00:00",
                "to": "1990-07-01T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 1,
                        "month": 7,
                        "year": 1989
                    },
                    "to": {
                        "day": 1,
                        "month": 7,
                        "year": 1990
                    }
                },
                "string": "Jul 1, 1989 to Jul 1, 1990"
            },
            "duration": "26 min per ep",
            "rating": "G - All Ages",
            "score": 7.14,
            "scored_by": 7576,
            "rank": 3585,
            "popularity": 5846,
            "members": 13348,
            "favorites": 18,
            "synopsis": "Shin Captain Tsubasa takes place at the International Jr. Youth tournament (U-16) in Paris, France. After defeating the Argentina Jr. Youth, Italy Jr. Youth and France Jr. Youth teams, Japan Jr. Youth reaches the final against the powerful West Germany Jr. Youth team. The giant goal keeper Müller, the ace Kaltz and Europe's best player Schneider offer the Japan Jr. Youth team an extremely hard final match.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 166,
                    "type": "anime",
                    "name": "Movic",
                    "url": "https://myanimelist.net/anime/producer/166/Movic"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
                },
                {
                    "mal_id": 1480,
                    "type": "anime",
                    "name": "CBS",
                    "url": "https://myanimelist.net/anime/producer/1480/CBS"
                },
                {
                    "mal_id": 1906,
                    "type": "anime",
                    "name": "animate",
                    "url": "https://myanimelist.net/anime/producer/1906/animate"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "J.C.Staff",
                    "url": "https://myanimelist.net/anime/producer/7/JCStaff"
                },
                {
                    "mal_id": 155,
                    "type": "anime",
                    "name": "animate Film",
                    "url": "https://myanimelist.net/anime/producer/155/animate_Film"
                }
            ],
            "genres": [
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https://myanimelist.net/anime/genre/30/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 77,
                    "type": "anime",
                    "name": "Team Sports",
                    "url": "https://myanimelist.net/anime/genre/77/Team_Sports"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 2118,
            "url": "https://myanimelist.net/anime/2118/Captain_Tsubasa__Europe_Daikessen",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1234/110683.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1234/110683t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1234/110683l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1234/110683.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1234/110683t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1234/110683l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Captain Tsubasa: Europe Daikessen"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa: Europa Daikessen"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa: Soccer Boys Europe Finals"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa: Europe Dai Kessen"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa Movie (1985 Summer)"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa Movie 1"
                },
                {
                    "type": "Japanese",
                    "title": "キャプテン翼　ヨーロッパ大決戦"
                },
                {
                    "type": "Spanish",
                    "title": "Oliver y Benji: Desafío Europeo"
                }
            ],
            "title": "Captain Tsubasa: Europe Daikessen",
            "title_english": null,
            "title_japanese": "キャプテン翼　ヨーロッパ大決戦",
            "title_synonyms": [
                "Captain Tsubasa: Europa Daikessen",
                "Captain Tsubasa: Soccer Boys Europe Finals",
                "Captain Tsubasa: Europe Dai Kessen",
                "Captain Tsubasa Movie (1985 Summer)",
                "Captain Tsubasa Movie 1"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "1985-07-13T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 13,
                        "month": 7,
                        "year": 1985
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Jul 13, 1985"
            },
            "duration": "42 min",
            "rating": "G - All Ages",
            "score": 6.84,
            "scored_by": 3422,
            "rank": 4968,
            "popularity": 7786,
            "members": 6600,
            "favorites": 2,
            "synopsis": "The first Captain Tsubasa movie is about a match between an \"All Europe Boy Soccer Team\" and an \"All Japan Boy Soccer Team\" and takes place at the end of the first TV series. When the Japanese team arrives in Europe they meet incredible players with skills and strength they never had to face before.\n\n(Source: ANN)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 390,
                    "type": "anime",
                    "name": "Tsuchida Productions",
                    "url": "https://myanimelist.net/anime/producer/390/Tsuchida_Productions"
                }
            ],
            "genres": [
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https://myanimelist.net/anime/genre/30/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 77,
                    "type": "anime",
                    "name": "Team Sports",
                    "url": "https://myanimelist.net/anime/genre/77/Team_Sports"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 30196,
            "url": "https://myanimelist.net/anime/30196/Tsubasa_to_Hotaru_2015",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/12/72260.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/12/72260t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/12/72260l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/12/72260.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/12/72260t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/12/72260l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Tsubasa to Hotaru (2015)"
                },
                {
                    "type": "Synonym",
                    "title": "Ribon x Oha Suta Specials"
                },
                {
                    "type": "Synonym",
                    "title": "Tsubasa and Hotaru (2015)"
                },
                {
                    "type": "Japanese",
                    "title": "つばさとホタル"
                }
            ],
            "title": "Tsubasa to Hotaru (2015)",
            "title_english": null,
            "title_japanese": "つばさとホタル",
            "title_synonyms": [
                "Ribon x Oha Suta Specials",
                "Tsubasa and Hotaru (2015)"
            ],
            "type": "TV Special",
            "source": "Manga",
            "episodes": 4,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2015-03-06T00:00:00+00:00",
                "to": "2015-03-27T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 6,
                        "month": 3,
                        "year": 2015
                    },
                    "to": {
                        "day": 27,
                        "month": 3,
                        "year": 2015
                    }
                },
                "string": "Mar 6, 2015 to Mar 27, 2015"
            },
            "duration": "1 min per ep",
            "rating": "G - All Ages",
            "score": 6.29,
            "scored_by": 1947,
            "rank": 7995,
            "popularity": 7866,
            "members": 6409,
            "favorites": 6,
            "synopsis": "Four episodes that will be aired on TV as segments within the children's television program Oha Suta.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "J.C.Staff",
                    "url": "https://myanimelist.net/anime/producer/7/JCStaff"
                }
            ],
            "genres": [
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https://myanimelist.net/anime/genre/22/Romance"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "School",
                    "url": "https://myanimelist.net/anime/genre/23/School"
                }
            ],
            "demographics": [
                {
                    "mal_id": 25,
                    "type": "anime",
                    "name": "Shoujo",
                    "url": "https://myanimelist.net/anime/genre/25/Shoujo"
                }
            ]
        },
        {
            "mal_id": 2119,
            "url": "https://myanimelist.net/anime/2119/Captain_Tsubasa__Ayaushi_Zen_Nihon_Jr",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1902/134544.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1902/134544t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1902/134544l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1902/134544.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1902/134544t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1902/134544l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Captain Tsubasa: Ayaushi! Zen Nihon Jr."
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa: Ayaushi! Zen Nippon Jr."
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa Movie 2"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa MOVIE (1985 Winter)"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa Movie 02 - Attention! The Japanese Junior Selection"
                },
                {
                    "type": "Japanese",
                    "title": "キャプテン翼　危うし！全日本Ｊｒ．"
                },
                {
                    "type": "Spanish",
                    "title": "Oliver y Benji: La Revancha"
                }
            ],
            "title": "Captain Tsubasa: Ayaushi! Zen Nihon Jr.",
            "title_english": null,
            "title_japanese": "キャプテン翼　危うし！全日本Ｊｒ．",
            "title_synonyms": [
                "Captain Tsubasa: Ayaushi! Zen Nippon Jr.",
                "Captain Tsubasa Movie 2",
                "Captain Tsubasa MOVIE (1985 Winter)",
                "Captain Tsubasa Movie 02 - Attention! The Japanese Junior Selection"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "1985-12-21T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 21,
                        "month": 12,
                        "year": 1985
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Dec 21, 1985"
            },
            "duration": "1 hr",
            "rating": "G - All Ages",
            "score": 6.75,
            "scored_by": 2906,
            "rank": 5418,
            "popularity": 8188,
            "members": 5821,
            "favorites": 3,
            "synopsis": "The second movie is about the return match between the All Europe Soccer Team and Japan. At the beginning Hyuga denies to join the team due to his 3. defeat against Nankatsu. He practices hard with Kyra to perfect his Tiger Shot. Misaki can't come and Wakabayashi isn't allowed to play for he normally plays for a German team. With those lacks and Schneider's (the European's captain) improved skills, Tsubasa and the Japanese team have grave problems. Despite the new rules, Schneider finally want's to beat his rival Wakabayashi with his new \"illusion shot\", thus he injures Wakashimazu and Murisaki (the second and third goal keeper) with brutal face shots until Wakabayashi is finally allowed to play. In the course of the match Hyuga manages to perfect his Tiger Shot and joins the team. With those legendary players united and Hyugas new power they manage to defeat their opponent 4:3 in the last minutes.\n\n(Source: ANN)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 390,
                    "type": "anime",
                    "name": "Tsuchida Productions",
                    "url": "https://myanimelist.net/anime/producer/390/Tsuchida_Productions"
                }
            ],
            "genres": [
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https://myanimelist.net/anime/genre/30/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 77,
                    "type": "anime",
                    "name": "Team Sports",
                    "url": "https://myanimelist.net/anime/genre/77/Team_Sports"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 2121,
            "url": "https://myanimelist.net/anime/2121/Captain_Tsubasa__Sekai_Daikessen_Jr_World_Cup",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1487/134516.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1487/134516t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1487/134516l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1487/134516.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1487/134516t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1487/134516l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Captain Tsubasa: Sekai Daikessen!! Jr. World Cup"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa MOVIE (1986 Summer)"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa Movie 4"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa Movie 03: The great world competition! The Junior World Cup"
                },
                {
                    "type": "Japanese",
                    "title": "キャプテン翼　世界大決戦！！Ｊｒ．ワールドカップ"
                },
                {
                    "type": "Spanish",
                    "title": "Oliver Y Benji: La Copa del Mundo"
                }
            ],
            "title": "Captain Tsubasa: Sekai Daikessen!! Jr. World Cup",
            "title_english": null,
            "title_japanese": "キャプテン翼　世界大決戦！！Ｊｒ．ワールドカップ",
            "title_synonyms": [
                "Captain Tsubasa MOVIE (1986 Summer)",
                "Captain Tsubasa Movie 4",
                "Captain Tsubasa Movie 03: The great world competition! The Junior World Cup"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "1986-07-12T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 12,
                        "month": 7,
                        "year": 1986
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Jul 12, 1986"
            },
            "duration": "57 min",
            "rating": "G - All Ages",
            "score": 6.82,
            "scored_by": 2916,
            "rank": 5036,
            "popularity": 8171,
            "members": 5838,
            "favorites": 3,
            "synopsis": "In the fourth movie, the classical Japan-Europe match becomes intercontinental. This time they arrange a world cup with 4 teams: Japan, USA, \"All Europe\", and \"All South America\". In the first match, Japan easily defeats the USA 3:0 and in the second match Europe loses 2:3 against South America. In the final round S.A. shows their \"soccer cyborg\" Carlos Santana, a more than supreme player who seems to be undefeatable. All their classical tricks like Hyugas \"Tiger Shot\" or Tsubasas \"Top Spin\" seem to be totally worthless, but in a hard and spectacular match the Japanese learn more and more to play in unison and finally they get the win.\n\n(Source: ANN)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 390,
                    "type": "anime",
                    "name": "Tsuchida Productions",
                    "url": "https://myanimelist.net/anime/producer/390/Tsuchida_Productions"
                }
            ],
            "genres": [
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https://myanimelist.net/anime/genre/30/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 77,
                    "type": "anime",
                    "name": "Team Sports",
                    "url": "https://myanimelist.net/anime/genre/77/Team_Sports"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 2120,
            "url": "https://myanimelist.net/anime/2120/Captain_Tsubasa__Asu_ni_Mukatte_Hashire",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/11/73342.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/11/73342t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/11/73342l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/11/73342.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/11/73342t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/11/73342l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Captain Tsubasa: Asu ni Mukatte Hashire!"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa: Ashita ni Mukatte Hashire!"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa Movie (1986 Spring)"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa Movie 3"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa: Run Toward Tomorrow"
                },
                {
                    "type": "Japanese",
                    "title": "キャプテン翼　明日に向って走れ！"
                },
                {
                    "type": "Spanish",
                    "title": "Oliver y Benji: Camino al Mundial"
                }
            ],
            "title": "Captain Tsubasa: Asu ni Mukatte Hashire!",
            "title_english": null,
            "title_japanese": "キャプテン翼　明日に向って走れ！",
            "title_synonyms": [
                "Captain Tsubasa: Ashita ni Mukatte Hashire!",
                "Captain Tsubasa Movie (1986 Spring)",
                "Captain Tsubasa Movie 3",
                "Captain Tsubasa: Run Toward Tomorrow"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "1986-03-15T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 15,
                        "month": 3,
                        "year": 1986
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Mar 15, 1986"
            },
            "duration": "35 min",
            "rating": "G - All Ages",
            "score": 6.65,
            "scored_by": 2670,
            "rank": 5965,
            "popularity": 8454,
            "members": 5399,
            "favorites": 1,
            "synopsis": "The third Captain Tsubasa movie is basically about a training match of the All Japan Boy Soccer Team, but most of the time you see flashbacks of former matches, for instance the final match Nankatsu vs. Toho or when Wakabayashi challenges team captains of different sports.\n\n(Source: ANN)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 390,
                    "type": "anime",
                    "name": "Tsuchida Productions",
                    "url": "https://myanimelist.net/anime/producer/390/Tsuchida_Productions"
                }
            ],
            "genres": [
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https://myanimelist.net/anime/genre/30/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 77,
                    "type": "anime",
                    "name": "Team Sports",
                    "url": "https://myanimelist.net/anime/genre/77/Team_Sports"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 2122,
            "url": "https://myanimelist.net/anime/2122/Captain_Tsubasa__Saikyou_no_Teki_Holland_Youth",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1478/135494.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1478/135494t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1478/135494l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1478/135494.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1478/135494t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1478/135494l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Captain Tsubasa: Saikyou no Teki! Holland Youth"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa - Holland Youth"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa Holland youth team"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa: European Challenge"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa Movie 05: Saikyu no Tenki! Hollanda Youth"
                },
                {
                    "type": "Japanese",
                    "title": "キャプテン翼　「最強の敵！オランダユース」"
                }
            ],
            "title": "Captain Tsubasa: Saikyou no Teki! Holland Youth",
            "title_english": null,
            "title_japanese": "キャプテン翼　「最強の敵！オランダユース」",
            "title_synonyms": [
                "Captain Tsubasa - Holland Youth",
                "Captain Tsubasa Holland youth team",
                "Captain Tsubasa: European Challenge",
                "Captain Tsubasa Movie 05: Saikyu no Tenki! Hollanda Youth"
            ],
            "type": "OVA",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "1995-12-16T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 16,
                        "month": 12,
                        "year": 1995
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Dec 16, 1995"
            },
            "duration": "47 min",
            "rating": "G - All Ages",
            "score": 6.8,
            "scored_by": 2659,
            "rank": 5173,
            "popularity": 8436,
            "members": 5438,
            "favorites": 1,
            "synopsis": "The last Captain Tsubasa movie is about the match between Japan and Holland. After the Japanese team lost two games against this apparently supreme opponent, their confidence is at its lowest point and even Hyuga, having a hurt leg, is desperate. Thus the management tries everything to convince Wakabayashi (living in Germany) and Tsubasa (living in Brazil) to come to Holland and to help them, but both deny. Only in the second half of the third game Tsubasa appears and joins the team, giving them back their confidence and strength. With Tsubasa Ozora as their captain again, the last game ends 11:1 for Japan.\n\n(Source: ANN)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 127,
                    "type": "anime",
                    "name": "Yomiko Advertising",
                    "url": "https://myanimelist.net/anime/producer/127/Yomiko_Advertising"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "J.C.Staff",
                    "url": "https://myanimelist.net/anime/producer/7/JCStaff"
                }
            ],
            "genres": [
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https://myanimelist.net/anime/genre/30/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 77,
                    "type": "anime",
                    "name": "Team Sports",
                    "url": "https://myanimelist.net/anime/genre/77/Team_Sports"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 39226,
            "url": "https://myanimelist.net/anime/39226/Captain_Tsubasa_no_Shouka_Sakusen",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1968/98949.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1968/98949t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1968/98949l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1968/98949.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1968/98949t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1968/98949l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Captain Tsubasa no Shouka Sakusen"
                },
                {
                    "type": "Synonym",
                    "title": "Captain Tsubasa no Shoubou Sakusen"
                },
                {
                    "type": "Japanese",
                    "title": "キャプテン翼の消火作戦"
                }
            ],
            "title": "Captain Tsubasa no Shouka Sakusen",
            "title_english": null,
            "title_japanese": "キャプテン翼の消火作戦",
            "title_synonyms": [
                "Captain Tsubasa no Shoubou Sakusen"
            ],
            "type": "OVA",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": null,
                "to": null,
                "prop": {
                    "from": {
                        "day": null,
                        "month": null,
                        "year": null
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Not available"
            },
            "duration": "15 min",
            "rating": "G - All Ages",
            "score": 6.22,
            "scored_by": 210,
            "rank": 8364,
            "popularity": 14453,
            "members": 845,
            "favorites": 0,
            "synopsis": "An education film for children starring the Captain Tsubasa cast, it teaches fire extinguishing techniques, specifically a bucket relay.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [],
            "genres": [
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https://myanimelist.net/anime/genre/30/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 56,
                    "type": "anime",
                    "name": "Educational",
                    "url": "https://myanimelist.net/anime/genre/56/Educational"
                }
            ],
            "demographics": [
                {
                    "mal_id": 15,
                    "type": "anime",
                    "name": "Kids",
                    "url": "https://myanimelist.net/anime/genre/15/Kids"
                }
            ]
        }
    ],
    airing: function () {
        return this.data.filter(function (element, index) {
            return element.airing === true
        })
    }
}

const football = {
    "league": {
        "id": 39,
        "name": "Premier League",
        "country": "England",
        "logo": "https://media.api-sports.io/football/leagues/39.png",
        "flag": "https://media.api-sports.io/flags/gb.svg",
        "season": 2022,
        "standings":
            [
                {
                    "rank": 1,
                    "team": {
                        "id": 50,
                        "name": "Manchester City",
                        "logo": "https://media.api-sports.io/football/teams/50.png"
                    },
                    "points": 89,
                    "goalsDiff": 61,
                    "group": "Premier League",
                    "form": "LDWWW",
                    "status": "same",
                    "description": "Promotion - Champions League (Group Stage: )",
                    "all": {
                        "played": 38,
                        "win": 28,
                        "draw": 5,
                        "lose": 5,
                        "goals": {
                            "for": 94,
                            "against": 33
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 17,
                        "draw": 1,
                        "lose": 1,
                        "goals": {
                            "for": 60,
                            "against": 17
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 11,
                        "draw": 4,
                        "lose": 4,
                        "goals": {
                            "for": 34,
                            "against": 16
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 2,
                    "team": {
                        "id": 42,
                        "name": "Arsenal",
                        "logo": "https://media.api-sports.io/football/teams/42.png"
                    },
                    "points": 84,
                    "goalsDiff": 45,
                    "group": "Premier League",
                    "form": "WLLWW",
                    "status": "same",
                    "description": "Promotion - Champions League (Group Stage: )",
                    "all": {
                        "played": 38,
                        "win": 26,
                        "draw": 6,
                        "lose": 6,
                        "goals": {
                            "for": 88,
                            "against": 43
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 14,
                        "draw": 3,
                        "lose": 2,
                        "goals": {
                            "for": 53,
                            "against": 25
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 12,
                        "draw": 3,
                        "lose": 4,
                        "goals": {
                            "for": 35,
                            "against": 18
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 3,
                    "team": {
                        "id": 33,
                        "name": "Manchester United",
                        "logo": "https://media.api-sports.io/football/teams/33.png"
                    },
                    "points": 75,
                    "goalsDiff": 15,
                    "group": "Premier League",
                    "form": "WWWWL",
                    "status": "same",
                    "description": "Promotion - Champions League (Group Stage: )",
                    "all": {
                        "played": 38,
                        "win": 23,
                        "draw": 6,
                        "lose": 9,
                        "goals": {
                            "for": 58,
                            "against": 43
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 15,
                        "draw": 3,
                        "lose": 1,
                        "goals": {
                            "for": 36,
                            "against": 10
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 8,
                        "draw": 3,
                        "lose": 8,
                        "goals": {
                            "for": 22,
                            "against": 33
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 4,
                    "team": {
                        "id": 34,
                        "name": "Newcastle",
                        "logo": "https://media.api-sports.io/football/teams/34.png"
                    },
                    "points": 71,
                    "goalsDiff": 35,
                    "group": "Premier League",
                    "form": "DDWDL",
                    "status": "same",
                    "description": "Promotion - Champions League (Group Stage: )",
                    "all": {
                        "played": 38,
                        "win": 19,
                        "draw": 14,
                        "lose": 5,
                        "goals": {
                            "for": 68,
                            "against": 33
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 11,
                        "draw": 6,
                        "lose": 2,
                        "goals": {
                            "for": 36,
                            "against": 14
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 8,
                        "draw": 8,
                        "lose": 3,
                        "goals": {
                            "for": 32,
                            "against": 19
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 5,
                    "team": {
                        "id": 40,
                        "name": "Liverpool",
                        "logo": "https://media.api-sports.io/football/teams/40.png"
                    },
                    "points": 67,
                    "goalsDiff": 28,
                    "group": "Premier League",
                    "form": "DDWWW",
                    "status": "same",
                    "description": "Promotion - Europa League (Group Stage: )",
                    "all": {
                        "played": 38,
                        "win": 19,
                        "draw": 10,
                        "lose": 9,
                        "goals": {
                            "for": 75,
                            "against": 47
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 13,
                        "draw": 5,
                        "lose": 1,
                        "goals": {
                            "for": 46,
                            "against": 17
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 6,
                        "draw": 5,
                        "lose": 8,
                        "goals": {
                            "for": 29,
                            "against": 30
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 6,
                    "team": {
                        "id": 51,
                        "name": "Brighton",
                        "logo": "https://media.api-sports.io/football/teams/51.png"
                    },
                    "points": 62,
                    "goalsDiff": 19,
                    "group": "Premier League",
                    "form": "LDWLW",
                    "status": "same",
                    "description": "Promotion - Europa League (Group Stage: )",
                    "all": {
                        "played": 38,
                        "win": 18,
                        "draw": 8,
                        "lose": 12,
                        "goals": {
                            "for": 72,
                            "against": 53
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 10,
                        "draw": 4,
                        "lose": 5,
                        "goals": {
                            "for": 37,
                            "against": 21
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 8,
                        "draw": 4,
                        "lose": 7,
                        "goals": {
                            "for": 35,
                            "against": 32
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 7,
                    "team": {
                        "id": 66,
                        "name": "Aston Villa",
                        "logo": "https://media.api-sports.io/football/teams/66.png"
                    },
                    "points": 61,
                    "goalsDiff": 5,
                    "group": "Premier League",
                    "form": "WDWLL",
                    "status": "same",
                    "description": "Promotion - Europa Conference League (Qualification: )",
                    "all": {
                        "played": 38,
                        "win": 18,
                        "draw": 7,
                        "lose": 13,
                        "goals": {
                            "for": 51,
                            "against": 46
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 12,
                        "draw": 2,
                        "lose": 5,
                        "goals": {
                            "for": 33,
                            "against": 21
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 6,
                        "draw": 5,
                        "lose": 8,
                        "goals": {
                            "for": 18,
                            "against": 25
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 8,
                    "team": {
                        "id": 47,
                        "name": "Tottenham",
                        "logo": "https://media.api-sports.io/football/teams/47.png"
                    },
                    "points": 60,
                    "goalsDiff": 7,
                    "group": "Premier League",
                    "form": "WLLWL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 18,
                        "draw": 6,
                        "lose": 14,
                        "goals": {
                            "for": 70,
                            "against": 63
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 12,
                        "draw": 1,
                        "lose": 6,
                        "goals": {
                            "for": 37,
                            "against": 25
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 6,
                        "draw": 5,
                        "lose": 8,
                        "goals": {
                            "for": 33,
                            "against": 38
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 9,
                    "team": {
                        "id": 55,
                        "name": "Brentford",
                        "logo": "https://media.api-sports.io/football/teams/55.png"
                    },
                    "points": 59,
                    "goalsDiff": 12,
                    "group": "Premier League",
                    "form": "WWWLW",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 15,
                        "draw": 14,
                        "lose": 9,
                        "goals": {
                            "for": 58,
                            "against": 46
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 10,
                        "draw": 7,
                        "lose": 2,
                        "goals": {
                            "for": 35,
                            "against": 18
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 5,
                        "draw": 7,
                        "lose": 7,
                        "goals": {
                            "for": 23,
                            "against": 28
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 10,
                    "team": {
                        "id": 36,
                        "name": "Fulham",
                        "logo": "https://media.api-sports.io/football/teams/36.png"
                    },
                    "points": 52,
                    "goalsDiff": 2,
                    "group": "Premier League",
                    "form": "LDWWL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 15,
                        "draw": 7,
                        "lose": 16,
                        "goals": {
                            "for": 55,
                            "against": 53
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 8,
                        "draw": 5,
                        "lose": 6,
                        "goals": {
                            "for": 31,
                            "against": 29
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 7,
                        "draw": 2,
                        "lose": 10,
                        "goals": {
                            "for": 24,
                            "against": 24
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 11,
                    "team": {
                        "id": 52,
                        "name": "Crystal Palace",
                        "logo": "https://media.api-sports.io/football/teams/52.png"
                    },
                    "points": 45,
                    "goalsDiff": -9,
                    "group": "Premier League",
                    "form": "DDWLW",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 11,
                        "draw": 12,
                        "lose": 15,
                        "goals": {
                            "for": 40,
                            "against": 49
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 7,
                        "draw": 7,
                        "lose": 5,
                        "goals": {
                            "for": 21,
                            "against": 23
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 4,
                        "draw": 5,
                        "lose": 10,
                        "goals": {
                            "for": 19,
                            "against": 26
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 12,
                    "team": {
                        "id": 49,
                        "name": "Chelsea",
                        "logo": "https://media.api-sports.io/football/teams/49.png"
                    },
                    "points": 44,
                    "goalsDiff": -9,
                    "group": "Premier League",
                    "form": "DLLDW",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 11,
                        "draw": 11,
                        "lose": 16,
                        "goals": {
                            "for": 38,
                            "against": 47
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 6,
                        "draw": 7,
                        "lose": 6,
                        "goals": {
                            "for": 20,
                            "against": 19
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 5,
                        "draw": 4,
                        "lose": 10,
                        "goals": {
                            "for": 18,
                            "against": 28
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 13,
                    "team": {
                        "id": 39,
                        "name": "Wolves",
                        "logo": "https://media.api-sports.io/football/teams/39.png"
                    },
                    "points": 41,
                    "goalsDiff": -27,
                    "group": "Premier League",
                    "form": "LDLWL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 11,
                        "draw": 8,
                        "lose": 19,
                        "goals": {
                            "for": 31,
                            "against": 58
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 9,
                        "draw": 3,
                        "lose": 7,
                        "goals": {
                            "for": 19,
                            "against": 20
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 2,
                        "draw": 5,
                        "lose": 12,
                        "goals": {
                            "for": 12,
                            "against": 38
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 14,
                    "team": {
                        "id": 48,
                        "name": "West Ham",
                        "logo": "https://media.api-sports.io/football/teams/48.png"
                    },
                    "points": 40,
                    "goalsDiff": -13,
                    "group": "Premier League",
                    "form": "LWLWL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 11,
                        "draw": 7,
                        "lose": 20,
                        "goals": {
                            "for": 42,
                            "against": 55
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 8,
                        "draw": 4,
                        "lose": 7,
                        "goals": {
                            "for": 26,
                            "against": 24
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 3,
                        "draw": 3,
                        "lose": 13,
                        "goals": {
                            "for": 16,
                            "against": 31
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 15,
                    "team": {
                        "id": 35,
                        "name": "Bournemouth",
                        "logo": "https://media.api-sports.io/football/teams/35.png"
                    },
                    "points": 39,
                    "goalsDiff": -34,
                    "group": "Premier League",
                    "form": "LLLLW",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 11,
                        "draw": 6,
                        "lose": 21,
                        "goals": {
                            "for": 37,
                            "against": 71
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 6,
                        "draw": 4,
                        "lose": 9,
                        "goals": {
                            "for": 20,
                            "against": 28
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 5,
                        "draw": 2,
                        "lose": 12,
                        "goals": {
                            "for": 17,
                            "against": 43
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 16,
                    "team": {
                        "id": 65,
                        "name": "Nottingham Forest",
                        "logo": "https://media.api-sports.io/football/teams/65.png"
                    },
                    "points": 38,
                    "goalsDiff": -30,
                    "group": "Premier League",
                    "form": "DWDWL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 9,
                        "draw": 11,
                        "lose": 18,
                        "goals": {
                            "for": 38,
                            "against": 68
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 8,
                        "draw": 6,
                        "lose": 5,
                        "goals": {
                            "for": 27,
                            "against": 24
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 1,
                        "draw": 5,
                        "lose": 13,
                        "goals": {
                            "for": 11,
                            "against": 44
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 17,
                    "team": {
                        "id": 45,
                        "name": "Everton",
                        "logo": "https://media.api-sports.io/football/teams/45.png"
                    },
                    "points": 36,
                    "goalsDiff": -23,
                    "group": "Premier League",
                    "form": "WDLWD",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 8,
                        "draw": 12,
                        "lose": 18,
                        "goals": {
                            "for": 34,
                            "against": 57
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 6,
                        "draw": 3,
                        "lose": 10,
                        "goals": {
                            "for": 16,
                            "against": 27
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 2,
                        "draw": 9,
                        "lose": 8,
                        "goals": {
                            "for": 18,
                            "against": 30
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 18,
                    "team": {
                        "id": 46,
                        "name": "Leicester",
                        "logo": "https://media.api-sports.io/football/teams/46.png"
                    },
                    "points": 34,
                    "goalsDiff": -17,
                    "group": "Premier League",
                    "form": "WDLLD",
                    "status": "same",
                    "description": "Relegation - Championship",
                    "all": {
                        "played": 38,
                        "win": 9,
                        "draw": 7,
                        "lose": 22,
                        "goals": {
                            "for": 51,
                            "against": 68
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 5,
                        "draw": 4,
                        "lose": 10,
                        "goals": {
                            "for": 23,
                            "against": 27
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 4,
                        "draw": 3,
                        "lose": 12,
                        "goals": {
                            "for": 28,
                            "against": 41
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 19,
                    "team": {
                        "id": 63,
                        "name": "Leeds",
                        "logo": "https://media.api-sports.io/football/teams/63.png"
                    },
                    "points": 31,
                    "goalsDiff": -30,
                    "group": "Premier League",
                    "form": "LLDLL",
                    "status": "same",
                    "description": "Relegation - Championship",
                    "all": {
                        "played": 38,
                        "win": 7,
                        "draw": 10,
                        "lose": 21,
                        "goals": {
                            "for": 48,
                            "against": 78
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 5,
                        "draw": 7,
                        "lose": 7,
                        "goals": {
                            "for": 26,
                            "against": 37
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 2,
                        "draw": 3,
                        "lose": 14,
                        "goals": {
                            "for": 22,
                            "against": 41
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 20,
                    "team": {
                        "id": 41,
                        "name": "Southampton",
                        "logo": "https://media.api-sports.io/football/teams/41.png"
                    },
                    "points": 25,
                    "goalsDiff": -37,
                    "group": "Premier League",
                    "form": "DLLLL",
                    "status": "same",
                    "description": "Relegation - Championship",
                    "all": {
                        "played": 38,
                        "win": 6,
                        "draw": 7,
                        "lose": 25,
                        "goals": {
                            "for": 36,
                            "against": 73
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 2,
                        "draw": 5,
                        "lose": 12,
                        "goals": {
                            "for": 19,
                            "against": 37
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 4,
                        "draw": 2,
                        "lose": 13,
                        "goals": {
                            "for": 17,
                            "against": 36
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                }
            ]

    },
    champion: function() {
        return this.league.standings.filter(function(element, index) {
            return element.rank === 5
        })
    },
    top4: function() {
        return this.league.standings.filter(function(element, index) {
            return element.rank <= 4
        })
    },
    relegatedTeam: function() {
        return this.league.standings.filter(function(element, index) {
            return element.rank > 17
        })
    },
    teamLike: function() {
        return this.league.standings.filter(function(element, index) {
            return element.team.name === 'Liverpool'
        })
    },
    goaldiff: function() {
        return this.league.standings.filter(function(element, index) {
            return element.team.name === 'Liverpool'
        })[0].goalsDiff
    },
    lowScore40: function() {
        return this.league.standings.filter(function(element, index) {
            return element.points < 40
        })
    },
    GoalDifference: function() {
        return this.league.standings.filter(function(element, index) {
            return element.goalsDiff > 0
        })
    },
    lostAtHomeMoreThan5: function() {
        return this.league.standings.filter(function(element, index) {
            return element.home.lose > 5
        })
    },
    lostAwayHomeMoreThan5: function() {
        return this.league.standings.filter(function(element, index) {
            return element.away.lose > 5
        })
    }
}

console.log(football.GoalDifference())