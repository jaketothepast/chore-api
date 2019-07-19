import Sequelize from sequelize;
import { devDb } from "./settings";

/* Our sequelize connection */
export const sequelize = new Sequelize(devDb);

/* Our chore model */
export const Chore = sequelize.define('chore', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    priority: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dueDate: {
        type: Sequelize.DATE,
        allowNull: false
    },

});

/** Allow chore.sync to be ran. */
Chore.sync()