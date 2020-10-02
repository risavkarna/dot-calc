/* @generated from adl module config */

import * as ADL from '../ts/rt/adl';

export interface ServerConfig {
  port: number;
  protocol: Protocol;
  logLevel: LogLevel;
  jwtSecret: string;
}

export function makeServerConfig(
  input: {
    port: number,
    protocol?: Protocol,
    logLevel?: LogLevel,
    jwtSecret: string,
  }
): ServerConfig {
  return {
    port: input.port,
    protocol: input.protocol === undefined ? { kind: "http" } : input.protocol,
    logLevel: input.logLevel === undefined ? 2 : input.logLevel,
    jwtSecret: input.jwtSecret,
  };
}

const ServerConfig_AST: ADL.ScopedDecl =
{
  "moduleName": "config",
  "decl": {
    "annotations": [], "type_": {
      "kind": "struct_",
      "value": {
        "typeParams": [], "fields": [{
          "annotations": [], "serializedName": "port",
          "default": { "kind": "nothing" }, "name": "port",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Int32"
            }, "parameters": []
          }
        }, {
          "annotations": [], "serializedName": "protocol",
          "default": {
            "kind": "just",
            "value": "http"
          }, "name": "protocol",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "config",
                "name": "Protocol"
              }
            }, "parameters": []
          }
        }, {
          "annotations": [], "serializedName": "logLevel",
          "default": {
            "kind": "just",
            "value": "info"
          }, "name": "logLevel",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "config",
                "name": "LogLevel"
              }
            }, "parameters": []
          }
        }, {
          "annotations": [], "serializedName": "jwtSecret",
          "default": { "kind": "nothing" }, "name": "jwtSecret",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "String"
            }, "parameters": []
          }
        }]
      }
    }, "name": "ServerConfig",
    "version": { "kind": "nothing" }
  }
};

export const snServerConfig: ADL.ScopedName = { moduleName: "config", name: "ServerConfig" };

export function texprServerConfig(): ADL.ATypeExpr<ServerConfig> {
  return { value: { typeRef: { kind: "reference", value: snServerConfig }, parameters: [] } };
}

export interface ProtocolHttp {
  kind: 'http';
}
export interface ProtocolHttps {
  kind: 'https';
  value: SslConfiguration;
}

export type Protocol = ProtocolHttp | ProtocolHttps;

export interface ProtocolOpts {
  http: null;
  https: SslConfiguration;
}

export function makeProtocol<K extends keyof ProtocolOpts>(kind: K, value: ProtocolOpts[K]) { return { kind, value }; }

const Protocol_AST: ADL.ScopedDecl =
{
  "moduleName": "config",
  "decl": {
    "annotations": [], "type_": {
      "kind": "union_",
      "value": {
        "typeParams": [], "fields": [{
          "annotations": [], "serializedName": "http",
          "default": { "kind": "nothing" }, "name": "http",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Void"
            }, "parameters": []
          }
        }, {
          "annotations": [], "serializedName": "https",
          "default": { "kind": "nothing" }, "name": "https",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "config",
                "name": "SslConfiguration"
              }
            }, "parameters": []
          }
        }]
      }
    }, "name": "Protocol",
    "version": { "kind": "nothing" }
  }
};

export const snProtocol: ADL.ScopedName = { moduleName: "config", name: "Protocol" };

export function texprProtocol(): ADL.ATypeExpr<Protocol> {
  return { value: { typeRef: { kind: "reference", value: snProtocol }, parameters: [] } };
}

export interface SslConfiguration {
  certificate: FilePath;
  certificateKey: FilePath;
}

export function makeSslConfiguration(
  input: {
    certificate: FilePath,
    certificateKey: FilePath,
  }
): SslConfiguration {
  return {
    certificate: input.certificate,
    certificateKey: input.certificateKey,
  };
}

const SslConfiguration_AST: ADL.ScopedDecl =
{
  "moduleName": "config",
  "decl": {
    "annotations": [], "type_": {
      "kind": "struct_",
      "value": {
        "typeParams": [], "fields": [{
          "annotations": [], "serializedName": "certificate",
          "default": { "kind": "nothing" }, "name": "certificate",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "config",
                "name": "FilePath"
              }
            }, "parameters": []
          }
        }, {
          "annotations": [], "serializedName": "certificateKey",
          "default": { "kind": "nothing" }, "name": "certificateKey",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "config",
                "name": "FilePath"
              }
            }, "parameters": []
          }
        }]
      }
    }, "name": "SslConfiguration",
    "version": { "kind": "nothing" }
  }
};

export const snSslConfiguration: ADL.ScopedName = { moduleName: "config", name: "SslConfiguration" };

export function texprSslConfiguration(): ADL.ATypeExpr<SslConfiguration> {
  return { value: { typeRef: { kind: "reference", value: snSslConfiguration }, parameters: [] } };
}

export type FilePath = string;

const FilePath_AST: ADL.ScopedDecl =
{
  "moduleName": "config",
  "decl": {
    "annotations": [], "type_": {
      "kind": "type_",
      "value": {
        "typeParams": [], "typeExpr": {
          "typeRef": {
            "kind": "primitive",
            "value": "String"
          }, "parameters": []
        }
      }
    }, "name": "FilePath",
    "version": { "kind": "nothing" }
  }
};

export const snFilePath: ADL.ScopedName = { moduleName: "config", name: "FilePath" };

export function texprFilePath(): ADL.ATypeExpr<FilePath> {
  return { value: { typeRef: { kind: "reference", value: snFilePath }, parameters: [] } };
}

export enum LogLevel {
  error,
  warn,
  info,
  debug,
  trace,
}

const LogLevel_AST: ADL.ScopedDecl =
{
  "moduleName": "config",
  "decl": {
    "annotations": [], "type_": {
      "kind": "union_",
      "value": {
        "typeParams": [], "fields": [{
          "annotations": [], "serializedName": "error",
          "default": { "kind": "nothing" }, "name": "error",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Void"
            }, "parameters": []
          }
        }, {
          "annotations": [], "serializedName": "warn",
          "default": { "kind": "nothing" }, "name": "warn",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Void"
            }, "parameters": []
          }
        }, {
          "annotations": [], "serializedName": "info",
          "default": { "kind": "nothing" }, "name": "info",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Void"
            }, "parameters": []
          }
        }, {
          "annotations": [], "serializedName": "debug",
          "default": { "kind": "nothing" }, "name": "debug",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Void"
            }, "parameters": []
          }
        }, {
          "annotations": [], "serializedName": "trace",
          "default": { "kind": "nothing" }, "name": "trace",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Void"
            }, "parameters": []
          }
        }]
      }
    }, "name": "LogLevel",
    "version": { "kind": "nothing" }
  }
};

export const snLogLevel: ADL.ScopedName = { moduleName: "config", name: "LogLevel" };

export function texprLogLevel(): ADL.ATypeExpr<LogLevel> {
  return { value: { typeRef: { kind: "reference", value: snLogLevel }, parameters: [] } };
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "config.ServerConfig": ServerConfig_AST,
  "config.Protocol": Protocol_AST,
  "config.SslConfiguration": SslConfiguration_AST,
  "config.FilePath": FilePath_AST,
  "config.LogLevel": LogLevel_AST
};
