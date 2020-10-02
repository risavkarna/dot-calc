/* @generated from adl module demo.model */

import * as ADL from '../../ts/ts/rt/sys/adlast';

export interface DbTable {
  tableName: string;
  primaryKey: string[];
}

export function makeDbTable(
  input: {
    tableName: string,
    primaryKey: string[],
  }
): DbTable {
  return {
    tableName: input.tableName,
    primaryKey: input.primaryKey,
  };
}

const DbTable_AST : ADL.ScopedDecl =
  {"moduleName":"demo.model","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"tableName","default":{"kind":"nothing"},"name":"tableName","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"primaryKey","default":{"kind":"nothing"},"name":"primaryKey","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}}]}},"name":"DbTable","version":{"kind":"nothing"}}};

export const snDbTable: ADL.ScopedName = {moduleName:"demo.model", name:"DbTable"};

export function texprDbTable(): ADL.ATypeExpr<DbTable> {
  return {value : {typeRef : {kind: "reference", value : snDbTable}, parameters : []}};
}

export type DbField = string;

const DbField_AST : ADL.ScopedDecl =
  {"moduleName":"demo.model","decl":{"annotations":[],"type_":{"kind":"type_","value":{"typeParams":[],"typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}},"name":"DbField","version":{"kind":"nothing"}}};

export const snDbField: ADL.ScopedName = {moduleName:"demo.model", name:"DbField"};

export function texprDbField(): ADL.ATypeExpr<DbField> {
  return {value : {typeRef : {kind: "reference", value : snDbField}, parameters : []}};
}

export interface User {
  email: string;
  fullName: string;
  hashedPassword: string;
  role: string;
  isAdmin: boolean;
}

export function makeUser(
  input: {
    email: string,
    fullName: string,
    hashedPassword: string,
    role: string,
    isAdmin: boolean,
  }
): User {
  return {
    email: input.email,
    fullName: input.fullName,
    hashedPassword: input.hashedPassword,
    role: input.role,
    isAdmin: input.isAdmin,
  };
}

const User_AST : ADL.ScopedDecl =
  {"moduleName":"demo.model","decl":{"annotations":[{"v1":{"moduleName":"demo.model","name":"DbTable"},"v2":{"primaryKey":["email"],"tableName":"demo.users"}}],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[{"v1":{"moduleName":"demo.model","name":"DbField"},"v2":"email"}],"serializedName":"email","default":{"kind":"nothing"},"name":"email","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[{"v1":{"moduleName":"demo.model","name":"DbField"},"v2":"full_name"}],"serializedName":"fullName","default":{"kind":"nothing"},"name":"fullName","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[{"v1":{"moduleName":"demo.model","name":"DbField"},"v2":"hashed_password"}],"serializedName":"hashedPassword","default":{"kind":"nothing"},"name":"hashedPassword","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[{"v1":{"moduleName":"demo.model","name":"DbField"},"v2":"role"}],"serializedName":"role","default":{"kind":"nothing"},"name":"role","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[{"v1":{"moduleName":"demo.model","name":"DbField"},"v2":"is_admin"}],"serializedName":"isAdmin","default":{"kind":"nothing"},"name":"isAdmin","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}}]}},"name":"User","version":{"kind":"nothing"}}};

export const snUser: ADL.ScopedName = {moduleName:"demo.model", name:"User"};

export function texprUser(): ADL.ATypeExpr<User> {
  return {value : {typeRef : {kind: "reference", value : snUser}, parameters : []}};
}

export interface Address {
  id: number;
  details: string[];
}

export function makeAddress(
  input: {
    id: number,
    details: string[],
  }
): Address {
  return {
    id: input.id,
    details: input.details,
  };
}

const Address_AST : ADL.ScopedDecl =
  {"moduleName":"demo.model","decl":{"annotations":[{"v1":{"moduleName":"demo.model","name":"DbTable"},"v2":{"primaryKey":["id"],"tableName":"demo.address"}}],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"id","default":{"kind":"nothing"},"name":"id","typeExpr":{"typeRef":{"kind":"primitive","value":"Int32"},"parameters":[]}},{"annotations":[],"serializedName":"details","default":{"kind":"nothing"},"name":"details","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}}]}},"name":"Address","version":{"kind":"nothing"}}};

export const snAddress: ADL.ScopedName = {moduleName:"demo.model", name:"Address"};

export function texprAddress(): ADL.ATypeExpr<Address> {
  return {value : {typeRef : {kind: "reference", value : snAddress}, parameters : []}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "demo.model.DbTable" : DbTable_AST,
  "demo.model.DbField" : DbField_AST,
  "demo.model.User" : User_AST,
  "demo.model.Address" : Address_AST
};
