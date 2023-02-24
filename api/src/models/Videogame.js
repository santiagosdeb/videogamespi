const { DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fechaDeLanzamiento: {
      type: DataTypes.DATEONLY,
    },
    rating: {
      type: DataTypes.DECIMAL,
    },
    plataformas: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    generos: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    imagen: {
      type: DataTypes.TEXT,
      defaultValue: function () {
        const imagePath = path.join(__dirname, 'defaultImg.jpg');
        const imageBuffer = fs.readFileSync(imagePath);
        const encodedImage = imageBuffer.toString('base64');
        return `data:image/jpeg;base64,${encodedImage}`;
      },
    },
  },
  {
    timestamps: false
  });
};
