FROM nginx:alpine

RUN rm /usr/share/nginx/html/index.html \
    && apk add apk add gettext

COPY ~/vc-demo-xapi-app/vc-demo-xapi-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]