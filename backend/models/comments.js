function Comment(sequelize, DataTypes) {
    const commentModel = sequelize.define('Comment', {
        // Model attributes are defined here

        text: {
            type: DataTypes.STRING
                // allowNull defaults to true
        },


    }, {

        // Other model options go here
    });
    commentModel.associate = function(db) {
        this.belongsTo(db.Post);

    }
    return commentModel

}


module.exports = Comment