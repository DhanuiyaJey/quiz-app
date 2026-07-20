const questions = {

    // =========================
    // PROGRAMMING
    // =========================
    programming: [

        {
            question: "What does HTML stand for?",
            answers: [
                { text: "Hyper Text Markup Language", correct: true },
                { text: "High Text Machine Language", correct: false },
                { text: "Home Tool Markup Language", correct: false },
                { text: "Hyper Transfer Machine Language", correct: false }
            ]
        },

        {
            question: "Which language is used to style web pages?",
            answers: [
                { text: "HTML", correct: false },
                { text: "CSS", correct: true },
                { text: "Java", correct: false },
                { text: "Python", correct: false }
            ]
        },

        {
            question: "Which language is mainly used for web interactivity?",
            answers: [
                { text: "JavaScript", correct: true },
                { text: "Java", correct: false },
                { text: "C++", correct: false },
                { text: "Python", correct: false }
            ]
        },

        {
            question: "Which company developed JavaScript?",
            answers: [
                { text: "Google", correct: false },
                { text: "Microsoft", correct: false },
                { text: "Netscape", correct: true },
                { text: "Apple", correct: false }
            ]
        },

        {
            question: "Which HTML tag is used for the largest heading?",
            answers: [
                { text: "<h1>", correct: true },
                { text: "<h6>", correct: false },
                { text: "<head>", correct: false },
                { text: "<title>", correct: false }
            ]
        },

        {
            question: "Which CSS property changes text color?",
            answers: [
                { text: "font-size", correct: false },
                { text: "background", correct: false },
                { text: "color", correct: true },
                { text: "border", correct: false }
            ]
        },

        {
            question: "Which symbol is used for single-line comments in JavaScript?",
            answers: [
                { text: "//", correct: true },
                { text: "/* */", correct: false },
                { text: "#", correct: false },
                { text: "<!-- -->", correct: false }
            ]
        },

        {
            question: "Which method prints a message to the browser console?",
            answers: [
                { text: "console.log()", correct: true },
                { text: "print()", correct: false },
                { text: "echo()", correct: false },
                { text: "display()", correct: false }
            ]
        },

        {
            question: "Which keyword declares a constant in JavaScript?",
            answers: [
                { text: "var", correct: false },
                { text: "let", correct: false },
                { text: "const", correct: true },
                { text: "constant", correct: false }
            ]
        },

        {
            question: "Which HTML tag is used to insert an image?",
            answers: [
                { text: "<img>", correct: true },
                { text: "<image>", correct: false },
                { text: "<picture>", correct: false },
                { text: "<src>", correct: false }
            ]
        }

    ],

    // =========================
    // MATH
    // =========================
    math: [

        {
            question: "What is the value of π (pi) approximately?",
            answers: [
                { text: "3.14", correct: true },
                { text: "2.71", correct: false },
                { text: "1.62", correct: false },
                { text: "4.13", correct: false }
            ]
        },

        {
            question: "What is the square root of 64?",
            answers: [
                { text: "8", correct: true },
                { text: "6", correct: false },
                { text: "10", correct: false },
                { text: "12", correct: false }
            ]
        },

        {
            question: "What is 2⁵?",
            answers: [
                { text: "32", correct: true },
                { text: "16", correct: false },
                { text: "64", correct: false },
                { text: "25", correct: false }
            ]
        },

        {
            question: "What is 15 + 20?",
            answers: [
                { text: "35", correct: true },
                { text: "30", correct: false },
                { text: "40", correct: false },
                { text: "45", correct: false }
            ]
        },

        {
            question: "What is 12 × 12?",
            answers: [
                { text: "144", correct: true },
                { text: "124", correct: false },
                { text: "132", correct: false },
                { text: "156", correct: false }
            ]
        },

        {
            question: "What is 100 ÷ 4?",
            answers: [
                { text: "25", correct: true },
                { text: "20", correct: false },
                { text: "24", correct: false },
                { text: "30", correct: false }
            ]
        },

        {
            question: "What is 9 × 7?",
            answers: [
                { text: "63", correct: true },
                { text: "72", correct: false },
                { text: "56", correct: false },
                { text: "49", correct: false }
            ]
        },

        {
            question: "What is 81 ÷ 9?",
            answers: [
                { text: "9", correct: true },
                { text: "8", correct: false },
                { text: "7", correct: false },
                { text: "6", correct: false }
            ]
        },

        {
            question: "What is 50% of 200?",
            answers: [
                { text: "100", correct: true },
                { text: "50", correct: false },
                { text: "150", correct: false },
                { text: "120", correct: false }
            ]
        },

        {
            question: "How many sides does a hexagon have?",
            answers: [
                { text: "6", correct: true },
                { text: "5", correct: false },
                { text: "7", correct: false },
                { text: "8", correct: false }
            ]
        }

    ],

    // =========================
    // GENERAL KNOWLEDGE
    // =========================
    gk: [

        {
            question: "What is the capital of France?",
            answers: [
                { text: "Paris", correct: true },
                { text: "London", correct: false },
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false }
            ]
        },

        {
            question: "Who wrote Romeo and Juliet?",
            answers: [
                { text: "William Shakespeare", correct: true },
                { text: "Charles Dickens", correct: false },
                { text: "Jane Austen", correct: false },
                { text: "Mark Twain", correct: false }
            ]
        },

        {
            question: "Which planet is known as the Red Planet?",
            answers: [
                { text: "Mars", correct: true },
                { text: "Earth", correct: false },
                { text: "Jupiter", correct: false },
                { text: "Venus", correct: false }
            ]
        },

        {
            question: "Which is the largest ocean?",
            answers: [
                { text: "Pacific Ocean", correct: true },
                { text: "Atlantic Ocean", correct: false },
                { text: "Indian Ocean", correct: false },
                { text: "Arctic Ocean", correct: false }
            ]
        },

        {
            question: "Which country is called the Land of the Rising Sun?",
            answers: [
                { text: "Japan", correct: true },
                { text: "China", correct: false },
                { text: "India", correct: false },
                { text: "Korea", correct: false }
            ]
        },

        {
            question: "Which is the largest mammal?",
            answers: [
                { text: "Blue Whale", correct: true },
                { text: "Elephant", correct: false },
                { text: "Giraffe", correct: false },
                { text: "Shark", correct: false }
            ]
        },

        {
            question: "Which gas do plants absorb?",
            answers: [
                { text: "Carbon Dioxide", correct: true },
                { text: "Oxygen", correct: false },
                { text: "Nitrogen", correct: false },
                { text: "Hydrogen", correct: false }
            ]
        },

        {
            question: "Which is the longest river in the world?",
            answers: [
                { text: "Nile", correct: true },
                { text: "Amazon", correct: false },
                { text: "Yangtze", correct: false },
                { text: "Mississippi", correct: false }
            ]
        },

        {
            question: "Which country hosted the 2024 Summer Olympics?",
            answers: [
                { text: "France", correct: true },
                { text: "Japan", correct: false },
                { text: "Brazil", correct: false },
                { text: "China", correct: false }
            ]
        },

        {
            question: "How many continents are there?",
            answers: [
                { text: "7", correct: true },
                { text: "5", correct: false },
                { text: "6", correct: false },
                { text: "8", correct: false }
            ]
        }

    ]

};