function User(sequelize, DataTypes) {
    return sequelize.define('User', {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,

        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false

        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
                notNull: { msg: "attention l'email doit être présent" }
            }
            // allowNull defaults to true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { min: 8 }
            // allowNull defaults to true
        },
        pseudo: {
            type: DataTypes.STRING,
            unique: true
                // allowNull defaults to true
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            // allowNull defaults to true
        },



    }, {
        // Other model options go here
    });

}


module.exports = User