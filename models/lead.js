'use strict';

// this javascrit model file is specific to sequelize, sequelize will gen
//rate the method its need to access  the database table by using this 
//model definition


module.exports = (sequelize, DataTypes) => {
    var lead = sequelize.define('Lead', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return lead;
};