const { Sequelize, DataTypes } = require('sequelize');
const db = require('../index');

const article = db.define('article', {
    
    article_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    headline: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }, // enum, instead ??
    summary: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    publication_date: {
        type: DataTypes.DATE,
    },
    image_link: {
        type: DataTypes.STRING,
    },
    image_caption: {
        type: DataTypes.STRING,
    },
    image_type: {
        type: DataTypes.STRING,
    },
    image_name: {
        type: DataTypes.STRING,
    },
    image_data: {
        type: DataTypes.TEXT,
    },
    writer_id: {
        type: DataTypes.UUID,
        allowNull: false
    }

}, {underscored: true})

module.exports = article;