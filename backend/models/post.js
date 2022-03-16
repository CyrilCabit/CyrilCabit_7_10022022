function Post(sequelize, DataTypes) {
    const postModel = sequelize.define('Post', {
        // Model attributes are defined here
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING
                // allowNull defaults to true
        },
        image: {
            type: DataTypes.STRING
                // allowNull defaults to true
        },



    }, {

        // Other model options go here
    });
    postModel.associate = function(db) {
        this.belongsTo(db.User);

    }
    return postModel

}


module.exports = Post