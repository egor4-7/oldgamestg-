<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Retro Game Hub</title>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Courier New', Courier, monospace;
            -webkit-tap-highlight-color: transparent;
        }
        body {
            background-color: #0d0f18;
            color: #00ffcc;
            height: 100vh;
            overflow: hidden;
        }
        .screen {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: opacity 0.3s ease;
        }
        .hidden {
            display: none !important;
        }

        /* Заставка */
        #splash-screen {
            background: radial-gradient(circle, #1a1c29 0%, #0d0f18 100%);
            z-index: 10;
            text-align: center;
        }
        .logo-glow {
            font-size: 2.2rem;
            font-weight: bold;
            margin-bottom: 25px;
            text-shadow: 0 0 10px #00ffcc, 0 0 20px #ff00ff;
        }
        .play-btn {
            background: linear-gradient(45deg, #00ffcc, #ff00ff);
            border: none;
            color: #0d0f18;
            padding: 15px 40px;
            font-size: 1.4rem;
            font-weight: bold;
            border-radius: 30px;
            cursor: pointer;
            box-shadow: 0 0 20px rgba(0, 255, 204, 0.5);
        }

        /* Меню игр */
        #menu-screen {
            justify-content: flex-start;
            padding: 20px 15px;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        }
        .menu-title {
            font-size: 1.5rem;
            margin: 10px 0 20px 0;
            color: #ff00ff;
            text-transform: uppercase;
        }
        .games-container {
            width: 100%;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            padding-bottom: 30px;
        }
        .game-card {
            background: rgba(25, 28, 45, 0.9);
            border: 2px solid #00ffcc;
            border-radius: 14px;
            padding: 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
        }
        .game-card:active {
            transform: scale(0.97);
            background: rgba(0, 255, 204, 0.2);
        }
        .game-info h3 {
            font-size: 1.1rem;
            color: #fff;
            margin-bottom: 4px;
        }
        .game-info p {
            font-size: 0.8rem;
            color: #8a8d9f;
        }
        .game-icon {
            font-size: 2rem;
        }

        /* Экран игры */
        #game-screen {
            background: #0d0f18;
            padding: 15px;
            justify-content: space-between;
        }
        .game-header {
            width: 100%;
            max-width: 400px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .back-btn {
            background: transparent;
            border: 1px solid #ff00ff;
            color: #ff00ff;
            padding: 8px 16px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
        }
        #game-container {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin: 10px 0;
        }
        canvas {
            background: #111;
            border: 2px solid #00ffcc;
            border-radius: 10px;
            max-width: 100%;
            max-height: 100%;
        }
        .control-panel {
            display: flex;
            gap: 10px;
            margin-top: 10px;
            flex-wrap: wrap;
            justify-content: center;
        }
        .ctrl-btn {
            background: #191c2d;
            border: 2px solid #00ffcc;
            color: #00ffcc;
            padding: 10px 18px;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: bold;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <!-- 1. Заставка -->
    <div id="splash-screen" class="screen">
        <div class="logo-glow">🕹️ RETRO<br>ARCADE HUB</div>
        <button class="play-btn" id="mainPlayBtn">ИГРАТЬ</button>
    </div>

    <!-- 2. Меню выбора игр -->
    <div id="menu-screen" class="screen hidden">
        <h2 class="menu-title">Выберите игру</h2>
        <div class="games-container">
            <div class="game-card" data-game="snake">
                <div class="game-info"><h3>🐍 Змейка</h3><p>Классика Nokia</p></div>
                <div class="game-icon">▶</div>
            </div>
            <div class="game-card" data-game="arkanoid">
                <div class="game-info"><h3>🧱 Арканоид</h3><p>Разбей кирпичи мячом</p></div>
                <div class="game-icon">▶</div>
            </div>
            <div class="game-card" data-game="dino">
                <div class="game-info"><h3>🦖 Динозаврик</h3><p>Прыжки в пустыне</p></div>
                <div class="game-icon">▶</div>
            </div>
            <div class="game-card" data-game="tetris">
                <div class="game-info"><h3>🧩 Мини-Тетрис</h3><p>Падающие блоки</p></div>
                <div class="game-icon">▶</div>
            </div>
            <div class="game-card" data-game="puzzle15">
                <div class="game-info"><h3>🔲 Пятнашки</h3><p>Собери по порядку</p></div>
                <div class="game-icon">▶</div>
            </div>
        </div>
    </div>

    <!-- 3. Игровое поле -->
    <div id="game-screen" class="screen hidden">
        <div class="game-header">
            <button class="back-btn" id="backBtn">← Назад</button>
            <h3 id="active-game-title" style="color: #00ffcc;">Игра</h3>
            <div style="width: 60px;"></div>
        </div>
        <div id="game-container">
            <canvas id="gameCanvas" width="280" height="340"></canvas>
            <div id="extra-controls" class="control-panel"></div>
        </div>
    </div>

    <script>
        const tg = window.Telegram.WebApp;
        tg.expand();

        document.getElementById('mainPlayBtn').addEventListener('click', openMenu);
        document.getElementById('backBtn').addEventListener('click', returnToMenu);

        document.querySelectorAll('.game-card').forEach(card => {
            card.addEventListener('click', () => {
                startGame(card.getAttribute('data-game'));
            });
        });

        function openMenu() {
            document.getElementById('splash-screen').classList.add('hidden');
            document.getElementById('menu-screen').classList.remove('hidden');
        }

        function returnToMenu() {
            stopCurrentGame();
            document.getElementById('game-screen').classList.add('hidden');
            document.getElementById('menu-screen').classList.remove('hidden');
        }

        let currentGameInterval = null;
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        const controlsDiv = document.getElementById('extra-controls');

        function startGame(type) {
            document.getElementById('menu-screen').classList.add('hidden');
            document.getElementById('game-screen').classList.remove('hidden');
            stopCurrentGame();
            controlsDiv.innerHTML = '';

            let titles = { 
                'snake': 'Змейка', 
                'arkanoid': 'Арканоид', 
                'dino': 'Динозаврик', 
                'tetris': 'Мини-Тетрис', 
                'puzzle15': 'Пятнашки' 
            };
            document.getElementById('active-game-title').innerText = titles[type] || 'Игра';

            if (type === 'snake') initSnake();
            else if (type === 'arkanoid') initArkanoid();
            else if (type === 'dino') initDino();
            else if (type === 'tetris') initTetris();
            else if (type === 'puzzle15') initPuzzle15();
        }

        function stopCurrentGame() {
            if (currentGameInterval) clearInterval(currentGameInterval);
            canvas.onmousemove = null;
            canvas.ontouchmove = null;
            canvas.onclick = null;
            controlsDiv.innerHTML = '';
        }

        // 1. ЗМЕЙКА (Скорость снижена: интервал увеличен до 180мс)
        function initSnake() {
            let box = 14;
            let snake = [{x: 9 * box, y: 10 * box}];
            let food = {x: Math.floor(Math.random()*18+1)*box, y: Math.floor(Math.random()*18+1)*box};
            let score = 0;
            let d = "RIGHT";

            window.snakeDir = d;
            controlsDiv.innerHTML = `
                <button class="ctrl-btn" onclick="if(window.snakeDir!='DOWN')window.snakeDir='UP'">⬆️ Вверх</button>
                <div style="display:flex; gap:10px; width:100%; justify-content:center;">
                    <button class="ctrl-btn" onclick="if(window.snakeDir!='RIGHT')window.snakeDir='LEFT'">⬅️ Влево</button>
                    <button class="ctrl-btn" onclick="if(window.snakeDir!='LEFT')window.snakeDir='RIGHT'">➡️ Вправо</button>
                </div>
                <button class="ctrl-btn" onclick="if(window.snakeDir!='UP')window.snakeDir='DOWN'">⬇️ Вниз</button>
            `;

            function draw() {
                d = window.snakeDir;
                ctx.fillStyle = "#111";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                for(let i = 0; i < snake.length; i++) {
                    ctx.fillStyle = (i == 0) ? "#00ffcc" : "#ff00ff";
                    ctx.fillRect(snake[i].x, snake[i].y, box-1, box-1);
                }

                ctx.fillStyle = "#ff5555";
                ctx.fillRect(food.x, food.y, box-1, box-1);

                let snakeX = snake[0].x;
                let snakeY = snake[0].y;

                if(d == "LEFT") snakeX -= box;
                if(d == "UP") snakeY -= box;
                if(d == "RIGHT") snakeX += box;
                if(d == "DOWN") snakeY += box;

                if(snakeX == food.x && snakeY == food.y) {
                    score++;
                    food = {x: Math.floor(Math.random()*18+1)*box, y: Math.floor(Math.random()*18+1)*box};
                } else {
                    snake.pop();
                }

                let newHead = {x: snakeX, y: snakeY};
                if(snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
                    clearInterval(currentGameInterval);
                    alert('Игра окончена! Счёт: ' + score);
                    returnToMenu();
                    return;
                }
                snake.unshift(newHead);
                window.snakeDir = d;
            }
            function collision(head, array) {
                return array.some(item => head.x == item.x && head.y == item.y);
            }
            currentGameInterval = setInterval(draw, 180); // Комфортная скорость
        }

        // 2. АРКАНОИД (Интерактивный с управлением кнопками)
        function initArkanoid() {
            let pW = 60, pH = 10, bR = 5;
            let pX = canvas.width / 2 - pW / 2;
            let bX = canvas.width / 2, bY = canvas.height - 40;
            let bDX = 2, bDY = -2;

            let bricks = [];
            for(let r=0; r<3; r++) {
                for(let c=0; c<5; c++) {
                    bricks.push({x: c * 52 + 15, y: r * 20 + 20, width: 45, height: 12, status: 1});
                }
            }

            controlsDiv.innerHTML = `
                <button class="ctrl-btn" onclick="window.pXMove -= 20">⬅️</button>
                <button class="ctrl-btn" onclick="window.pXMove += 20">➡️</button>
            `;
            window.pXMove = pX;

            function draw() {
                pX = window.pXMove;
                if(pX < 0) { pX = 0; window.pXMove = 0; }
                if(pX > canvas.width - pW) { pX = canvas.width - pW; window.pXMove = pX; }

                ctx.fillStyle = "#111";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                bricks.forEach(b => {
                    if(b.status === 1) {
                        ctx.fillStyle = "#ff00ff";
                        ctx.fillRect(b.x, b.y, b.width, b.height);
                        if(bX > b.x && bX < b.x + b.width && bY > b.y && bY < b.y + b.height) {
                            bDY = -bDY;
                            b.status = 0;
                        }
                    }
                });

                ctx.fillStyle = "#00ffcc";
                ctx.fillRect(pX, canvas.height - 25, pW, pH);

                ctx.beginPath();
                ctx.arc(bX, bY, bR, 0, Math.PI*2);
                ctx.fillStyle = "#fff";
                ctx.fill();
                ctx.closePath();

                bX += bDX; bY += bDY;
                if(bX < bR || bX > canvas.width - bR) bDX = -bDX;
                if(bY < bR) bDY = -bDY;
                if(bY >= canvas.height - 30 && bX >= pX && bX <= pX + pW) bDY = -bDY;

                if(bY > canvas.height) {
                    clearInterval(currentGameInterval);
                    alert('Игра окончена!');
                    returnToMenu();
                }
            }
            currentGameInterval = setInterval(draw, 25);
        }

        // 3. ДИНОЗАВРИК (Полноценный прыгающий дино)
        function initDino() {
            let dinoY = 270, isJumping = false, jumpStep = 0, obstacleX = canvas.width, score = 0;
            controlsDiv.innerHTML = `<button class="ctrl-btn" style="padding: 12px 30px;" onclick="if(!isJumping){isJumping=true; jumpStep=12;}">⬆️ ПРЫЖОК</button>`;

            function draw() {
                ctx.fillStyle = "#111";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.fillStyle = "#00ffcc";
                ctx.fillRect(0, 300, canvas.width, 2);

                if(isJumping) {
                    dinoY -= jumpStep;
                    jumpStep -= 1;
                    if(dinoY >= 270) { dinoY = 270; isJumping = false; }
                }

                ctx.fillStyle = "#00ffcc";
                ctx.fillRect(30, dinoY, 20, 30);

                obstacleX -= 4;
                if(obstacleX < -20) { obstacleX = canvas.width; score++; }

                ctx.fillStyle = "#ff5555";
                ctx.fillRect(obstacleX, 280, 15, 20);

                if(obstacleX < 50 && obstacleX > 20 && dinoY >= 255) {
                    clearInterval(currentGameInterval);
                    alert('Врезались! Счёт: ' + score);
                    returnToMenu();
                }
            }
            currentGameInterval = setInterval(draw, 25);
        }

        // 4. МИНИ-ТЕТРИС (Интерактивное падение блоков)
        function initTetris() {
            let blockX = 120, blockY = 20, score = 0;
            controlsDiv.innerHTML = `
                <button class="ctrl-btn" onclick="window.tX -= 20">⬅️</button>
                <button class="ctrl-btn" onclick="window.tX += 20">➡️</button>
                <button class="ctrl-btn" onclick="window.tY += 30">⬇️</button>
            `;
            window.tX = blockX; window.tY = blockY;

            function draw() {
                blockX = window.tX; blockY = window.tY;
                blockY += 1.5; // падение
                window.tY = blockY;

                ctx.fillStyle = "#111";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Падающая фигура
                ctx.fillStyle = "#ff00ff";
                ctx.fillRect(blockX, blockY, 30, 30);

                if(blockY >= 280) {
                    score += 10;
                    window.tY = 20;
                    window.tX = Math.floor(Math.random() * 200);
                }

                ctx.fillStyle = "#00ffcc";
                ctx.font = "12px Courier New";
                ctx.fillText("Счёт линий: " + score, 15, 25);
            }
            currentGameInterval = setInterval(draw, 30);
        }

        // 5. ПЯТНАШКИ (Интерактивная мини-головоломка)
        function initPuzzle15() {
            let tiles = [1, 2, 3, 4, 5, 6, 7, 8, ''];
            
            function render() {
                ctx.fillStyle = "#111";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                ctx.fillStyle = "#00ffcc";
                ctx.font = "14px Courier New";
                ctx.fillText("Нажмите кнопку для сдвига", 30, 30);

                let startX = 60, startY = 70, size = 50;
                for(let i=0; i<tiles.length; i++) {
                    let x = startX + (i % 3) * 55;
                    let y = startY + Math.floor(i / 3) * 55;
                    ctx.fillStyle = tiles[i] === '' ? '#333' : '#191c2d';
                    ctx.fillRect(x, y, size, size);
                    ctx.strokeStyle = '#00ffcc';
                    ctx.strokeRect(x, y, size, size);

                    if(tiles[i] !== '') {
                        ctx.fillStyle = '#fff';
                        ctx.font = '20px Courier New';
                        ctx.fillText(tiles[i], x + 18, y + 33);
                    }
                }
            }

            controlsDiv.innerHTML = `<button class="ctrl-btn" onclick="window.shufflePuzzle()">🔀 Перемешать</button>`;
            window.shufflePuzzle = function() {
                tiles.sort(() => Math.random() - 0.5);
                render();
            };
            render();
        }
    </script>
</body>
</html>
