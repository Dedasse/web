module.exports = (sequelize, DataTypes) => {
    return sequelize.define("media", {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING,
        },
        mediaName: {
            type: DataTypes.STRING,
        },
        filename: {
            type: DataTypes.STRING
        },
        uploadedBy: {
            type: DataTypes.STRING,
        },
        likes: {
            type: DataTypes.INTEGER,
        },
        dislikes: {
            type: DataTypes.INTEGER,
        },
    });
};