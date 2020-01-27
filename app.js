const happyBtn = document.querySelector(".happiness");
const loveBtn = document.querySelector(".love");
const successBtn = document.querySelector(".success");
const confidenceBtn = document.querySelector(".confidence");

const content = document.querySelector(".content");


happyBtn.addEventListener("click", () => {
  readOutLoud(happiness);
})
loveBtn.addEventListener("click", () => {
  readOutLoud(love);
})
successBtn.addEventListener("click", () => {
  readOutLoud(success);
})
confidenceBtn.addEventListener("click", () => {
  readOutLoud(selfConfidence);
})

const readOutLoud = (category) => {
  const speech = new SpeechSynthesisUtterance();
  const quote = category[Math.floor(Math.random() * category.length)]
  content.textContent = quote
  speech.text = quote;
  speech.volume = 1;
  speech.lang = "en-US"
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}


const happiness = [
  "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will. By Epictetus",
  "Happiness is not something ready-made. It comes from your own actions. By Dalai Lama",
  "Happy people plan actions, they don’t plan results. By Dennis Waitley",
  "Happiness is when what you think, what you say, and what you do are in harmony. By Mahatma Gandhi",
  "Time you enjoy wasting is not wasted time. By Marthe Troly-Curtin",
  "Action may not always bring happiness; but there is no happiness without action. By Benjamin Disraeli",
  "Happiness is nothing more than good health and a bad memory. By Albert Schweitzer"
];

const love = [
  "I love you not because of who you are, but because of who I am when I am with you. By Roy Croft",
  "A friend is someone who knows all about you and still loves you. By Elbert Hubbard",
  "Friends show their love in times of trouble, not in happiness. By Euripides",
  "If I had a flower for every time I thought of you… I could walk through my garden forever. By Alfred Tennyson",
  "Love is when you meet someone who tells you something new about yourself. By Andre Breton",
  "The most important thing in life is to learn how to give out love, and to let it come in. By Morrie Schwartz",
  "If I know what love is, it is because of you. By Herman Hesse",
  "Better to have lost and loved than never to have loved at all. Ernest Hemingway"
]

const success = [
  "Action is the foundational key to all success. By Pablo Picasso",
  "Victory is sweetest when you've known defeat. By Malcolm S. Forbes",
  "I attribute my success to this: I never gave or took any excuse. By Florence Nightingale",
  "Doing the best at this moment puts you in the best place for the next moment. By Oprah Winfrey",
  "Things may come to those who wait, but only the things left by those who hustle. By Abraham Lincoln",
  "The secret of success in life is for a man to be ready for his opportunity when it comes By Benjamin Disraeli",
  "Do not be embarrassed by your failures, learn from them and start again. By Richard Branson",
  "Don't let what you cannot do interfere with what you can do. By John R. Wooden",
  "Don’t let the fear of losing be greater than the excitement of winning By Robert Kiyosaki",
  "Judge your success by what you had to give up in order to get it By Dalai Lama",
  "Amateurs sit and wait for inspiration, the rest of us just get up and go to work By Stephen King",
  "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better. By Samuel Beckett",
  "Success is going from failure to failure without losing enthusiasm. By Winston Churchill",
  "Don’t wait. The time will never be just right. By Napoleon Hill",
  "Start where you are. Use what you have. Do what you can. By Arthur Ashe",
];

const selfConfidence = [
  "Why should we worry about what others think of us, do we have more confidence in their opinions than we do our own? By Brigham Young",
  "It ain't what they call you, it's what you answer to. By W.C. Fields",
  "The better you feel about yourself, the less you feel the need to show off. By Robert Hand",
  "Trust yourself. You know more than you think you do. By Benjamin Spock",
  "One of the greatest regrets in life is being what others would want you to be, rather than being yourself. By Shannon L. Alder",
  "To fall in love with yourself is the first secret to happiness. By Robert Morley",
  "The real difficulty is to overcome how you think about yourself. By Maya Angelou",
  "Growth begins when we start to accept our own weakness. By Jean Vanier",
  "Too many people overvalue what they are not and undervalue what they are. By Malcolm S. Forbes",
  "It is never too late to be what you might have been. By George Eliot"
]