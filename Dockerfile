#Imagen base
FROM node:latest

#Directorio de la app
WORKDIR /api

#Copiado de archivos
ADD . /api

#Dependencias
#RUN npm install

#Puerto que expongo
EXPOSE 3000

#Comando
CMD ["npm", "start"]