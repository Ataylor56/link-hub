export default function (req, res) {
    switch (req.method) {
        case 'GET':
            return getSaying();
        default:
            return res.status(405).end(`Method ${req.method} is not allowed`)
    }

    function getSaying() {
        const num = Math.floor(Math.random() * 10)
        let saying = ""
        switch (num) {
            case 0: {
                saying = "What is Sup Doc? 🥕"
            }
                break;
            case 1: {
                saying = "Carne a-suh dood? 🥩"
            }
                break;
            case 2: {
                saying = "What is kickin my Chicken? 🐔"
            }
                break;
            case 3: {
                saying = "Sup 😏"
            }
                break;
            case 4: {
                saying = "What it do buckaroo? 🤠"
            }
                break;
            case 5: {
                saying = "What is ⬆️ 🐕"
            }
                break;
            case 6: {
                saying = "What's poppin 🍾"
            }
                break;
            case 7: {
                saying = "Salutations brotherin 👽"
            }
                break;
            case 8: {
                saying = "Hey, hi, how ya durrin? - Weezy F Baby"
            }
                break;
            case 9: {
                saying = "Greetings Mortal 🤖"
            }
                break;
            default: {
                saying = "What is Sup Doc? 🥕"
            }
                break;
        }
        return res.status(200).json({saying: `${saying}`})
    }
}