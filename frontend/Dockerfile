FROM refinedev/node:18 AS base

FROM base as deps

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base as builder

ARG VITE_API_URL
ENV NODE_ENV production
ENV VITE_API_URL $VITE_API_URL

COPY --from=deps /app/refine/node_modules ./node_modules

COPY . .

RUN npm run build

FROM base as runner

ARG VITE_API_URL
ENV NODE_ENV production
ENV VITE_API_URL $VITE_API_URL

RUN npm install -g serve

COPY --from=builder /app/refine/dist ./

USER refine
EXPOSE 3000
CMD ["serve"]