const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
    suite('American to British English', () => {
        test('Mangoes are my favorite fruit.',() => {
            let translator = new Translator();
            let text = 'Mangoes are my favorite fruit.';
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'Mangoes are my favorite fruit.', translation: 'Mangoes are my favourite fruit.'});
        });

        test('I ate yogurt for breakfast.',() => {
            let translator = new Translator();
            let text = 'I ate yogurt for breakfast.';
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'I ate yogurt for breakfast.', translation: 'I ate yoghurt for breakfast.'});
        });

        test("We had a party at my friend's condo.",() => {
            let translator = new Translator();
            let text = "We had a party at my friend's condo.";
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
            {text: "We had a party at my friend's condo.", translation: "We had a party at my friend's flat."});

        });

        test('Can you toss this in the trashcan for me?',() => {
            let translator = new Translator();
            let text = 'Can you toss this in the trashcan for me?';
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'Can you toss this in the trashcan for me?', translation: 'Can you toss this in the bin for me?'});

        });

        test('The parking lot was full.',() => {
            let translator = new Translator();
            let text = 'The parking lot was full.';
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'The parking lot was full.', translation: 'The car park was full.'});

        });

        test('Like a high tech Rube Goldberg machine.',() => {
            let translator = new Translator();
            let text = 'Like a high tech Rube Goldberg machine.';
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'Like a high tech Rube Goldberg machine.', translation: 'Like a high tech Heath Robinson device.'});

        });

        test('To play hooky means to skip class or work.',() => {
            let translator = new Translator();
            let text = 'To play hooky means to skip class or work.';
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'To play hooky means to skip class or work.', translation: 'To bunk off means to skip class or work.'});

        });

        test('No Mr. Bond, I expect you to die.', () => {
            let translator = new Translator();
            let text = 'No Mr. Bond, I expect you to die.';
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'No Mr. Bond, I expect you to die.', translation: 'No Mr Bond, I expect you to die.'});
        });

        test('Dr. Grosh will see you now.', () => {
            let translator = new Translator();
            let text = 'Dr. Grosh will see you now.';
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'Dr. Grosh will see you now.', translation: 'Dr Grosh will see you now.'});
        });
        
        test('Lunch is at 12:15 today.', () => {
            let translator = new Translator();
            let text = 'Lunch is at 12:15 today.';
            let locale = 'american-to-british';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'Lunch is at 12:15 today.', translation: 'Lunch is at 12.15 today.'});
        });
    });

    suite('British to American English', () => {
        test('We watched the footie match for a while.', () => {
            let translator = new Translator();
            let text = 'We watched the footie match for a while.';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'We watched the footie match for a while.', translation: 'We watched the soccer match for a while.'});
        });

        test('Paracetamol takes up to an hour to work.', () => {
            let translator = new Translator();
            let text = 'Paracetamol takes up to an hour to work.';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'Paracetamol takes up to an hour to work.', translation: 'Tylenol takes up to an hour to work.'});
        });

        test('First, caramelise the onions.', () => {
            let translator = new Translator();
            let text = 'First, caramelise the onions.';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'First, caramelise the onions.', translation: 'First, caramelize the onions.'});
        });

        test('I spent the bank holiday at the funfair.', () => {
            let translator = new Translator();
            let text = 'I spent the bank holiday at the funfair.';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'I spent the bank holiday at the funfair.', translation: 'I spent the public holiday at the carnival.'});
        });

        test('I had a bicky then went to the chippy.', () => {
            let translator = new Translator();
            let text = 'I had a bicky then went to the chippy.';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'I had a bicky then went to the chippy.', translation: 'I had a cookie then went to the fish-and-chip shop.'});
        });
        
        test('I\'ve just got bits and bobs in my bum bag.', () => {
            let translator = new Translator();
            let text = 'I\'ve just got bits and bobs in my bum bag.';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'I\'ve just got bits and bobs in my bum bag.', translation: 'I\'ve just got odds and ends in my fanny pack.'});
        });

        test('The car boot sale at Boxted Airfield was called off.', () => {
            let translator = new Translator();
            let text = 'The car boot sale at Boxted Airfield was called off.';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'The car boot sale at Boxted Airfield was called off.', translation: 'The swap meet at Boxted Airfield was called off.'});
        });

        test('Have you met Mrs Kalyani?', () => {
            let translator = new Translator();
            let text = 'Have you met Mrs Kalyani?';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'Have you met Mrs Kalyani?', translation: 'Have you met Mrs. Kalyani?'});
        });

        test('Prof Joyner of King\'s College, London.', () => {
            let translator = new Translator();
            let text = 'Prof Joyner of King\'s College, London.';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'Prof Joyner of King\'s College, London.', translation: 'Prof. Joyner of King\'s College, London.'});
        });

        test('Tea time is usually around 4 or 4.30.', () => {
            let translator = new Translator();
            let text = 'Tea time is usually around 4 or 4.30.';
            let locale = 'british-to-american';
            assert.deepEqual(translator.translate(text, locale),
            {text: 'Tea time is usually around 4 or 4.30.', translation: 'Tea time is usually around 4 or 4:30.'});

        });
    });
    
    suite('Highlight Translation', () => {
        test('This should highlight "Mangoes are my favorite fruit." ', () => {
            let translator = new Translator();
            let text = 'Mangoes are my favorite fruit.';
            let locale = 'american-to-british';
            let expected = `Mangoes are my <span class='highlight'>favourite</span> fruit.`;
            assert.deepEqual(translator.translate(text, locale, true), { text: text, translation: expected});
        });

        test('This should highlight "I ate yogurt for breakfast." ', () => {
            let translator = new Translator();
            let text = 'I ate yogurt for breakfast.';
            let locale = 'american-to-british';
            let expected = `I ate <span class='highlight'>yoghurt</span> for breakfast.`;
            assert.deepEqual(translator.translate(text, locale, true), { text: text, translation: expected});
        });

        test('This should highlight "We watched the footie match for a while." ', () => {
            let translator = new Translator();
            let text = 'We watched the footie match for a while.';
            let locale = 'british-to-american';
            let expected = `We watched the <span class='highlight'>soccer</span> match for a while.`;
            assert.deepEqual(translator.translate(text, locale, true), { text: text, translation: expected});
        });

        test('This should highlight "Paracetamol takes up to an hour to work." ', () => {
            let translator = new Translator();
            let text = 'Paracetamol takes up to an hour to work.';
            let locale = 'british-to-american';
            let expected = `<span class='highlight'>Tylenol</span> takes up to an hour to work.`;
            assert.deepEqual(translator.translate(text, locale, true), { text: text, translation: expected});
        });
    });
    
    
});
