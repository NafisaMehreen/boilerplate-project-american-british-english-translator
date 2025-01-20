const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {

    suite('Mangoes are my favorite fruit.', () => {
        test('American to British English', () => {
            let translator = new Translator();
            let text = 'Mangoes are my favorite fruit.';
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'Mangoes are my favorite fruit.', translation: 'Mangoes are my favourite fruit.' });
        });
    });

    suite('I ate yogurt for breakfast.', () => {
        test('American to British English', () => {
            let translator = new Translator();
            let text = 'I ate yogurt for breakfast.';
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'I ate yogurt for breakfast.', translation: 'I ate yoghurt for breakfast.' });
        });
    });

    suite("We had a party at my friend's condo.", () => {
        test('American to British English', () => {
            let translator = new Translator();
            let text = "We had a party at my friend's condo.";
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
                { text: "We had a party at my friend's condo.", translation: "We had a party at my friend's flat." });
        });
    });

    suite('Can you toss this in the trashcan for me?', () => {
        test('American to British English', () => {
            let translator = new Translator();
            let text = 'Can you toss this in the trashcan for me?';
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'Can you toss this in the trashcan for me?', translation: 'Can you toss this in the bin for me?' });
        });
    });

    suite('The parking lot was full.', () => {
        test('American to British English', () => {
            let translator = new Translator();
            let text = 'The parking lot was full.';
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'The parking lot was full.', translation: 'The car park was full.' });
        });
    });

    suite('Like a high tech Rube Goldberg machine.', () => {
        test('American to British English', () => {
            let translator = new Translator();
            let text = 'Like a high tech Rube Goldberg machine.';
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'Like a high tech Rube Goldberg machine.', translation: 'Like a high tech Heath Robinson device.' });
        });
    });

    suite('To play hooky means to skip class or work.', () => {
        test('American to British English', () => {
            let translator = new Translator();
            let text = 'To play hooky means to skip class or work.';
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'To play hooky means to skip class or work.', translation: 'To bunk off means to skip class or work.' });
        });
    });

    suite('No Mr. Bond, I expect you to die.', () => {
        test('American to British English', () => {
            let translator = new Translator();
            let text = 'No Mr. Bond, I expect you to die.';
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'No Mr. Bond, I expect you to die.', translation: 'No Mr Bond, I expect you to die.' });
        });
    });

    suite('Dr. Grosh will see you now.', () => {
        test('American to British English', () => {
            let translator = new Translator();
            let text = 'Dr. Grosh will see you now.';
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'Dr. Grosh will see you now.', translation: 'Dr Grosh will see you now.' });
        });
    });

    suite('Lunch is at 12:15 today.', () => {
        test('American to British English', () => {
            let translator = new Translator();
            let text = 'Lunch is at 12:15 today.';
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'Lunch is at 12:15 today.', translation: 'Lunch is at 12.15 today.' });
        });
    });

    suite('We watched the footie match for a while.', () => {
        test('British to American English', () => {
            let translator = new Translator();
            let text = 'We watched the footie match for a while.';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'We watched the footie match for a while.', translation: 'We watched the soccer match for a while.' });
        });
    });

    suite('Paracetamol takes up to an hour to work.', () => {
        test('British to American English', () => {
            let translator = new Translator();
            let text = 'Paracetamol takes up to an hour to work.';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'Paracetamol takes up to an hour to work.', translation: 'Tylenol takes up to an hour to work.' });
        });
    });

    suite('First, caramelise the onions.', () => {
        test('British to American English', () => {
            let translator = new Translator();
            let text = 'First, caramelise the onions.';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'First, caramelise the onions.', translation: 'First, caramelize the onions.' });
        });
    });

    suite('I spent the bank holiday at the funfair.', () => {
        test('British to American English', () => {
            let translator = new Translator();
            let text = 'I spent the bank holiday at the funfair.';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'I spent the bank holiday at the funfair.', translation: 'I spent the public holiday at the carnival.' });
        });
    });

    suite('I had a bicky then went to the chippy.', () => {
        test('British to American English', () => {
            let translator = new Translator();
            let text = 'I had a bicky then went to the chippy.';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'I had a bicky then went to the chippy.', translation: 'I had a cookie then went to the fish-and-chip shop.' });
        });
    });

    suite('I\'ve just got bits and bobs in my bum bag.', () => {
        test('British to American English', () => {
            let translator = new Translator();
            let text = 'I\'ve just got bits and bobs in my bum bag.';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'I\'ve just got bits and bobs in my bum bag.', translation: 'I\'ve just got odds and ends in my fanny pack.' });
        });
    });

    suite('The car boot sale at Boxted Airfield was called off.', () => {
        test('British to American English', () => {
            let translator = new Translator();
            let text = 'The car boot sale at Boxted Airfield was called off.';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'The car boot sale at Boxted Airfield was called off.', translation: 'The swap meet at Boxted Airfield was called off.' });
        });
    });

    suite('Have you met Mrs Kalyani?', () => {
        test('British to American English', () => {
            let translator = new Translator();
            let text = 'Have you met Mrs Kalyani?';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'Have you met Mrs Kalyani?', translation: 'Have you met Mrs. Kalyani?' });
        });
    });

    suite('Prof Joyner of King\'s College, London.', () => {
        test('British to American English', () => {
            let translator = new Translator();
            let text = 'Prof Joyner of King\'s College, London.';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'Prof Joyner of King\'s College, London.', translation: 'Prof. Joyner of King\'s College, London.' });
        });
    });

    suite('Tea time is usually around 4 or 4.30.', () => {
        test('British to American English', () => {
            let translator = new Translator();
            let text = 'Tea time is usually around 4 or 4.30.';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
                { text: 'Tea time is usually around 4 or 4.30.', translation: 'Tea time is usually around 4 or 4:30.' });
        });
    });
});

suite('Highlight Translation - Mangoes are my favorite fruit.', () => {
    test('Highlight', () => {
        let translator = new Translator();
        let text = 'Mangoes are my favorite fruit.';
        let locale = 'american-to-british';
        let expected = `Mangoes are my <span class="highlight">favourite</span> fruit.`;
        assert.deepEqual(translator.translate(text, locale, true), { text: text, translation: expected });
    });
});

suite('Highlight Translation - I ate yogurt for breakfast.', () => {
    test('Highlight', () => {
        let translator = new Translator();
        let text = 'I ate yogurt for breakfast.';
        let locale = 'american-to-british';
        let expected = `I ate <span class="highlight">yoghurt</span> for breakfast.`;
        assert.deepEqual(translator.translate(text, locale, true), { text: text, translation: expected });
    });
});

suite('Highlight Translation - We watched the footie match for a while.', () => {
    test('Highlight', () => {
        let translator = new Translator();
        let text = 'We watched the footie match for a while.';
        let locale = 'british-to-american';
        let expected = `We watched the <span class="highlight">soccer</span> match for a while.`;
        assert.deepEqual(translator.translate(text, locale, true), { text: text, translation: expected });
    });
});

suite('Highlight Translation - Paracetamol takes up to an hour to work.', () => {
    test('Highlight', () => {
        let translator = new Translator();
        let text = 'Paracetamol takes up to an hour to work.';
        let locale = 'british-to-american';
        let expected = `<span class="highlight">Tylenol</span> takes up to an hour to work.`;
        assert.deepEqual(translator.translate(text, locale, true), { text: text, translation: expected });
    });
});
