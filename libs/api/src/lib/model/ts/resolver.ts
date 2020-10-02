/* @generated from adl */
import { declResolver, ScopedDecl } from "../ts/rt/adl";
import { _AST_MAP as api } from "./api";
import { _AST_MAP as demo_model } from "./demo/model";

import { _AST_MAP as config } from "./config";


export const ADL: { [key: string]: ScopedDecl } = {
  ...api,
  ...config,
  ...demo_model,
};

export const RESOLVER = declResolver(ADL);
