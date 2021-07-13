FROM nginx:alpine

RUN rm /usr/share/nginx/html/index.html \
    && apk update && apk add -u gettext

COPY ~/vc-demo-xapi-app/vc-demo-xapi-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]