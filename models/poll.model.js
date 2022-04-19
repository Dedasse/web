module.exports = (sequelize, DataTypes) => {
    return sequelize.define("poll", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        question: {
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