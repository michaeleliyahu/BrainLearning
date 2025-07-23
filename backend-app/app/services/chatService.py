import openai
import os

async def get_chat_response(prompt: str) -> str:
    print(prompt)
    print("Fetching chat response...")

    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise Exception("❌ לא נמצא OpenAI API Key!")

    client = openai.AsyncOpenAI(api_key=api_key)

    try:
        response = await client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}]
        )
        print("✅ Response received.")
        return response.choices[0].message.content.strip()
    except Exception as e:
        print("❌ שגיאה בקריאה ל־OpenAI:", e)
        raise
