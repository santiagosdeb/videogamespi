const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('genre', {
        nombre: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false
    })
};