import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'tbl_users'
})
export class User extends Model {
    @Column({
        autoIncrement: true,
        primaryKey: true,
        field: 'user_id',
        type: DataType.INTEGER,
    })
    user_id?: number;

    @Column({
        field: 'name',
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        field: 'email',
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        field: 'phoneNumber',
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    phoneNumber: string;

    @Column({
        field: 'gender',
        type: DataType.STRING,
        allowNull: false
    })
    gender: string;

    @Column({
        field: 'dateOfBirth',
        type: DataType.DATE,
        allowNull: false
    })
    dateOfBirth: string;

    @Column({
        field: 'isActive',
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    isActive?: boolean;
}