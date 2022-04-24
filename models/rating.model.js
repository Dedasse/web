module.exports = (sequelize, DataTypes) => {
    return sequelize.define("rating", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        mediaId: {
            type: DataTypes.INTEGER,
        },
        ratingType: {
            type: DataTypes.STRING,
        },
        ratedBy: {
            type: DataTypes.INTEGER,
        },
    });
}