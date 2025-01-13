var playerScore = 0; // เก็บคะแนนผู้เล่น
var computerScore = 0; // เก็บคะแนนคอมพิวเตอร์
// ฟังก์ชันสุ่มตัวเลือกของคอมพิวเตอร์
function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
// ฟังก์ชันตัดสินผลผู้ชนะ
function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }
    if ((player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")) {
        playerScore++; // เพิ่มคะแนนให้ผู้เล่น
        return "You win!";
    }
    computerScore++; // เพิ่มคะแนนให้คอมพิวเตอร์
    return "You lose!";
}
// ฟังก์ชันการเล่นเกม
function playGame(playerChoice) {
    var computerChoice = getComputerChoice();
    // แสดงผลลัพธ์หลังจากเล่นเกม
    var resultContainer = document.querySelector(".result-container");
    if (resultContainer)
        resultContainer.style.display = "block"; // แสดงผลลัพธ์
    // อัปเดตข้อมูล UI
    var playerChoiceElement = document.getElementById("player-choice");
    var computerChoiceElement = document.getElementById("computer-choice");
    var resultElement = document.getElementById("game-result");
    var playerScoreElement = document.getElementById("player-score");
    var computerScoreElement = document.getElementById("computer-score");
    if (playerChoiceElement)
        playerChoiceElement.textContent = "You chose : ".concat(playerChoice.toUpperCase());
    if (computerChoiceElement)
        computerChoiceElement.textContent = "Computer chose : ".concat(computerChoice.toUpperCase());
    var result = determineWinner(playerChoice, computerChoice);
    if (resultElement)
        resultElement.textContent = result.toUpperCase();
    // อัปเดตคะแนน
    if (playerScoreElement)
        playerScoreElement.textContent = playerScore.toString();
    if (computerScoreElement)
        computerScoreElement.textContent = computerScore.toString();
    // อัปเดตภาพ
    var playerImageElement = document.getElementById("player-image");
    var computerImageElement = document.getElementById("computer-image");
    if (playerImageElement && computerImageElement) {
        playerImageElement.src = "/assets/images/".concat(playerChoice, ".png"); // รูปของผู้เล่น
        computerImageElement.src = "/assets/images/".concat(computerChoice, ".png"); // รูปของคอมพิวเตอร์
    }
}
// ฟังก์ชันรีเซ็ตเกม
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    // รีเซ็ตคะแนนใน UI
    var playerScoreElement = document.getElementById("player-score");
    var computerScoreElement = document.getElementById("computer-score");
    if (playerScoreElement)
        playerScoreElement.textContent = "0";
    if (computerScoreElement)
        computerScoreElement.textContent = "0";
    // ซ่อนผลลัพธ์หลังจากรีเซ็ตเกม
    var resultContainer = document.querySelector(".result-container");
    if (resultContainer)
        resultContainer.style.display = "none"; // ซ่อนผลลัพธ์
    // รีเซ็ตรูปภาพ
    var playerImageElement = document.getElementById("player-image");
    var computerImageElement = document.getElementById("computer-image");
    if (playerImageElement && computerImageElement) {
        playerImageElement.src = ""; // ลบรูปของผู้เล่น
        computerImageElement.src = ""; // ลบรูปของคอมพิวเตอร์
    }
}
