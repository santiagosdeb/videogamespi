const { DataTypes } = require('sequelize');
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
    imagen: {
      type: DataTypes.TEXT,
      defaultValue: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F65%2FNo-Image-Placeholder.svg%2F1665px-No-Image-Placeholder.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANo-Image-Placeholder.svg&tbnid=Mh4RAUlXV108FM&vet=12ahUKEwjRmfDLkJT9AhWxuZUCHR2yDQMQMygCegUIARDlAQ..i&docid=ldp7V-Ybx0nO3M&w=1665&h=2048&q=no%20image&ved=2ahUKEwjRmfDLkJT9AhWxuZUCHR2yDQMQMygCegUIARDlAQ'
    },
  },
  {
    timestamps: false
  });
};
