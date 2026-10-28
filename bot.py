import os
import threading
from http.server import HTTPServer, BaseHTTPRequestHandler
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import ApplicationBuilder, ContextTypes, CommandHandler

# --- Минимальный HTTP-сервер для бесплатного тарифа Render ---
class HealthCheckHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"Game Bot is alive!")
    
    # Отключаем лишние логи в консоли от запросов сервера
    def log_message(self, format, *args):
        pass

def run_health_check_server():
    port = int(os.environ.get("PORT", 8080))
    server = HTTPServer(("0.0.0.0", port), HealthCheckHandler)
    server.serve_forever()

# Запускаем веб-сервер в отдельном фоновом потоке
threading.Thread(target=run_health_check_server, daemon=True).start()


# --- Логика Telegram-бота для игр ---
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # Ссылка на ваше мини-приложение (хаб с играми на Vercel)
    web_app_url = "https://folio1.vercel.app"
    
    # Создаем кнопку, которая открывает мини-приложение с играми
    keyboard = [
        [InlineKeyboardButton("🕹️ Открыть Ретро Аркаду", web_app=WebAppInfo(url=web_app_url))]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    await update.message.reply_text(
        "Привет! Добро пожаловать в **Retro Game Hub** 🎮\n\n"
        "Нажми на кнопку ниже, чтобы запустить сборник ретро-игр прямо в Telegram:",
        reply_markup=reply_markup,
        parse_mode="Markdown"
    )

def main():
    # Получаем токен из переменных окружения Render
    token = os.environ.get("BOT_TOKEN")
    if not token:
        raise ValueError("Не найден токен BOT_TOKEN в переменных окружения!")

    # Инициализация бота
    application = ApplicationBuilder().token(token).build()

    # Регистрация команды /start
    application.add_handler(CommandHandler("start", start))

    print("Game Bot is running...")
    
    # Запуск бота в режиме постоянного опроса
    application.run_polling()

if __name__ == "__main__":
    main()
