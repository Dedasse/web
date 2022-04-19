module.exports = (sequelize, DataTypes) => {
    return sequelize.define("new", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        newsText: {
            type: DataTypes.STRING,
        },
        newsAuthor: {
            type: DataTypes.STRING,
        },
        isPinned:{
            type: DataTypes.BOOLEAN
        },
        isEmergency: {
            type: DataTypes.BOOLEAN
        },
        createdAt:{
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    });
}