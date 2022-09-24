FROM node:16.15.1-alpine
RUN apk update && apk add bash

RUN npm i -g gulp swagger-merger
COPY ./init.sh /opt/init.sh 

RUN chmod +x /opt/init.sh

CMD ["/bin/bash", "/opt/init.sh"]
