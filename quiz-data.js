// Love Island USA Season 7 Cast Data
const castMembers = {
    huda_mustafa: {
        name: "Huda Mustafa",
        age: 24,
        profession: "Fitness Coach & Influencer",
        hometown: "Raleigh, North Carolina",
        emoji: "🔥",
        traits: ["Fiery", "Direct", "Confident", "Passionate", "Unfiltered", "Fitness-focused"],
        description: "You're the Hurricane Huda of your friend group! You're passionate, direct, and never afraid to speak your mind. You work hard for what you want and aren't afraid to demand respect.",
        personality: "You have a fiery personality and aren't afraid to be controversial. You're extremely confident and passionate about fitness and health. You express your needs openly and can be quite possessive in relationships.",
        strengths: ["Confident", "Passionate", "Hardworking", "Direct Communication", "Fitness-focused"],
        approach: "You go after what you want with full intensity and aren't afraid to stir up drama if needed."
    },
    jeremiah_brown: {
        name: "Jeremiah Brown",
        age: 25,
        profession: "Professional Model",
        hometown: "Los Angeles, California",
        emoji: "💫",
        traits: ["Emotional", "Communicative", "Charismatic", "Authentic", "Empathetic", "Sweet"],
        description: "You're the emotionally intelligent heartthrob! You're not afraid to show your feelings and you value deep, meaningful connections over superficial ones.",
        personality: "You're a 'communication nerd' who values emotional connections. You're comfortable being vulnerable and expressing your feelings. You have a big heart and love matcha!",
        strengths: ["Emotional Intelligence", "Communication", "Authenticity", "Empathy", "Charisma"],
        approach: "You lead with your heart and aren't afraid to be vulnerable. You believe in genuine connections and meaningful conversations."
    },
    chelley_bissainthe: {
        name: "Chelley Bissainthe",
        age: 27,
        profession: "Day Trader & Model",
        hometown: "Queens, New York",
        emoji: "⭐",
        traits: ["Confident", "Astrology-obsessed", "Authentic", "Smart", "Charming", "Strong"],
        description: "You're the zodiac queen! You're confident, smart, and absolutely obsessed with astrology. You judge people by their star signs and you're proud of it.",
        personality: "You're passionate about astrology and use it to judge compatibility. You're confident, authentic, and have strong cultural pride. You're also very smart and level-headed.",
        strengths: ["Astrology Knowledge", "Confidence", "Cultural Pride", "Intelligence", "Authenticity"],
        approach: "You use astrology to guide your decisions and aren't afraid to judge people by their zodiac signs. You're proud of who you are."
    },
    olandria_carthen: {
        name: "Olandria Carthen",
        age: 27,
        profession: "Elevator Sales Associate",
        hometown: "Houston, Texas",
        emoji: "👑",
        traits: ["Southern Belle", "Emotionally Intelligent", "Classy", "Level-headed", "Traditional", "Confident"],
        description: "You're the Bama Barbie! You're a Southern belle who values traditional courtship and old-fashioned manners. You're emotionally mature and always put-together.",
        personality: "You're a proud Southern belle who values traditional courtship. You're emotionally intelligent, level-headed, and have high standards. You want a man who will court you properly.",
        strengths: ["Emotional Intelligence", "Traditional Values", "Class", "Self-Awareness", "Strong Standards"],
        approach: "You believe in traditional courtship and want someone who will treat you like the Southern belle you are."
    },
    belle_a_walker: {
        name: "Belle-A Walker",
        age: 22,
        profession: "Barista & Model",
        hometown: "Honolulu, Hawaii",
        emoji: "🌺",
        traits: ["Authentic", "Genuine", "Loyal", "Island-vibes", "Family-oriented", "Respectful"],
        description: "You're the authentic island girl! You bring genuine Hawaiian vibes and are all about loyalty, family, and keeping it real. You're a true girl's girl.",
        personality: "You're authentic and genuine with strong family values. You have that relaxed island vibe but strong morals. You're loyal to your friends and believe in respectful dating.",
        strengths: ["Authenticity", "Loyalty", "Family Values", "Respectful", "Genuine"],
        approach: "You keep it real and authentic. You're all about genuine connections and being a supportive friend."
    },
    taylor_williams: {
        name: "Taylor Williams",
        age: 24,
        profession: "Model & Rancher",
        hometown: "Oklahoma City, Oklahoma",
        emoji: "🤠",
        traits: ["Cowboy", "Honest", "Quiet", "Deep", "Country", "Hardworking"],
        description: "You're the cowboy gentleman! You're honest, hardworking, and have that all-American charm. You're quiet but have incredible depth underneath.",
        personality: "You're a true cowboy with country values. You're honest, hardworking, and have an all-American personality. You're quiet but have more depth than people realize.",
        strengths: ["Honesty", "Work Ethic", "Country Values", "Depth", "Authenticity"],
        approach: "You're genuine and honest in everything you do. You believe in hard work and treating people with respect."
    },
    nicolas_vansteenberghe: {
        name: "Nicolas Vansteenberghe",
        age: 24,
        profession: "Nurse & Model",
        hometown: "Jacksonville, Florida",
        emoji: "🏥",
        traits: ["Kind", "Adventurous", "Caring", "Thrill-seeking", "Compassionate", "Charming"],
        description: "You're the adventurous nurse! You're genuinely kind and caring, but also love extreme sports and adventures. You're the perfect mix of compassion and excitement.",
        personality: "You're genuinely kind and compassionate (perfect for nursing!) but also love adventure and extreme sports. You're charming, laid-back, and always up for trying new things.",
        strengths: ["Compassion", "Adventure", "Kindness", "Charm", "Thrill-seeking"],
        approach: "You're down for anything - whether it's helping others or jumping out of a plane. You bring kindness and excitement to everything."
    },
    ace_greene: {
        name: "Ace Greene",
        age: 22,
        profession: "Content Creator & Dancer",
        hometown: "Los Angeles, California",
        emoji: "💃",
        traits: ["Short King", "Confident", "Entertaining", "Family-oriented", "Dancing", "Energetic"],
        description: "You're the dancing short king! You're confident, entertaining, and bring joy wherever you go. You don't let your height define you - your personality does all the talking.",
        personality: "You're a self-proclaimed 'short king' who doesn't let height hold you back. You're confident, love dancing, and bring joy to everyone. You're family-oriented and incredibly entertaining.",
        strengths: ["Confidence", "Entertainment", "Dancing", "Family Love", "Positive Energy"],
        approach: "You lead with your personality and bring joy through dancing. You're confident in who you are regardless of what others think."
    },
    austin_shepard: {
        name: "Austin Shepard",
        age: 26,
        profession: "Pool Cleaner",
        hometown: "Northville, Michigan",
        emoji: "😄",
        traits: ["Funny", "Easygoing", "Authentic", "Outdoorsy", "Adventurous", "Down-to-earth"],
        description: "You're the funny guy! You're easygoing, authentic, and love making people laugh. You're down-to-earth and love outdoor adventures and extreme sports.",
        personality: "You're the joker of the group with an easygoing personality. You're authentic, love outdoor activities, and have a great sense of humor. You're down-to-earth and hardworking.",
        strengths: ["Humor", "Authenticity", "Outdoor Skills", "Easy-going Nature", "Adventure"],
        approach: "You use humor to connect with people and keep things light. You're authentic and love having fun outdoors."
    }
};

// Comprehensive question pool with targeting logic
const questionPool = [
    {
        id: 1,
        question: "How do you handle conflict in relationships?",
        options: [
            { text: "I confront it head-on and speak my mind directly", points: { huda_mustafa: 3, taylor_williams: 1 } },
            { text: "I try to communicate openly and work through it together", points: { jeremiah_brown: 3, nicolas_vansteenberghe: 2 } },
            { text: "I stay calm and approach it with emotional intelligence", points: { olandria_carthen: 3, chelley_bissainthe: 2 } },
            { text: "I use humor to diffuse the tension", points: { austin_shepard: 3, ace_greene: 2 } }
        ]
    },
    {
        id: 2,
        question: "What's your ideal first date?",
        options: [
            { text: "An intense workout session followed by a healthy meal", points: { huda_mustafa: 3 } },
            { text: "A deep conversation over coffee or matcha", points: { jeremiah_brown: 3, belle_a_walker: 1 } },
            { text: "Something adventurous like skydiving or extreme sports", points: { nicolas_vansteenberghe: 3, austin_shepard: 2 } },
            { text: "A traditional dinner where they can properly court me", points: { olandria_carthen: 3 } },
            { text: "A fun dance class or party where we can let loose", points: { ace_greene: 3 } }
        ]
    },
    {
        id: 3,
        question: "How do you make decisions about relationships?",
        options: [
            { text: "I check their zodiac sign compatibility first", points: { chelley_bissainthe: 3 } },
            { text: "I trust my gut and go with my feelings", points: { jeremiah_brown: 2, belle_a_walker: 3 } },
            { text: "I analyze if they meet my standards and values", points: { olandria_carthen: 3, huda_mustafa: 2 } },
            { text: "I see if we can have fun and laugh together", points: { austin_shepard: 3, ace_greene: 2 } },
            { text: "I look for someone who shares my adventurous spirit", points: { nicolas_vansteenberghe: 3, taylor_williams: 1 } }
        ]
    },
    {
        id: 4,
        question: "What's your biggest strength in relationships?",
        options: [
            { text: "My emotional intelligence and communication skills", points: { jeremiah_brown: 3, olandria_carthen: 2 } },
            { text: "My confidence and direct approach", points: { huda_mustafa: 3, chelley_bissainthe: 2 } },
            { text: "My loyalty and authenticity", points: { belle_a_walker: 3, taylor_williams: 2 } },
            { text: "My caring and compassionate nature", points: { nicolas_vansteenberghe: 3 } },
            { text: "My ability to make people laugh and have fun", points: { austin_shepard: 3, ace_greene: 2 } }
        ]
    },
    {
        id: 5,
        question: "How do you express your emotions?",
        options: [
            { text: "I'm very open and don't mind crying in front of people", points: { jeremiah_brown: 3 } },
            { text: "I keep it real and authentic, no filters", points: { belle_a_walker: 3, huda_mustafa: 2 } },
            { text: "I'm passionate and fiery when I feel strongly", points: { huda_mustafa: 3 } },
            { text: "I'm measured and emotionally intelligent", points: { olandria_carthen: 3, chelley_bissainthe: 2 } },
            { text: "I use humor to express how I feel", points: { austin_shepard: 3, ace_greene: 2 } }
        ]
    },
    {
        id: 6,
        question: "What's your ideal partner like?",
        options: [
            { text: "Someone who can match my energy and intensity", points: { huda_mustafa: 3 } },
            { text: "Someone emotionally available who loves deep conversations", points: { jeremiah_brown: 3 } },
            { text: "Someone whose zodiac sign is compatible with mine", points: { chelley_bissainthe: 3 } },
            { text: "A traditional gentleman who knows how to court properly", points: { olandria_carthen: 3 } },
            { text: "Someone genuine who shares my values", points: { belle_a_walker: 3, taylor_williams: 2 } }
        ]
    },
    {
        id: 7,
        question: "How do you handle jealousy?",
        options: [
            { text: "I confront it directly and make my feelings known", points: { huda_mustafa: 3 } },
            { text: "I communicate about it openly and honestly", points: { jeremiah_brown: 3, belle_a_walker: 2 } },
            { text: "I handle it with class and emotional maturity", points: { olandria_carthen: 3, chelley_bissainthe: 2 } },
            { text: "I try to understand their perspective first", points: { nicolas_vansteenberghe: 3 } },
            { text: "I make jokes about it to lighten the mood", points: { austin_shepard: 3, ace_greene: 2 } }
        ]
    },
    {
        id: 8,
        question: "What's your biggest fear in love?",
        options: [
            { text: "Being treated like a 'side ho' or not being prioritized", points: { huda_mustafa: 3 } },
            { text: "Not finding someone who understands my emotional depth", points: { jeremiah_brown: 3 } },
            { text: "Dating someone with incompatible zodiac energy", points: { chelley_bissainthe: 3 } },
            { text: "Not being courted with proper respect and manners", points: { olandria_carthen: 3 } },
            { text: "Losing my authentic self in a relationship", points: { belle_a_walker: 3, taylor_williams: 2 } }
        ]
    },
    {
        id: 9,
        question: "How do you show love?",
        options: [
            { text: "Through passionate intensity and demanding attention", points: { huda_mustafa: 3 } },
            { text: "Through emotional vulnerability and sweet gestures", points: { jeremiah_brown: 3 } },
            { text: "Through loyalty and being a supportive partner", points: { belle_a_walker: 3, taylor_williams: 2 } },
            { text: "Through caring actions and helping others", points: { nicolas_vansteenberghe: 3 } },
            { text: "Through making them laugh and entertaining them", points: { austin_shepard: 3, ace_greene: 2 } }
        ]
    },
    {
        id: 10,
        question: "What's your approach to fitness and health?",
        options: [
            { text: "It's my passion and lifestyle - I'm a fitness coach", points: { huda_mustafa: 3 } },
            { text: "I work out regularly and love staying active", points: { jeremiah_brown: 2, nicolas_vansteenberghe: 2, taylor_williams: 2 } },
            { text: "I like to stay fit but it's not my main focus", points: { chelley_bissainthe: 2, olandria_carthen: 2 } },
            { text: "I prefer outdoor activities and adventure sports", points: { austin_shepard: 3, nicolas_vansteenberghe: 1 } },
            { text: "Dancing is my main form of exercise", points: { ace_greene: 3 } }
        ]
    },
    {
        id: 11,
        question: "How do you deal with drama in your friend group?",
        options: [
            { text: "I'm not afraid to stir the pot if needed", points: { huda_mustafa: 3 } },
            { text: "I try to mediate and help everyone communicate", points: { jeremiah_brown: 3, nicolas_vansteenberghe: 2 } },
            { text: "I stay above it and keep my composure", points: { olandria_carthen: 3, chelley_bissainthe: 2 } },
            { text: "I'm a girl's girl and always loyal to my friends", points: { belle_a_walker: 3 } },
            { text: "I try to lighten the mood with humor", points: { austin_shepard: 3, ace_greene: 2 } }
        ]
    },
    {
        id: 12,
        question: "What's your biggest turn-on?",
        options: [
            { text: "Someone who can match my passion and intensity", points: { huda_mustafa: 3 } },
            { text: "Emotional intelligence and good communication", points: { jeremiah_brown: 3 } },
            { text: "Confidence and cultural pride", points: { chelley_bissainthe: 3 } },
            { text: "Traditional manners and respectful courtship", points: { olandria_carthen: 3 } },
            { text: "Authenticity and genuine personality", points: { belle_a_walker: 3, taylor_williams: 2 } }
        ]
    },
    {
        id: 13,
        question: "How do you handle criticism?",
        options: [
            { text: "I'm unapologetic and stand by my actions", points: { huda_mustafa: 3 } },
            { text: "I listen and try to understand their perspective", points: { jeremiah_brown: 3, nicolas_vansteenberghe: 2 } },
            { text: "I handle it with grace and emotional maturity", points: { olandria_carthen: 3, chelley_bissainthe: 2 } },
            { text: "I stay true to myself regardless of what others say", points: { belle_a_walker: 3, taylor_williams: 2 } },
            { text: "I make a joke about it to deflect", points: { austin_shepard: 3, ace_greene: 2 } }
        ]
    },
    {
        id: 14,
        question: "What's your ideal living situation?",
        options: [
            { text: "A home gym where I can train and coach others", points: { huda_mustafa: 3 } },
            { text: "A cozy space perfect for intimate conversations", points: { jeremiah_brown: 3 } },
            { text: "A stylish place that reflects my personality", points: { chelley_bissainthe: 3 } },
            { text: "A classic, elegant home with Southern charm", points: { olandria_carthen: 3 } },
            { text: "A beachfront property with island vibes", points: { belle_a_walker: 3 } },
            { text: "A ranch with lots of land and animals", points: { taylor_williams: 3 } },
            { text: "Somewhere with space for adventure gear", points: { nicolas_vansteenberghe: 3 } },
            { text: "A fun space perfect for entertaining and dancing", points: { ace_greene: 3 } }
        ]
    },
    {
        id: 15,
        question: "How do you define success?",
        options: [
            { text: "Building my fitness empire and helping others transform", points: { huda_mustafa: 3 } },
            { text: "Finding genuine love and meaningful connections", points: { jeremiah_brown: 3 } },
            { text: "Achieving financial independence and authenticity", points: { chelley_bissainthe: 3 } },
            { text: "Being respected and treated like the queen I am", points: { olandria_carthen: 3 } },
            { text: "Staying true to my values and family", points: { belle_a_walker: 3, taylor_williams: 2 } },
            { text: "Helping others and making a positive impact", points: { nicolas_vansteenberghe: 3 } },
            { text: "Bringing joy to millions through my content", points: { ace_greene: 3 } },
            { text: "Living life on my own terms and having fun", points: { austin_shepard: 3 } }
        ]
    },
    {
        id: 16,
        question: "What's your communication style?",
        options: [
            { text: "Direct and unfiltered - I say what I mean", points: { huda_mustafa: 3 } },
            { text: "I'm a self-described 'communication nerd' who loves deep talks", points: { jeremiah_brown: 3 } },
            { text: "Confident and authentic, with cultural pride", points: { chelley_bissainthe: 3 } },
            { text: "Emotionally intelligent and measured", points: { olandria_carthen: 3 } },
            { text: "Genuine and respectful, keeping it real", points: { belle_a_walker: 3, taylor_williams: 2 } },
            { text: "Kind and compassionate, always caring", points: { nicolas_vansteenberghe: 3 } },
            { text: "Confident and entertaining, full of personality", points: { ace_greene: 3 } },
            { text: "Humorous and easygoing, making people laugh", points: { austin_shepard: 3 } }
        ]
    },
    {
        id: 17,
        question: "What's your biggest pet peeve in dating?",
        options: [
            { text: "When someone doesn't give me the attention I deserve", points: { huda_mustafa: 3 } },
            { text: "When people aren't emotionally available or vulnerable", points: { jeremiah_brown: 3 } },
            { text: "When someone's zodiac sign doesn't match their personality", points: { chelley_bissainthe: 3 } },
            { text: "When men don't know how to properly court a lady", points: { olandria_carthen: 3 } },
            { text: "When people are fake or inauthentic", points: { belle_a_walker: 3, taylor_williams: 2 } },
            { text: "When someone isn't adventurous or willing to try new things", points: { nicolas_vansteenberghe: 3 } },
            { text: "When people take themselves too seriously", points: { ace_greene: 3, austin_shepard: 2 } }
        ]
    },
    {
        id: 18,
        question: "How do you handle stress?",
        options: [
            { text: "I hit the gym and work out intensely", points: { huda_mustafa: 3 } },
            { text: "I talk it out and process my emotions", points: { jeremiah_brown: 3 } },
            { text: "I check my horoscope and trust the universe", points: { chelley_bissainthe: 3 } },
            { text: "I maintain my composure and handle it with class", points: { olandria_carthen: 3 } },
            { text: "I spend time with family and stay grounded", points: { belle_a_walker: 3, taylor_williams: 2 } },
            { text: "I go on an adventure or try something extreme", points: { nicolas_vansteenberghe: 3 } },
            { text: "I dance it out and express myself creatively", points: { ace_greene: 3 } },
            { text: "I find something fun to do outdoors", points: { austin_shepard: 3 } }
        ]
    },
    {
        id: 19,
        question: "What's your ideal vacation?",
        options: [
            { text: "A fitness retreat where I can train and coach", points: { huda_mustafa: 3 } },
            { text: "A romantic getaway with deep conversations", points: { jeremiah_brown: 3 } },
            { text: "A cultural trip exploring different traditions", points: { chelley_bissainthe: 3 } },
            { text: "A luxury resort with elegant Southern hospitality", points: { olandria_carthen: 3 } },
            { text: "A peaceful Hawaiian beach with family", points: { belle_a_walker: 3 } },
            { text: "A ranch vacation with horseback riding", points: { taylor_williams: 3 } },
            { text: "An extreme sports adventure in exotic locations", points: { nicolas_vansteenberghe: 3 } },
            { text: "A dance festival or music event", points: { ace_greene: 3 } },
            { text: "A fun camping trip with outdoor activities", points: { austin_shepard: 3 } }
        ]
    },
    {
        id: 20,
        question: "How do you show you care about someone?",
        options: [
            { text: "I demand their attention and make sure they prioritize me", points: { huda_mustafa: 3 } },
            { text: "I'm vulnerable with them and share my deepest feelings", points: { jeremiah_brown: 3 } },
            { text: "I'm authentic and supportive of their dreams", points: { chelley_bissainthe: 2, belle_a_walker: 3 } },
            { text: "I expect them to court me properly and show respect", points: { olandria_carthen: 3 } },
            { text: "I'm loyal and always have their back", points: { taylor_williams: 3 } },
            { text: "I help them and show compassion", points: { nicolas_vansteenberghe: 3 } },
            { text: "I entertain them and bring joy to their life", points: { ace_greene: 3 } },
            { text: "I make them laugh and keep things fun", points: { austin_shepard: 3 } }
        ]
    },
    {
        id: 21,
        question: "What's your approach to social media?",
        options: [
            { text: "I use it to inspire others with my fitness journey", points: { huda_mustafa: 3 } },
            { text: "I share authentic moments and promote empowerment", points: { jeremiah_brown: 3 } },
            { text: "I showcase my modeling work and cultural pride", points: { chelley_bissainthe: 3 } },
            { text: "I share my put-together lifestyle and fashion", points: { olandria_carthen: 3 } },
            { text: "I keep it real and show my island lifestyle", points: { belle_a_walker: 3 } },
            { text: "I share my ranch life and authentic moments", points: { taylor_williams: 3 } },
            { text: "I post about my adventures and travels", points: { nicolas_vansteenberghe: 3 } },
            { text: "I create entertaining dance content for millions", points: { ace_greene: 3 } },
            { text: "I share my outdoor adventures and funny moments", points: { austin_shepard: 3 } }
        ]
    },
    {
        id: 22,
        question: "What's your biggest insecurity?",
        options: [
            { text: "That people might not take me seriously or respect me", points: { huda_mustafa: 3 } },
            { text: "That I'm too emotional or sensitive for some people", points: { jeremiah_brown: 3 } },
            { text: "That people might judge me for my strong opinions", points: { chelley_bissainthe: 3 } },
            { text: "That men don't know how to appreciate a real woman", points: { olandria_carthen: 3 } },
            { text: "That I might lose my authentic self", points: { belle_a_walker: 3, taylor_williams: 2 } },
            { text: "That I care too much about helping others", points: { nicolas_vansteenberghe: 3 } },
            { text: "That people might not take me seriously because of my height", points: { ace_greene: 3 } },
            { text: "That my humor might not land with everyone", points: { austin_shepard: 3 } }
        ]
    },
    {
        id: 23,
        question: "How do you define your personal style?",
        options: [
            { text: "Athletic and fierce - always ready for the gym", points: { huda_mustafa: 3 } },
            { text: "Stylish but comfortable, with authentic flair", points: { jeremiah_brown: 3 } },
            { text: "High fashion with cultural influences", points: { chelley_bissainthe: 3 } },
            { text: "Classic Southern elegance with a modern twist", points: { olandria_carthen: 3 } },
            { text: "Laid-back island vibes with natural beauty", points: { belle_a_walker: 3 } },
            { text: "Country gentleman with cowboy influences", points: { taylor_williams: 3 } },
            { text: "Clean and athletic with adventure-ready pieces", points: { nicolas_vansteenberghe: 3 } },
            { text: "Distinctive and creative with fun patterns", points: { ace_greene: 3 } },
            { text: "Casual and comfortable for outdoor activities", points: { austin_shepard: 3 } }
        ]
    },
    {
        id: 24,
        question: "What's your relationship with your family?",
        options: [
            { text: "They're supportive of my fitness journey and success", points: { huda_mustafa: 3 } },
            { text: "I love spending time with them and credit them for my values", points: { jeremiah_brown: 3 } },
            { text: "I'm proud of my cultural heritage and family traditions", points: { chelley_bissainthe: 3 } },
            { text: "I'm a first-generation college graduate making them proud", points: { olandria_carthen: 3 } },
            { text: "Family is everything - I work at our family business", points: { belle_a_walker: 3 } },
            { text: "Family values and traditions are central to who I am", points: { taylor_williams: 3 } },
            { text: "I'm close with my family and they support my dreams", points: { nicolas_vansteenberghe: 3 } },
            { text: "I have tattoos of all my siblings - they're my everything", points: { ace_greene: 3 } },
            { text: "Family is important but I value my independence", points: { austin_shepard: 3 } }
        ]
    },
    {
        id: 25,
        question: "What's your biggest motivation?",
        options: [
            { text: "Helping others transform their lives through fitness", points: { huda_mustafa: 3 } },
            { text: "Finding genuine love and meaningful connections", points: { jeremiah_brown: 3 } },
            { text: "Building my empire while staying authentic", points: { chelley_bissainthe: 3 } },
            { text: "Proving that Southern belles deserve respect", points: { olandria_carthen: 3 } },
            { text: "Staying true to my values and family heritage", points: { belle_a_walker: 3 } },
            { text: "Working hard and achieving my veterinary dreams", points: { taylor_williams: 3 } },
            { text: "Helping people and making a positive impact", points: { nicolas_vansteenberghe: 3 } },
            { text: "Bringing joy to millions through my content", points: { ace_greene: 3 } },
            { text: "Living life on my own terms and having fun", points: { austin_shepard: 3 } }
        ]
    },
    {
        id: 26,
        question: "What's your love language?",
        options: [
            { text: "Acts of service - show me you care through actions", points: { huda_mustafa: 3 } },
            { text: "Words of affirmation - tell me how you feel", points: { jeremiah_brown: 3 } },
            { text: "Quality time - spend real time getting to know me", points: { chelley_bissainthe: 3 } },
            { text: "Receiving gifts - traditional courtship gestures", points: { olandria_carthen: 3 } },
            { text: "Physical touch - genuine, respectful affection", points: { belle_a_walker: 3, taylor_williams: 2 } },
            { text: "All of the above - I want the complete package", points: { nicolas_vansteenberghe: 3 } },
            { text: "Making me laugh and dance - joy is love", points: { ace_greene: 3 } },
            { text: "Sharing adventures and fun experiences", points: { austin_shepard: 3 } }
        ]
    },
    {
        id: 27,
        question: "How do you handle competition?",
        options: [
            { text: "I bring the heat and show them what I'm made of", points: { huda_mustafa: 3 } },
            { text: "I stay true to myself and let my authenticity shine", points: { jeremiah_brown: 3 } },
            { text: "I'm confident in who I am and don't feel threatened", points: { chelley_bissainthe: 3 } },
            { text: "I handle it with class and Southern grace", points: { olandria_carthen: 3 } },
            { text: "I stay loyal to my values and don't get petty", points: { belle_a_walker: 3, taylor_williams: 2 } },
            { text: "I focus on being the best version of myself", points: { nicolas_vansteenberghe: 3 } },
            { text: "I use my personality to stand out from the crowd", points: { ace_greene: 3 } },
            { text: "I keep it fun and don't take it too seriously", points: { austin_shepard: 3 } }
        ]
    },
    {
        id: 28,
        question: "What's your biggest turn-off?",
        options: [
            { text: "Someone who doesn't respect my time or energy", points: { huda_mustafa: 3 } },
            { text: "Someone who isn't emotionally available or vulnerable", points: { jeremiah_brown: 3 } },
            { text: "Someone who doesn't appreciate my culture or background", points: { chelley_bissainthe: 3 } },
            { text: "Someone who doesn't know how to treat a lady properly", points: { olandria_carthen: 3 } },
            { text: "Someone who is fake or inauthentic", points: { belle_a_walker: 3, taylor_williams: 2 } },
            { text: "Someone who doesn't care about helping others", points: { nicolas_vansteenberghe: 3 } },
            { text: "Someone who is too serious and doesn't know how to have fun", points: { ace_greene: 3 } },
            { text: "Someone who doesn't appreciate humor or outdoor activities", points: { austin_shepard: 3 } }
        ]
    },
    {
        id: 29,
        question: "How do you want to be remembered?",
        options: [
            { text: "As someone who transformed lives through fitness", points: { huda_mustafa: 3 } },
            { text: "As someone who loved deeply and authentically", points: { jeremiah_brown: 3 } },
            { text: "As someone who built an empire while staying true to myself", points: { chelley_bissainthe: 3 } },
            { text: "As a strong woman who demanded respect and got it", points: { olandria_carthen: 3 } },
            { text: "As someone who stayed authentic and loyal to family", points: { belle_a_walker: 3, taylor_williams: 2 } },
            { text: "As someone who helped others and made a difference", points: { nicolas_vansteenberghe: 3 } },
            { text: "As someone who brought joy to millions", points: { ace_greene: 3 } },
            { text: "As someone who lived life to the fullest", points: { austin_shepard: 3 } }
        ]
    },
    {
        id: 30,
        question: "What's your ultimate relationship goal?",
        options: [
            { text: "Finding someone who matches my intensity and passion", points: { huda_mustafa: 3 } },
            { text: "Building a deep, emotionally connected partnership", points: { jeremiah_brown: 3 } },
            { text: "Creating a power couple dynamic with mutual respect", points: { chelley_bissainthe: 3 } },
            { text: "Being properly courted and treated like the queen I am", points: { olandria_carthen: 3 } },
            { text: "Finding genuine love that aligns with my values", points: { belle_a_walker: 3, taylor_williams: 2 } },
            { text: "Building a caring, adventurous partnership", points: { nicolas_vansteenberghe: 3 } },
            { text: "Finding someone who loves my personality and energy", points: { ace_greene: 3 } },
            { text: "Having fun while building something real and lasting", points: { austin_shepard: 3 } }
        ]
    }
];

// Character images - using emojis as placeholders
const characterImages = {
    huda_mustafa: "🔥",
    jeremiah_brown: "💫", 
    chelley_bissainthe: "⭐",
    olandria_carthen: "👑",
    belle_a_walker: "🌺",
    taylor_williams: "🤠",
    nicolas_vansteenberghe: "🏥",
    ace_greene: "💃",
    austin_shepard: "😄"
};