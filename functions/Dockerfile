FROM amazon/aws-lambda-nodejs:12 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM amazon/aws-lambda-nodejs:12

COPY --from=builder /app/dist/index.js index.js

CMD ["index.handler"]