import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/mysql';

export interface ProductInstance extends Model {
    code: Number;
    status: String;
    imported_t: Date;
    url: String;
    creator: String;
    created_at: Date;
    last_modified_t: Number;
    product_name: String;
    quantity: String;
    brands: String;
    categories: String;
    labels: String;
    cities: String;
    purchase_places: String;
    stores: String;
    ingredients_text: String;
    traces: String;
    serving_size: String;
    serving_quantity: Number;
    nutriscore_score: Number;
    nutriscore_grade: String;
    main_category: String;
    image_url: String;
}

const Product = sequelize.define<ProductInstance>('Product', {
    code: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imported_t: {
      type: DataTypes.DATE,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creator: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    last_modified_t: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brands: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categories: {
      type: DataTypes.STRING,
      allowNull: false
    },
    labels: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cities: {
      type: DataTypes.STRING,
      allowNull: false
    },
    purchase_places: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stores: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredients_text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    traces: {
      type: DataTypes.STRING,
      allowNull: false
    },
    serving_size: {
      type: DataTypes.STRING,
      allowNull: false
    },
    serving_quantity: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    nutriscore_score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nutriscore_grade: {
      type: DataTypes.STRING,
      allowNull: false
    },
    main_category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false
    }
}, {
    tableName: 'products',
    timestamps: false
});

Product.sync({force: false});
module.exports = Product;