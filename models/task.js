import { DataTypes } from "sequelize";
import sequelize from "../config/dbconn.js";

// add comments here

        const Task = sequelize.define("Task", {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        dueDate: {
            type: DataTypes.DATE,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

export default Task;