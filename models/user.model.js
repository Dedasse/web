module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        privilege: {
            type: DataTypes.STRING
        },
    });
};