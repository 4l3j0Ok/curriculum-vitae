# https://docs.astro.build/en/recipes/docker/#static
FROM node:24-alpine AS build
WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod

COPY . .
RUN pnpm run build

FROM gotenberg/gotenberg:8 AS pdf
USER root
COPY --from=busybox:glibc /bin/busybox /usr/local/bin/busybox
COPY --from=build /app/dist /site
RUN mkdir /out && chown gotenberg:gotenberg /out
USER gotenberg
RUN busybox httpd -p 8080 -h /site \
    && (gotenberg > /tmp/gotenberg.log 2>&1 &) \
    && for i in $(seq 1 60); do curl -fs http://localhost:3000/health > /dev/null && break; sleep 1; done \
    && curl -fS --request POST http://localhost:3000/forms/chromium/convert/url \
        --form url=http://localhost:8080/ \
        --form paperWidth=8.27 \
        --form paperHeight=11.7 \
        --form marginTop=0.4 \
        --form marginBottom=0.4 \
        --form marginLeft=0.4 \
        --form marginRight=0.4 \
        --form waitForExpression="document.fonts.status === 'loaded'" \
        --output "/out/Alejo Sarmiento Curriculum Vitae.pdf" \
    || (cat /tmp/gotenberg.log; exit 1)

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=pdf /out/ /usr/share/nginx/html/
EXPOSE 80
