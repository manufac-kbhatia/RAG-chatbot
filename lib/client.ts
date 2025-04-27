import { Pinecone } from "@pinecone-database/pinecone";

let pineconeClientInstance: Pinecone | null = null;
async function createIndex(client: Pinecone, indexName: string) {
  try {
    await client.createIndex({
      name: indexName,
      vectorType: 'dense',
      dimension: 1536,
      metric: 'cosine',
      spec: {
        serverless: {
          cloud: 'aws',
          region: 'us-east-1'
        }
      },
    });

  } catch (error) {
    console.error("Error creating index:", error);
    throw new Error("Index creation failed");
  }
}

async function initPineconeClient() {
  try {
    const pineconeClient = new Pinecone({apiKey: process.env.PINECONE_API_KEY ?? "",});
    const indexName = process.env.PINECONE_INDEX_NAME ?? "";

    const {indexes} = await pineconeClient.listIndexes();
    const existingIndexes = indexes?.map((index) => index.name);
    console.log(existingIndexes);

    if (!existingIndexes?.includes(indexName)) {
      createIndex(pineconeClient, indexName);
    } else {
      console.log("Your index already exists");
    }

    return pineconeClient;
  } catch (error) {
    console.error("error", error);
    throw new Error("Failed to initialize Pinecone Client");
  }
}

export async function getPineconeClient() {
  if (!pineconeClientInstance) {
    pineconeClientInstance = await initPineconeClient();
  }
  return pineconeClientInstance;
}
