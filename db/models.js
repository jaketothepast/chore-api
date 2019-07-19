const Sequelize = require('sequelize');

/* Our sequelize connection */
export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'temp.db'
});

/* Our chore model */
export const Chore = sequelize.define('chore', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

/** Allow chore.sync to be ran. */
Chore.sync()