"use strict";
console.groupCollapsed('8. Sukurkite funkciją, kuri taiso pastraipos klaidas');
{
    const REGEX_WHITESPACE = /[\s]+/g;
    const REGEX_SEPARATORS = /[.?!]/g;
    const removeMultipleSpaces = (str) => str.replaceAll(REGEX_WHITESPACE, ' ');
    const removeSpacesBeforeCommas = (str) => str.replaceAll(' , ', ',');
    const ensureSpacesAfterCommas = (str) => str.replaceAll(',', (_, index, text) => (text[index + 1] === ' ' ? ',' : ', '));
    const decomposeText = (text) => {
        const captures = [...text.matchAll(REGEX_SEPARATORS)];
        let from = -1;
        const sentencesAndSeparators = captures.reduce((prevSentencesAndSeparators, capture) => {
            const [separator] = capture;
            const index = capture.index;
            const sentence = text.slice(from + 1, index);
            prevSentencesAndSeparators.sentences.push(sentence);
            prevSentencesAndSeparators.separators.push(separator);
            from = index;
            return prevSentencesAndSeparators;
        }, {
            sentences: [],
            separators: [],
        });
        return sentencesAndSeparators;
    };
    const composeText = ({ sentences, separators }) => sentences
        .reduce((text, sentence, index) => `${text + sentence + separators[index]} `, '');
    const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
    const fixText = (text) => {
        let result = text.trim();
        result = removeMultipleSpaces(result);
        result = removeSpacesBeforeCommas(result);
        result = ensureSpacesAfterCommas(result);
        const decomposedText = decomposeText(result);
        const sentences = decomposedText.sentences
            .map((sentence) => sentence.trim())
            .map(capitalize);
        result = composeText(Object.assign(Object.assign({}, decomposedText), { sentences }));
        return result;
    };
    const text = '    labas , aš Serbentautas .   Man      patinka vaisiai? Visokie     vaisiai  !    Ypač    bananai       , obuoliai,kriaušės.    ';
    const fixedText = fixText(text);
    console.log(fixedText);
}
console.groupEnd();
//# sourceMappingURL=ats.js.map