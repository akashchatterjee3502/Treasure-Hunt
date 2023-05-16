const basic_skills = {
    start: {
      clue: "Welcome to the Soft Skills Treasure Hunt! Find the hidden treasure by following the clues.",
      options: [
        { text: "Communication", value: "clue1" },
        { text: "Teamwork", value: "clue2" },
        { text: "Problem Solving", value: "clue3" },
        { text: "Adaptability", value: "clue4" }
      ]
    },
    clue1: {
      clue: "Great start! This skill involves effectively conveying information and ideas.",
      options: [
        { text: "Time Management", value: "deadend" },
        { text: "Leadership", value: "clue5" },
        { text: "Communication", value: "clue6" },
        { text: "Creativity", value: "deadend" }
      ]
    },
    clue2: {
      clue: "Good choice! This skill involves working collaboratively towards a common goal.",
      options: [
        { text: "Problem Solving", value: "deadend" },
        { text: "Teamwork", value: "clue7" },
        { text: "Critical Thinking", value: "deadend" },
        { text: "Adaptability", value: "clue8" }
      ]
    },
    clue3: {
      clue: "Almost there! This skill involves analyzing and resolving complex issues.",
      options: [
        { text: "Decision Making", value: "clue9" },
        { text: "Problem Solving", value: "clue10" },
        { text: "Communication", value: "deadend" },
        { text: "Creativity", value: "deadend" }
      ]
    },
    clue4: {
      clue: "Oops, wrong choice! This skill is not about adapting to new situations.",
      options: [
        { text: "Time Management", value: "clue1" },
        { text: "Leadership", value: "clue5" },
        { text: "Communication", value: "clue6" },
        { text: "Creativity", value: "deadend" }
      ]
    },
    clue5: {
      clue: "Well done! This skill involves guiding and inspiring others towards a common vision.",
      options: [
        { text: "Communication", value: "clue1" },
        { text: "Problem Solving", value: "deadend" },
        { text: "Leadership", value: "clue9" },
        { text: "Creativity", value: "deadend" }
      ]
    },
    clue6: {
      clue: "Good guess! This skill involves expressing thoughts and ideas clearly and effectively.",
      options: [
        { text: "Time Management", value: "clue1" },
        { text: "Leadership", value: "clue5" },
        { text: "Communication", value: "clue9" },
        { text: "Creativity", value: "deadend" }
      ]
    },
    clue7: {
      clue: "Nice choice! This skill involves collaborating and cooperating with others.",
      options: [
        { text: "Critical Thinking", value: "clue9" },
        { text: "Problem Solving", value: "clue10" },
        { text: "Leadership", value: "deadend" },
        { text: "Communication", value: "deadend" }
      ]
    },
    clue8: {
      clue: "Great job! This skill involves being flexible and open to change.",
      options: [
        { text: "Decision Making", value: "clue9" },
        { text: "Problem Solving", value: "deadend" },
        { text: "Teamwork", value: "clue7" },
        { text: "Adaptability", value: "clue10" }
      ]
    },
    clue9: {
      clue: "Almost there! This skill involves making choices based on careful analysis and evaluation.",
      options: [
        { text: "Decision Making", value: "treasure" },
        { text: "Problem Solving", value: "clue10" },
        { text: "Leadership", value: "deadend" },
        { text: "Creativity", value: "deadend" }
      ]
    },
    clue10: {
      clue: "Congratulations! This skill involves finding innovative solutions to challenges.",
      options: [
        { text: "Decision Making", value: "clue9" },
        { text: "Problem Solving", value: "treasure" },
        { text: "Teamwork", value: "deadend" },
        { text: "Adaptability", value: "deadend" }
      ]
    }
};

const adv_skills = {
  start: {
    clue: "Welcome to the Advanced Skills Treasure Hunt! Find the hidden treasure by following the clues.",
    options: [
      { text: "Creativity", value: "clue1" },
      { text: "Critical Thinking", value: "clue2" },
      { text: "Leadership", value: "clue3" },
      { text: "Emotional Intelligence", value: "clue4" }
    ]
  },
  clue1: {
    clue: "Well done! This skill involves thinking outside the box and generating innovative ideas.",
    options: [
      { text: "Problem Solving", value: "clue5" },
      { text: "Communication", value: "clue6" },
      { text: "Analytical Thinking", value: "deadend" },
      { text: "Decision Making", value: "clue7" }
    ]
  },
  clue2: {
    clue: "Great choice! This skill involves analyzing situations and making logical and reasoned judgments.",
    options: [
      { text: "Creative Thinking", value: "deadend" },
      { text: "Critical Thinking", value: "clue8" },
      { text: "Problem Solving", value: "clue9" },
      { text: "Innovation", value: "deadend" }
    ]
  },
  clue3: {
    clue: "Excellent! This skill involves guiding and motivating others towards a shared vision.",
    options: [
      { text: "Communication", value: "clue10" },
      { text: "Leadership", value: "clue11" },
      { text: "Collaboration", value: "clue12" },
      { text: "Team Management", value: "deadend" }
    ]
  },
  clue4: {
    clue: "Good start! This skill involves recognizing and managing emotions, both in oneself and others.",
    options: [
      { text: "Empathy", value: "clue13" },
      { text: "Conflict Resolution", value: "deadend" },
      { text: "Leadership", value: "clue11" },
      { text: "Emotional Intelligence", value: "clue14" }
    ]
  },
  clue5: {
    clue: "Nice progress! This skill involves finding effective solutions to complex problems.",
    options: [
      { text: "Decision Making", value: "clue7" },
      { text: "Problem Solving", value: "clue15" },
      { text: "Critical Thinking", value: "deadend" },
      { text: "Innovation", value: "deadend" }
    ]
  },
  clue6: {
    clue: "Well done! This skill involves effectively conveying information and ideas to others.",
    options: [
      { text: "Communication", value: "clue10" },
      { text: "Leadership", value: "deadend" },
      { text: "Collaboration", value: "clue12" },
      { text: "Creativity", value: "deadend" }
    ]
  },
  clue7: {
    clue: "Great job! This skill involves making choices based on careful analysis and evaluation.",
    options: [
      { text: "Decision Making", value: "clue15" },
      { text: "Problem Solving", value: "clue8" },
      { text: "Leadership", value: "deadend" },
      { text: "Analytical Thinking", value: "deadend" }
    ]
  },
  clue8: {
    clue: "Excellent choice! This skill involves analyzing situations and making logical and reasoned judgments.",
    options: [
      { text: "Creative Thinking", value: "deadend" },
      { text: "Critical Thinking", value: "clue9" },
      { text: "Problem Solving", value: "clue7" },
      { text: "Innovation", value: "deadend" }
    ]
  },
  clue9: {
    clue: "Nicely done! This skill involves finding effective solutions to complex problems.",
    options: [
      { text: "Decision Making", value: "clue15" },
      { text: "Problem Solving", value: "clue10" },
      { text: "Critical Thinking", value: "deadend" },
      { text: "Innovation", value: "deadend" }
    ]
  },
  clue10: {
    clue: "Well played! This skill involves effectively conveying information and ideas to others.",
    options: [
      { text: "Communication", value: "clue6" },
      { text: "Leadership", value: "clue11" },
      { text: "Collaboration", value: "clue12" },
      { text: "Analytical Thinking", value: "deadend" }
    ]
  },
  clue11: {
    clue: "Great choice! This skill involves guiding and motivating others towards a shared vision.",
    options: [
      { text: "Communication", value: "clue10" },
      { text: "Leadership", value: "clue13" },
      { text: "Collaboration", value: "clue12" },
      { text: "Team Management", value: "deadend" }
    ]
  },
  clue12: {
    clue: "Well done! This skill involves working cooperatively and effectively with others.",
    options: [
      { text: "Collaboration", value: "clue13" },
      { text: "Leadership", value: "deadend" },
      { text: "Communication", value: "clue10" },
      { text: "Analytical Thinking", value: "deadend" }
    ]
  },
  clue13: {
    clue: "Excellent choice! This skill involves understanding and sharing the feelings of others.",
    options: [
      { text: "Empathy", value: "clue14" },
      { text: "Conflict Resolution", value: "deadend" },
      { text: "Leadership", value: "clue11" },
      { text: "Emotional Intelligence", value: "clue15" }
    ]
  },
  clue14: {
    clue: "Great progress! This skill involves recognizing and managing emotions, both in oneself and others.",
    options: [
      { text: "Empathy", value: "clue13" },
      { text: "Conflict Resolution", value: "deadend" },
      { text: "Leadership", value: "clue11" },
      { text: "Emotional Intelligence", value: "clue15" }
    ]
  },
  clue15: {
    clue: "Congratulations! You've found the hidden treasure. This skill involves thinking innovatively and introducing new ideas.",
    options: [
      { text: "Innovation", value: "treasure" },
      { text: "Problem Solving", value: "clue9" },
      { text: "Critical Thinking", value: "clue7" },
      { text: "Analytical Thinking", value: "deadend" }
    ]
  }
};
const clueMaps = {
  soft_skills: basic_skills,
  advanced_skills: adv_skills
};

var theme = localStorage.getItem('theme');

const clueMap = clueMaps[theme];
console.log(clueMap)

let currentClue = clueMap['start'];
let startTime = Date.now();
let endTime;

const clueTextElement = document.getElementById('clue-text');
const optionsList = document.getElementById('options-list');

displayClue();

function displayClue() {
  clueTextElement.textContent = currentClue.clue;

  optionsList.innerHTML = '';

  currentClue.options.forEach((option) => {
    const optionItem = document.createElement('li');
    const optionLink = document.createElement('a');
    optionLink.textContent = option.text;
    optionLink.href = '#';
    optionLink.addEventListener('click', (e) => {
      e.preventDefault();
      handleOptionClick(option);
    });
    optionItem.appendChild(optionLink);
    optionsList.appendChild(optionItem);
  });
}

function handleOptionClick(option) {
  if (option.value === 'deadend') {
    alert('Oops! You reached a dead end. Game over!');
    endTime = Date.now();
    const timeTaken = (endTime - startTime) / 1000;
    let data = { timeTaken: timeTaken, treasure: 0, deadend: 1 };

    fetch('/dashboard', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
    });
    window.location.href = '/dashboard'
  }
  else if (option.value === 'treasure') {
    endTime = Date.now();
    const timeTaken = (endTime - startTime) / 1000;

    const message = `Congratulations! You found the treasure!\n\nTime taken: ${timeTaken} seconds`;
    alert(message);

    let data = { timeTaken: timeTaken, treasure: 1, deadend: 0 };

    fetch('/dashboard', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
    });
    window.location.href = '/dashboard'
  }
  else {
    currentClue = clueMap[option.value];

    displayClue();
  }
}

function restartGame() {
    currentClue = clueMap['start'];
  
    startTime = Date.now();
  
    displayClue();
  }