const englishContent = {
    title: "Mind Gym",
    readingTitle: "Reading Materials",
    article1Title: "Article 1",
    article1Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu.",
    article2Title: "Article 2",
    article2Text: "Donec vehicula cursus metus, id elementum est dignissim et. Vestibulum ante ipsum primis in faucibus.",
    newsTitle: "Latest News",
    news1: "News Headline 1",
    news2: "News Headline 2",
    news3: "News Headline 3",
    languageToggleText: "Switch to Hindi",
    language: "en-IN" // Indian English
};

const hindiContent = {
    title: "माइंड जिम",
    readingTitle: "पढ़ने की सामग्री",
    article1Title: "लेख 1",
    article1Text: "लोरम इप्सम डोलर सीट अमेट, कॉन्सेक्टेटुर एडिपिसिंग एलिट. क्विस्कुए सीट अमेट अक्युमसान आर्कू.",
    article2Title: "लेख 2",
    article2Text: "डोनेक वेहिकुला कर्सस मेटस, आईडी एलेमेंटम एस्ट डिग्निसिम एट. वेस्टिबुलम एंते इप्सम प्रिमिस इन फॉसिबस.",
    newsTitle: "ताज़ा खबर",
    news1: "समाचार शीर्षक 1",
    news2: "समाचार शीर्षक 2",
    news3: "समाचार शीर्षक 3",
    languageToggleText: "स्विच टू इंग्लिश",
    language: "hi-IN" // Hindi
};

let currentLanguage = englishContent; // Default to English

function toggleLanguage() {
    currentLanguage = (currentLanguage.language === "en-IN") ? hindiContent : englishContent;
    setContent(currentLanguage);
}

function setContent(content) {
    document.getElementById('title').textContent = content.title;
    document.getElementById('reading-title').textContent = content.readingTitle;
    document.getElementById('article1-title').textContent = content.article1Title;
    document.getElementById('article1-text').textContent = content.article1Text;
    document.getElementById('article2-title').textContent = content.article2Title;
    document.getElementById('article2-text').textContent = content.article2Text;
    document.getElementById('news-title').textContent = content.newsTitle;
    document.getElementById('news1').textContent = content.news1;
    document.getElementById('news2').textContent = content.news2;
    document.getElementById('news3').textContent = content.news3;
    document.getElementById('language-toggle').textContent = content.languageToggleText;
}

function reciteText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = currentLanguage.language;
    speechSynthesis.speak(utterance);
}
