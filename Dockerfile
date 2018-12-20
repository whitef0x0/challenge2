FROM node:8

RUN mkdir /code/

WORKDIR /code/

RUN apt-get update \
  && apt-get install -y vim

RUN yarn

EXPOSE 3000
EXPOSE 35729

ENTRYPOINT ["/bin/bash", "/code/run.sh"]
CMD ["start"]