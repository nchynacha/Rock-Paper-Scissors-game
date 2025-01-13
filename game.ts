type Choice = "rock" | "paper" | "scissors";

let playerScore = 0;  // เก็บคะแนนผู้เล่น
let computerScore = 0;  // เก็บคะแนนคอมพิวเตอร์

// ฟังก์ชันสุ่มตัวเลือกของคอมพิวเตอร์
function getComputerChoice(): Choice {
  const choices: Choice[] = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// ฟังก์ชันตัดสินผลผู้ชนะ
function determineWinner(player: Choice, computer: Choice): string {
  if (player === computer) {
    return "It's a tie!";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++; // เพิ่มคะแนนให้ผู้เล่น
    return "You win!";
  }

  computerScore++; // เพิ่มคะแนนให้คอมพิวเตอร์
  return "You lose!";
}

// ฟังก์ชันการเล่นเกม
function playGame(playerChoice: Choice): void {
  const computerChoice = getComputerChoice();

  // แสดงผลลัพธ์หลังจากเล่นเกม
  const resultContainer = document.querySelector(".result-container") as HTMLElement;
  if (resultContainer) resultContainer.style.display = "block";  // แสดงผลลัพธ์

  // อัปเดตข้อมูล UI
  const playerChoiceElement = document.getElementById("player-choice");
  const computerChoiceElement = document.getElementById("computer-choice");
  const resultElement = document.getElementById("game-result");
  const playerScoreElement = document.getElementById("player-score");
  const computerScoreElement = document.getElementById("computer-score");

  if (playerChoiceElement) playerChoiceElement.textContent = `You chose : ${playerChoice.toUpperCase()}`;
  if (computerChoiceElement) computerChoiceElement.textContent = `Computer chose : ${computerChoice.toUpperCase()}`;

  const result = determineWinner(playerChoice, computerChoice);
  if (resultElement) resultElement.textContent = result.toUpperCase();

  // อัปเดตคะแนน
  if (playerScoreElement) playerScoreElement.textContent = playerScore.toString();
  if (computerScoreElement) computerScoreElement.textContent = computerScore.toString();

  // อัปเดตภาพ
  const playerImageElement = document.getElementById("player-image") as HTMLImageElement;
  const computerImageElement = document.getElementById("computer-image") as HTMLImageElement;

  if (playerImageElement && computerImageElement) {
    playerImageElement.src = `/assets/images/${playerChoice}.png`;  // รูปของผู้เล่น
    computerImageElement.src = `/assets/images/${computerChoice}.png`;  // รูปของคอมพิวเตอร์
  }
}

// ฟังก์ชันรีเซ็ตเกม
function resetGame(): void {
  playerScore = 0;
  computerScore = 0;

  // รีเซ็ตคะแนนใน UI
  const playerScoreElement = document.getElementById("player-score");
  const computerScoreElement = document.getElementById("computer-score");

  if (playerScoreElement) playerScoreElement.textContent = "0";
  if (computerScoreElement) computerScoreElement.textContent = "0";

  // ซ่อนผลลัพธ์หลังจากรีเซ็ตเกม
  const resultContainer = document.querySelector(".result-container") as HTMLElement;
  if (resultContainer) resultContainer.style.display = "none";  // ซ่อนผลลัพธ์

  // รีเซ็ตรูปภาพ
  const playerImageElement = document.getElementById("player-image") as HTMLImageElement;
  const computerImageElement = document.getElementById("computer-image") as HTMLImageElement;

  if (playerImageElement && computerImageElement) {
    playerImageElement.src = "";  // ลบรูปของผู้เล่น
    computerImageElement.src = "";  // ลบรูปของคอมพิวเตอร์
  }
}
