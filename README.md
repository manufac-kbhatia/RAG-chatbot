# RAG Chatbot Assignment

Welcome to the **RAG Chatbot** assignment. This project implements a **Retrieval-Augmented Generation (RAG)** chatbot built with **Next.js**. The chatbot is trained on customer support documentation to assist users by answering queries and providing relevant support information.

If a question is asked outside the provided sources, the bot will reply with answers like **"I Don't know"**.

---

## Getting Started (Local Setup)

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

First, clone the repository:

```bash
git clone <repository-url>
cd <your-project-folder>
```

### 1. Clone the Repository
```
npm install
```

If you encounter any issues during installation, try running with legacy peer dependencies:

```
npm install --legacy-peer-deps
```


### 2. Set Up Environment Variables
Copy the contents from .env.example to a new .env file:


### 3. Prepare embeddings

To seed the embeddings in your Pinecone database, run the following command:
```
npm run prepare:data
```

### 3. Run the Development Server

Finally, start the development server:
```
npm run dev
```