
from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

from app.routers.chatRouter import chatRouter
from app.routers.subjectRouter import subjectRouter
from app.routers.courseRouter import courseRouter


load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(chatRouter)
app.include_router(subjectRouter)
app.include_router(courseRouter)
