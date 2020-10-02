/* @generated from adl */
import { declResolver, ScopedDecl } from "././ts/rt/adl";
import { _AST_MAP as api } from "./api";
import { _AST_MAP as demo_model } from "./demo/model";

export const ADL: { [key: string]: ScopedDecl } = {
  ...api,
  ...demo_model,
};

export const RESOLVER = declResolver(ADL);
