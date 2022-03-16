function Like(sequelize, DataTypes) {
    const likeModel = sequelize.define('Like', {
        // Model attributes are defined here
        like: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },


    }, {

        // Other model options go here
    });
    likeModel.associate = function(db) {
        this.belongsTo(db.Post);

    }
    return likeModel

}


module.exports = Like