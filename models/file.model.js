module.exports = (sequelize, DataTypes) => {
    return sequelize.define("file", {
        type: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        filename: {
            type: DataTypes.STRING,
        },
        uploadedBy: {
            type: DataTypes.INTEGER,
        },
        showTime: {
            type: DataTypes.INTEGER,
        },
        expireTime: {
            type: DataTypes.DATE,
        }
    });
};