class LoveIslandQuiz {
    constructor() {
        this.currentQuestionIndex = 0;
        this.selectedQuestions = [];
        this.userAnswers = {};
        this.characterScores = {};
        this.maxQuestions = 15;
        
        // Initialize character scores
        Object.keys(castMembers).forEach(character => {
            this.characterScores[character] = 0;
        });
        
        this.initializeEventListeners();
        this.selectInitialQuestions();
    }

    initializeEventListeners() {
        document.getElementById('start-btn').addEventListener('click', () => this.startQuiz());
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('prev-btn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('restart-btn').addEventListener('click', () => this.restartQuiz());
        document.getElementById('share-btn').addEventListener('click', () => this.shareResult());
    }

    selectInitialQuestions() {
        // Smart question selection algorithm
        // Start with broad personality questions, then narrow down based on responses
        
        // Always include these key differentiating questions
        const mustHaveQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        
        // Add additional questions from the pool
        const remainingQuestions = questionPool.filter(q => !mustHaveQuestions.includes(q.id));
        const shuffledRemaining = this.shuffleArray([...remainingQuestions]);
        
        // Select questions to reach our target
        const selectedIds = [...mustHaveQuestions];
        selectedIds.push(...shuffledRemaining.slice(0, this.maxQuestions - mustHaveQuestions.length).map(q => q.id));
        
        // Get the actual question objects
        this.selectedQuestions = questionPool.filter(q => selectedIds.includes(q.id));
        
        // Shuffle to randomize order while keeping key questions
        this.selectedQuestions = this.shuffleArray(this.selectedQuestions);
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    startQuiz() {
        this.showScreen('quiz-screen');
        this.displayQuestion();
    }

    displayQuestion() {
        const question = this.selectedQuestions[this.currentQuestionIndex];
        
        document.getElementById('question-text').textContent = question.question;
        document.getElementById('question-counter').textContent = 
            `Question ${this.currentQuestionIndex + 1} of ${this.selectedQuestions.length}`;
        
        // Update progress bar
        const progress = ((this.currentQuestionIndex + 1) / this.selectedQuestions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        
        // Display options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option.text;
            optionElement.addEventListener('click', () => this.selectOption(index));
            
            // Check if this option was previously selected
            if (this.userAnswers[question.id] === index) {
                optionElement.classList.add('selected');
                document.getElementById('next-btn').disabled = false;
            }
            
            optionsContainer.appendChild(optionElement);
        });
        
        // Update navigation buttons
        document.getElementById('prev-btn').disabled = this.currentQuestionIndex === 0;
        document.getElementById('next-btn').disabled = this.userAnswers[question.id] === undefined;
    }

    selectOption(optionIndex) {
        const question = this.selectedQuestions[this.currentQuestionIndex];
        
        // Remove previous selection
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        
        // Add selection to clicked option
        document.querySelectorAll('.option')[optionIndex].classList.add('selected');
        
        // Store the answer
        this.userAnswers[question.id] = optionIndex;
        
        // Update character scores
        this.updateScores(question, optionIndex);
        
        // Enable next button
        document.getElementById('next-btn').disabled = false;
        
        // Auto-advance after a short delay for better UX
        setTimeout(() => {
            if (this.currentQuestionIndex < this.selectedQuestions.length - 1) {
                this.nextQuestion();
            } else {
                this.showResults();
            }
        }, 500);
    }

    updateScores(question, optionIndex) {
        const selectedOption = question.options[optionIndex];
        
        // Add points to characters based on the selected option
        Object.entries(selectedOption.points || {}).forEach(([character, points]) => {
            this.characterScores[character] += points;
        });
        
        // Dynamic question selection based on current leading characters
        this.adaptQuestionSelection();
    }

    adaptQuestionSelection() {
        // If we're more than halfway through and have a clear leader, 
        // we can focus questions on distinguishing top candidates
        if (this.currentQuestionIndex >= Math.floor(this.selectedQuestions.length / 2)) {
            const topCharacters = this.getTopCharacters(3);
            
            // If we have remaining questions, we can swap them for more targeted ones
            const remainingQuestionIds = this.selectedQuestions.slice(this.currentQuestionIndex + 1).map(q => q.id);
            const availableQuestions = questionPool.filter(q => 
                !this.selectedQuestions.map(sq => sq.id).includes(q.id)
            );
            
            // Find questions that better distinguish between top characters
            const targetedQuestions = availableQuestions.filter(q => 
                q.options.some(opt => 
                    topCharacters.some(char => opt.points && opt.points[char])
                )
            );
            
            if (targetedQuestions.length > 0 && remainingQuestionIds.length > 0) {
                // Replace one remaining question with a more targeted one
                const randomTargeted = targetedQuestions[Math.floor(Math.random() * targetedQuestions.length)];
                const replaceIndex = this.selectedQuestions.findIndex(q => q.id === remainingQuestionIds[0]);
                if (replaceIndex !== -1) {
                    this.selectedQuestions[replaceIndex] = randomTargeted;
                }
            }
        }
    }

    getTopCharacters(count = 3) {
        return Object.entries(this.characterScores)
            .sort(([,a], [,b]) => b - a)
            .slice(0, count)
            .map(([character]) => character);
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.selectedQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        } else {
            this.showResults();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    showResults() {
        const winningCharacter = this.calculateResult();
        this.displayResult(winningCharacter);
        this.showScreen('result-screen');
    }

    calculateResult() {
        // Find the character with the highest score
        let maxScore = -1;
        let winningCharacter = null;
        
        Object.entries(this.characterScores).forEach(([character, score]) => {
            if (score > maxScore) {
                maxScore = score;
                winningCharacter = character;
            }
        });
        
        // If there's a tie, use additional tie-breaking logic
        const tiedCharacters = Object.entries(this.characterScores)
            .filter(([, score]) => score === maxScore)
            .map(([character]) => character);
        
        if (tiedCharacters.length > 1) {
            // Tie-breaking: prefer characters with more specific/unique traits
            const uniqueTraitScores = tiedCharacters.map(character => {
                const traits = castMembers[character].traits;
                return {
                    character,
                    uniqueness: traits.length + (traits.includes('Fiery') ? 2 : 0) + 
                               (traits.includes('Short King') ? 2 : 0) + 
                               (traits.includes('Astrology-obsessed') ? 2 : 0)
                };
            });
            
            uniqueTraitScores.sort((a, b) => b.uniqueness - a.uniqueness);
            winningCharacter = uniqueTraitScores[0].character;
        }
        
        return winningCharacter;
    }

    displayResult(characterKey) {
        const character = castMembers[characterKey];
        const emoji = characterImages[characterKey];
        
        document.getElementById('character-name').textContent = character.name;
        
        // Set character image (emoji)
        const imageContainer = document.getElementById('character-image');
        imageContainer.textContent = emoji;
        
        // Create character info display
        const infoContainer = document.getElementById('character-info');
        infoContainer.innerHTML = `
            <h4>${character.age} • ${character.profession}</h4>
            <h4>From: ${character.hometown}</h4>
            <p><strong>Your Personality:</strong> ${character.description}</p>
            <p><strong>Your Traits:</strong></p>
            <div class="traits">
                ${character.traits.map(trait => `<span class="trait-tag">${trait}</span>`).join('')}
            </div>
            <p><strong>Your Approach:</strong> ${character.approach}</p>
            <p><strong>Your Strengths:</strong> ${character.strengths.join(', ')}</p>
        `;
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    restartQuiz() {
        // Reset all data
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        Object.keys(castMembers).forEach(character => {
            this.characterScores[character] = 0;
        });
        
        // Select new questions
        this.selectInitialQuestions();
        
        // Show start screen
        this.showScreen('start-screen');
    }

    shareResult() {
        const winningCharacter = this.calculateResult();
        const character = castMembers[winningCharacter];
        
        if (navigator.share) {
            navigator.share({
                title: 'My Love Island USA Season 7 Character',
                text: `I got ${character.name}! Take the quiz to find your Love Island match!`,
                url: window.location.href
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            const text = `I got ${character.name} on the Love Island USA Season 7 personality quiz! Take it yourself: ${window.location.href}`;
            navigator.clipboard.writeText(text).then(() => {
                alert('Result copied to clipboard!');
            }).catch(() => {
                // Fallback for clipboard API
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                alert('Result copied to clipboard!');
            });
        }
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new LoveIslandQuiz();
});