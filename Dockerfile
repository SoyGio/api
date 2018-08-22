#Imagen base
FROM node:latest

#Directorio de la app
<<<<<<< HEAD
WORKDIR /app

#Copiado de archivos
ADD . /app

#Dependencias
RUN npm install
=======
WORKDIR /api

#Copiado de archivos
ADD . /api

#Dependencias
#RUN npm install
>>>>>>> 0ce4a057d0fe937774168d40d80c555b10dc3b59

#Puerto que expongo
EXPOSE 3000

#Comando
<<<<<<< HEAD
CMD ["npm", "start"]
=======
CMD ["npm", "start"]
>>>>>>> 0ce4a057d0fe937774168d40d80c555b10dc3b59
