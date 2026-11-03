# --- Etape 1 : Build & Dependances ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci

# --- Etape 2 : Image finale legere ---
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
# Installe uniquement les dependances de production
RUN npm ci --only=production 

# Copie le reste du code depuis le builder et le repertoire local
COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Sécurité : Exécuter en non-root (l'utilisateur 'node' existe déjà dans l'image alpine)
USER node

EXPOSE 3000

CMD ["node", "server.js"]
