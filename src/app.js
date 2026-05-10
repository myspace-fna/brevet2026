/* ════════════════════════════════════════
   DON D'ORGANE — LOGIQUE APPLICATION
   Navigation, Mémo, Quiz
   ════════════════════════════════════════ */

// ══════ NAVIGATION ══════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
  document.getElementById('nav-' + id).classList.add('active');
}

function showFiche(id, btn) {
  document.querySelectorAll('.fiche-content').forEach(f => f.classList.remove('active'));
  document.querySelectorAll('.fiche-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('fiche-' + id).classList.add('active');
  btn.classList.add('active');
}

// ══════ MÉMO ══════
let memoSeen = 0;

function buildMemo() {
  const grid = document.getElementById('memo-grid');
  grid.innerHTML = '';
  memoCards.forEach((c) => {
    const el = document.createElement('div');
    el.className = 'memo-card';
    el.innerHTML = `
      <div class="memo-front">
        <div class="memo-front-icon">${c.icon}</div>
        <div class="memo-front-text">${c.q}</div>
      </div>
      <div class="memo-back">${c.a}</div>
    `;
    el.onclick = () => {
      if (!el.classList.contains('flipped')) {
        memoSeen++;
        document.getElementById('memo-seen').textContent = memoSeen;
      }
      el.classList.toggle('flipped');
    };
    grid.appendChild(el);
  });
}

function resetMemo() {
  memoSeen = 0;
  document.getElementById('memo-seen').textContent = 0;
  document.querySelectorAll('.memo-card').forEach(c => c.classList.remove('flipped'));
}

// ══════ QUIZ ══════
let currentCat = 'Tout';
let quizQuestions = [];
let qIndex = 0;
let qScore = 0;

function setCat(cat, btn) {
  currentCat = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function startQuiz() {
  quizQuestions = currentCat === 'Tout'
    ? [...allQuestions]
    : allQuestions.filter(q => q.cat === currentCat);

  // Shuffle
  quizQuestions = quizQuestions.sort(() => Math.random() - 0.5);

  qIndex = 0;
  qScore = 0;

  document.getElementById('quiz-start').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-game').style.display = 'block';
  document.getElementById('q-total-disp').textContent = quizQuestions.length;

  showQuestion();
}

function showQuestion() {
  if (qIndex >= quizQuestions.length) {
    showResult();
    return;
  }

  const q = quizQuestions[qIndex];
  const total = quizQuestions.length;

  document.getElementById('q-label').textContent = `Question ${qIndex + 1}/${total}`;
  document.getElementById('q-num').textContent = `Question ${qIndex + 1} • ${q.cat}`;
  document.getElementById('q-cat-label').textContent = q.cat;
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('q-progress').style.width = `${(qIndex / total) * 100}%`;
  document.getElementById('q-score').textContent = qScore;
  document.getElementById('q-explanation').className = 'quiz-explanation';
  document.getElementById('q-explanation').textContent = '';
  document.getElementById('q-next').style.display = 'none';

  const answersDiv = document.getElementById('q-answers');
  answersDiv.innerHTML = '';

  // Shuffle answer choices while tracking correct answer
  const shuffled = q.choices
    .map((c, i) => ({ text: c, correct: i === q.a }))
    .sort(() => Math.random() - 0.5);

  shuffled.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'quiz-answer';
    btn.textContent = choice.text;
    btn.onclick = () => answer(btn, choice.correct, q.exp, answersDiv, shuffled);
    answersDiv.appendChild(btn);
  });
}

function answer(btn, correct, exp, answersDiv, shuffled) {
  const allBtns = answersDiv.querySelectorAll('.quiz-answer');
  allBtns.forEach((b, i) => {
    b.disabled = true;
    if (shuffled[i].correct) b.classList.add('correct');
  });

  if (correct) {
    btn.classList.add('correct');
    qScore++;
  } else {
    btn.classList.add('wrong');
  }

  const expEl = document.getElementById('q-explanation');
  expEl.textContent = (correct ? '✅ Correct ! ' : '❌ Pas tout à fait. ') + exp;
  expEl.className = 'quiz-explanation show';

  document.getElementById('q-next').style.display = 'inline-flex';
  document.getElementById('q-score').textContent = qScore;
}

function nextQuestion() {
  qIndex++;
  showQuestion();
}

function quitQuiz() {
  document.getElementById('quiz-game').style.display = 'none';
  document.getElementById('quiz-start').style.display = 'block';
}

function showResult() {
  document.getElementById('quiz-game').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'block';

  const total = quizQuestions.length;
  const pct = Math.round((qScore / total) * 100);

  document.getElementById('r-score').textContent = `${qScore}/${total}`;
  document.getElementById('q-progress').style.width = '100%';

  let stars, label, sub;
  if (pct >= 90) {
    stars = '⭐⭐⭐';
    label = 'Excellent ! Tu es prête pour l\'oral !';
    sub   = 'Elise maîtrise parfaitement le sujet. Bravo !';
  } else if (pct >= 75) {
    stars = '⭐⭐';
    label = 'Très bien ! Encore un peu de révision.';
    sub   = 'Quelques points à revoir dans les fiches et cartes mémo.';
  } else if (pct >= 60) {
    stars = '⭐';
    label = 'Bien ! Continuez à réviser.';
    sub   = 'Revois les fiches des parties où tu as eu des difficultés.';
  } else {
    stars = '💪';
    label = 'À retravailler !';
    sub   = 'Relis les fiches et refais le quiz. Tu vas y arriver !';
  }

  document.getElementById('r-stars').textContent = stars;
  document.getElementById('r-label').textContent = label;
  document.getElementById('r-sub').textContent   = sub;
}

// ══════ INIT ══════
buildMemo();
