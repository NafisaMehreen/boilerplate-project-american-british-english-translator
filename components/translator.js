const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    translate(text, locale, highlight = false) {
        if (!locale || text == undefined) {
            return { error: "Required field(s) missing" };
        }
        if (text == "") {
            return { error: "No text to translate" };
        }
        let translation = text;
        if (locale === "american-to-british") {
            translation = this.americanToBritish(translation, highlight);
        } else if (locale === "british-to-american") {
            translation = this.britishToAmerican(translation, highlight);
        } else {
            return { error: "Invalid value for locale field" };
        }

        if (translation === text) {
            return { text: text, translation: "Everything looks good to me!"};
        }
        return { text: text, translation: translation };
    }

    americanToBritish(text, highlight = false) {
        let translation = text;
        for (let word in americanOnly) {
            let regex = new RegExp("\\b" + word + "\\b", "gi");
            translation = translation.replace(regex, (match) => {
                return highlight ? `<span class="highlight">${americanOnly[match.toLowerCase()]}</span>` : americanOnly[match.toLowerCase()];
            });
        }
        for (let word in americanToBritishSpelling) {
            let regex = new RegExp("\\b" + word + "\\b", "gi");
            translation = translation.replace(regex, (match) => {
                return highlight ? `<span class="highlight">${americanToBritishSpelling[word]}</span>` : americanToBritishSpelling[word];
            });
        }
        for (let title in americanToBritishTitles) {
            let regex = new RegExp("\\b" + title.replace('.', '\\.')+ "(?=\\s|$)", "gi");
            translation = translation.replace(regex, (match) => {
                let replacement = americanToBritishTitles[title].charAt(0).toUpperCase() + americanToBritishTitles[title].slice(1);
                return highlight ? `<span class="highlight">${replacement}</span>` : replacement;
            });

        }
        let timeRegex = /([0-9]{1,2}):([0-9]{2})/g;
        translation = translation.replace(timeRegex, (match, p1, p2) => {
            let replacement = p1 + "." + p2;
            return highlight ? `<span class="highlight">${replacement}</span>` : replacement;
        });
        return translation;
    }

    britishToAmerican(text, highlight = false) {
        let translation = text;
        const britishOnlySorted = Object.keys(britishOnly).sort((a, b) => b.length - a.length);
        
        for (let word of britishOnlySorted) {
            let regex = new RegExp("\\b" + word + "\\b", "gi");
            translation = translation.replace(regex, (match) => {
                return highlight ? `<span class="highlight">${britishOnly[match.toLowerCase()]}</span>` : britishOnly[match.toLowerCase()];
            });
        }
    
        for (let americanword in americanToBritishSpelling) {
            let britishWord = americanToBritishSpelling[americanword];
            let regex = new RegExp("\\b" + britishWord + "\\b", "gi");
            translation = translation.replace(regex, (match) => {
                return highlight ? `<span class="highlight">${americanword}</span>` : americanword;
            });
        }
        for (let americanTitle in americanToBritishTitles) {
            let britishTitle = americanToBritishTitles[americanTitle];
            let regex = new RegExp("\\b" + britishTitle.replace('.', '\\.')+ "(?=\\s|$)", "gi");
            translation = translation.replace(regex, (match) => {
                let replacement = americanTitle.charAt(0).toUpperCase() + americanTitle.slice(1);
                return highlight ? `<span class="highlight">${replacement}</span>` : replacement;
            });
        }

        let timeRegex = /([0-9]{1,2})\.([0-9]{2})/g;
        translation = translation.replace(timeRegex, (match, p1, p2) => {
            let replacement = p1 + ":" + p2;
            return highlight ? `<span class="highlight">${replacement}</span>` : replacement;
        });

        return translation;
    };

};

module.exports = Translator;