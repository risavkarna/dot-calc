/* @generated from adl module api */

import * as ADL from '../ts/rt/adl';

export interface EmailStruct {
  userid: string;
  org: string;
  full: string;
}

export function makeEmailStruct(
  input: {
    userid: string,
    org: string,
    full: string,
  }
): EmailStruct {
  return {
    userid: input.userid,
    org: input.org,
    full: input.full,
  };
}

const EmailStruct_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "struct_",
      "value": {
        "typeParams": [],
        "fields": [{
          "annotations": [],
          "serializedName": "userid",
          "default": {
            "kind": "nothing"
          },
          "name": "userid",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "String"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "org",
          "default": {
            "kind": "nothing"
          },
          "name": "org",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "String"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "full",
          "default": {
            "kind": "nothing"
          },
          "name": "full",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "String"
            },
            "parameters": []
          }
        }]
      }
    },
    "name": "EmailStruct",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snEmailStruct: ADL.ScopedName = { moduleName: "api", name: "EmailStruct" };

export function texprEmailStruct(): ADL.ATypeExpr<EmailStruct> {
  return { value: { typeRef: { kind: "reference", value: snEmailStruct }, parameters: [] } };
}

// tslint:disable-next-line: no-empty-interface
export interface Empty {
}

export function makeEmpty(
  _input: {
  }
): Empty {
  return {
  };
}

const Empty_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "struct_",
      "value": {
        "typeParams": [],
        "fields": []
      }
    },
    "name": "Empty",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snEmpty: ADL.ScopedName = { moduleName: "api", name: "Empty" };

export function texprEmpty(): ADL.ATypeExpr<Empty> {
  return { value: { typeRef: { kind: "reference", value: snEmpty }, parameters: [] } };
}

export interface TimeStampInts {
  hh: number;
  mm: number;
  ss: number;
  ms: number;
  us: number;
}

export function makeTimeStampInts(
  input: {
    hh: number,
    mm: number,
    ss: number,
    ms: number,
    us: number,
  }
): TimeStampInts {
  return {
    hh: input.hh,
    mm: input.mm,
    ss: input.ss,
    ms: input.ms,
    us: input.us,
  };
}

const TimeStampInts_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "struct_",
      "value": {
        "typeParams": [],
        "fields": [{
          "annotations": [],
          "serializedName": "hh",
          "default": {
            "kind": "nothing"
          },
          "name": "hh",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Int32"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "mm",
          "default": {
            "kind": "nothing"
          },
          "name": "mm",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Int32"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "ss",
          "default": {
            "kind": "nothing"
          },
          "name": "ss",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Int32"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "ms",
          "default": {
            "kind": "nothing"
          },
          "name": "ms",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Int32"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "us",
          "default": {
            "kind": "nothing"
          },
          "name": "us",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Int32"
            },
            "parameters": []
          }
        }]
      }
    },
    "name": "TimeStampInts",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snTimeStampInts: ADL.ScopedName = { moduleName: "api", name: "TimeStampInts" };

export function texprTimeStampInts(): ADL.ATypeExpr<TimeStampInts> {
  return { value: { typeRef: { kind: "reference", value: snTimeStampInts }, parameters: [] } };
}

export type Jwt = string;

const Jwt_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "type_",
      "value": {
        "typeParams": [],
        "typeExpr": {
          "typeRef": {
            "kind": "primitive",
            "value": "String"
          },
          "parameters": []
        }
      }
    },
    "name": "Jwt",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snJwt: ADL.ScopedName = { moduleName: "api", name: "Jwt" };

export function texprJwt(): ADL.ATypeExpr<Jwt> {
  return { value: { typeRef: { kind: "reference", value: snJwt }, parameters: [] } };
}

export type Email = string;

const Email_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "type_",
      "value": {
        "typeParams": [],
        "typeExpr": {
          "typeRef": {
            "kind": "primitive",
            "value": "String"
          },
          "parameters": []
        }
      }
    },
    "name": "Email",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snEmail: ADL.ScopedName = { moduleName: "api", name: "Email" };

export function texprEmail(): ADL.ATypeExpr<Email> {
  return { value: { typeRef: { kind: "reference", value: snEmail }, parameters: [] } };
}

export type Password = string;

const Password_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "type_",
      "value": {
        "typeParams": [],
        "typeExpr": {
          "typeRef": {
            "kind": "primitive",
            "value": "String"
          },
          "parameters": []
        }
      }
    },
    "name": "Password",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snPassword: ADL.ScopedName = { moduleName: "api", name: "Password" };

export function texprPassword(): ADL.ATypeExpr<Password> {
  return { value: { typeRef: { kind: "reference", value: snPassword }, parameters: [] } };
}

export type UserId = string;

const UserId_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "newtype_",
      "value": {
        "typeParams": [],
        "default": {
          "kind": "nothing"
        },
        "typeExpr": {
          "typeRef": {
            "kind": "primitive",
            "value": "String"
          },
          "parameters": []
        }
      }
    },
    "name": "UserId",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snUserId: ADL.ScopedName = { moduleName: "api", name: "UserId" };

export function texprUserId(): ADL.ATypeExpr<UserId> {
  return { value: { typeRef: { kind: "reference", value: snUserId }, parameters: [] } };
}

export type TimeStamp = string;

const TimeStamp_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "newtype_",
      "value": {
        "typeParams": [],
        "default": {
          "kind": "nothing"
        },
        "typeExpr": {
          "typeRef": {
            "kind": "primitive",
            "value": "String"
          },
          "parameters": []
        }
      }
    },
    "name": "TimeStamp",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snTimeStamp: ADL.ScopedName = { moduleName: "api", name: "TimeStamp" };

export function texprTimeStamp(): ADL.ATypeExpr<TimeStamp> {
  return { value: { typeRef: { kind: "reference", value: snTimeStamp }, parameters: [] } };
}

export interface HttpPost<I, O> {
  path: string;
  security: HttpSecurity;
  reqType: ADL.ATypeExpr<I>;
  respType: ADL.ATypeExpr<O>;
}

const HttpPost_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "struct_",
      "value": {
        "typeParams": ["I",
          "O"],
        "fields": [{
          "annotations": [],
          "serializedName": "path",
          "default": {
            "kind": "nothing"
          },
          "name": "path",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "String"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "security",
          "default": {
            "kind": "nothing"
          },
          "name": "security",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "HttpSecurity"
              }
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "reqType",
          "default": {
            "kind": "just",
            "value": null
          },
          "name": "reqType",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "TypeToken"
            },
            "parameters": [{
              "typeRef": {
                "kind": "typeParam",
                "value": "I"
              },
              "parameters": []
            }]
          }
        }, {
          "annotations": [],
          "serializedName": "respType",
          "default": {
            "kind": "just",
            "value": null
          },
          "name": "respType",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "TypeToken"
            },
            "parameters": [{
              "typeRef": {
                "kind": "typeParam",
                "value": "O"
              },
              "parameters": []
            }]
          }
        }]
      }
    },
    "name": "HttpPost",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snHttpPost: ADL.ScopedName = { moduleName: "api", name: "HttpPost" };

export function texprHttpPost<I, O>(texprI: ADL.ATypeExpr<I>, texprO: ADL.ATypeExpr<O>): ADL.ATypeExpr<HttpPost<I, O>> {
  return { value: { typeRef: { kind: "reference", value: { moduleName: "api", name: "HttpPost" } }, parameters: [texprI.value, texprO.value] } };
}

export enum HttpSecurity {
  public,
  token,
  adminToken,
}

const HttpSecurity_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "union_",
      "value": {
        "typeParams": [],
        "fields": [{
          "annotations": [],
          "serializedName": "public",
          "default": {
            "kind": "nothing"
          },
          "name": "public",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Void"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "token",
          "default": {
            "kind": "nothing"
          },
          "name": "token",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Void"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "adminToken",
          "default": {
            "kind": "nothing"
          },
          "name": "adminToken",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Void"
            },
            "parameters": []
          }
        }]
      }
    },
    "name": "HttpSecurity",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snHttpSecurity: ADL.ScopedName = { moduleName: "api", name: "HttpSecurity" };

export function texprHttpSecurity(): ADL.ATypeExpr<HttpSecurity> {
  return { value: { typeRef: { kind: "reference", value: snHttpSecurity }, parameters: [] } };
}

export interface Api {
  /**
   * Login to obtain an authorization token
   */
  login: HttpPost<LoginReq, LoginResp>;
  /**
   * Retrieve recent messages posted to the server
   */
  recentMessages: HttpPost<RecentMessagesReq, Message[]>;
  /**
   * Post a new message
   */
  newMessage: HttpPost<NewMessageReq, Empty>;
  /**
   * Create a new user, recording their hashed password
   */
  createUser: HttpPost<CreateUserReq, CreateUserResp>;
  /**
   * Trivial public method to test server liveness
   */
  ping: HttpPost<Empty, Empty>;
}

export function makeApi(
  input: {
    login?: HttpPost<LoginReq, LoginResp>,
    recentMessages?: HttpPost<RecentMessagesReq, Message[]>,
    newMessage?: HttpPost<NewMessageReq, Empty>,
    createUser?: HttpPost<CreateUserReq, CreateUserResp>,
    ping?: HttpPost<Empty, Empty>,
  }
): Api {
  return {
    login: input.login === undefined ? { path: "/login", security: 0, reqType: texprLoginReq(), respType: texprLoginResp() } : input.login,
    recentMessages: input.recentMessages === undefined ? { path: "/recent-messages", security: 1, reqType: texprRecentMessagesReq(), respType: ADL.texprVector(texprMessage()) } : input.recentMessages,
    newMessage: input.newMessage === undefined ? { path: "/new-message", security: 1, reqType: texprNewMessageReq(), respType: texprEmpty() } : input.newMessage,
    createUser: input.createUser === undefined ? { path: "/create-user", security: 2, reqType: texprCreateUserReq(), respType: texprCreateUserResp() } : input.createUser,
    ping: input.ping === undefined ? { path: "/ping", security: 0, reqType: texprEmpty(), respType: texprEmpty() } : input.ping,
  };
}

const Api_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "struct_",
      "value": {
        "typeParams": [],
        "fields": [{
          "annotations": [],
          "serializedName": "login",
          "default": {
            "kind": "just",
            "value": {
              "path": "/login",
              "security": "public"
            }
          },
          "name": "login",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "HttpPost"
              }
            },
            "parameters": [{
              "typeRef": {
                "kind": "reference",
                "value": {
                  "moduleName": "api",
                  "name": "LoginReq"
                }
              },
              "parameters": []
            }, {
              "typeRef": {
                "kind": "reference",
                "value": {
                  "moduleName": "api",
                  "name": "LoginResp"
                }
              },
              "parameters": []
            }]
          }
        }, {
          "annotations": [],
          "serializedName": "recentMessages",
          "default": {
            "kind": "just",
            "value": {
              "path": "/recent-messages",
              "security": "token"
            }
          },
          "name": "recentMessages",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "HttpPost"
              }
            },
            "parameters": [{
              "typeRef": {
                "kind": "reference",
                "value": {
                  "moduleName": "api",
                  "name": "RecentMessagesReq"
                }
              },
              "parameters": []
            }, {
              "typeRef": {
                "kind": "primitive",
                "value": "Vector"
              },
              "parameters": [{
                "typeRef": {
                  "kind": "reference",
                  "value": {
                    "moduleName": "api",
                    "name": "Message"
                  }
                },
                "parameters": []
              }]
            }]
          }
        }, {
          "annotations": [],
          "serializedName": "newMessage",
          "default": {
            "kind": "just",
            "value": {
              "path": "/new-message",
              "security": "token"
            }
          },
          "name": "newMessage",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "HttpPost"
              }
            },
            "parameters": [{
              "typeRef": {
                "kind": "reference",
                "value": {
                  "moduleName": "api",
                  "name": "NewMessageReq"
                }
              },
              "parameters": []
            }, {
              "typeRef": {
                "kind": "reference",
                "value": {
                  "moduleName": "api",
                  "name": "Empty"
                }
              },
              "parameters": []
            }]
          }
        }, {
          "annotations": [],
          "serializedName": "createUser",
          "default": {
            "kind": "just",
            "value": {
              "path": "/create-user",
              "security": "adminToken"
            }
          },
          "name": "createUser",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "HttpPost"
              }
            },
            "parameters": [{
              "typeRef": {
                "kind": "reference",
                "value": {
                  "moduleName": "api",
                  "name": "CreateUserReq"
                }
              },
              "parameters": []
            }, {
              "typeRef": {
                "kind": "reference",
                "value": {
                  "moduleName": "api",
                  "name": "CreateUserResp"
                }
              },
              "parameters": []
            }]
          }
        }, {
          "annotations": [],
          "serializedName": "ping",
          "default": {
            "kind": "just",
            "value": {
              "path": "/ping",
              "security": "public"
            }
          },
          "name": "ping",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "HttpPost"
              }
            },
            "parameters": [{
              "typeRef": {
                "kind": "reference",
                "value": {
                  "moduleName": "api",
                  "name": "Empty"
                }
              },
              "parameters": []
            }, {
              "typeRef": {
                "kind": "reference",
                "value": {
                  "moduleName": "api",
                  "name": "Empty"
                }
              },
              "parameters": []
            }]
          }
        }]
      }
    },
    "name": "Api",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snApi: ADL.ScopedName = { moduleName: "api", name: "Api" };

export function texprApi(): ADL.ATypeExpr<Api> {
  return { value: { typeRef: { kind: "reference", value: snApi }, parameters: [] } };
}

export interface LoginReq {
  email: Email;
  password: string;
}

export function makeLoginReq(
  input: {
    email: Email,
    password: string,
  }
): LoginReq {
  return {
    email: input.email,
    password: input.password,
  };
}

const LoginReq_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "struct_",
      "value": {
        "typeParams": [],
        "fields": [{
          "annotations": [],
          "serializedName": "email",
          "default": {
            "kind": "nothing"
          },
          "name": "email",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "Email"
              }
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "password",
          "default": {
            "kind": "nothing"
          },
          "name": "password",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "String"
            },
            "parameters": []
          }
        }]
      }
    },
    "name": "LoginReq",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snLoginReq: ADL.ScopedName = { moduleName: "api", name: "LoginReq" };

export function texprLoginReq(): ADL.ATypeExpr<LoginReq> {
  return { value: { typeRef: { kind: "reference", value: snLoginReq }, parameters: [] } };
}

export interface LoginRespSuccess {
  kind: 'success';
  value: Jwt;
}
export interface LoginRespFailure {
  kind: 'failure';
}

export type LoginResp = LoginRespSuccess | LoginRespFailure;

export interface LoginRespOpts {
  success: Jwt;
  failure: null;
}

export function makeLoginResp<K extends keyof LoginRespOpts>(kind: K, value: LoginRespOpts[K]) { return { kind, value }; }

const LoginResp_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "union_",
      "value": {
        "typeParams": [],
        "fields": [{
          "annotations": [],
          "serializedName": "success",
          "default": {
            "kind": "nothing"
          },
          "name": "success",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "Jwt"
              }
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "failure",
          "default": {
            "kind": "nothing"
          },
          "name": "failure",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Void"
            },
            "parameters": []
          }
        }]
      }
    },
    "name": "LoginResp",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snLoginResp: ADL.ScopedName = { moduleName: "api", name: "LoginResp" };

export function texprLoginResp(): ADL.ATypeExpr<LoginResp> {
  return { value: { typeRef: { kind: "reference", value: snLoginResp }, parameters: [] } };
}

export interface NewMessageReq {
  body: string;
}

export function makeNewMessageReq(
  input: {
    body: string,
  }
): NewMessageReq {
  return {
    body: input.body,
  };
}

const NewMessageReq_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "struct_",
      "value": {
        "typeParams": [],
        "fields": [{
          "annotations": [],
          "serializedName": "body",
          "default": {
            "kind": "nothing"
          },
          "name": "body",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "String"
            },
            "parameters": []
          }
        }]
      }
    },
    "name": "NewMessageReq",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snNewMessageReq: ADL.ScopedName = { moduleName: "api", name: "NewMessageReq" };

export function texprNewMessageReq(): ADL.ATypeExpr<NewMessageReq> {
  return { value: { typeRef: { kind: "reference", value: snNewMessageReq }, parameters: [] } };
}

export interface RecentMessagesReq {
  maxMessages: number;
}

export function makeRecentMessagesReq(
  input: {
    maxMessages: number,
  }
): RecentMessagesReq {
  return {
    maxMessages: input.maxMessages,
  };
}

const RecentMessagesReq_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "struct_",
      "value": {
        "typeParams": [],
        "fields": [{
          "annotations": [],
          "serializedName": "maxMessages",
          "default": {
            "kind": "nothing"
          },
          "name": "maxMessages",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Int32"
            },
            "parameters": []
          }
        }]
      }
    },
    "name": "RecentMessagesReq",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snRecentMessagesReq: ADL.ScopedName = { moduleName: "api", name: "RecentMessagesReq" };

export function texprRecentMessagesReq(): ADL.ATypeExpr<RecentMessagesReq> {
  return { value: { typeRef: { kind: "reference", value: snRecentMessagesReq }, parameters: [] } };
}

export interface CreateUserReq {
  email: Email;
  password: Password;
  isAdmin: boolean;
}

export function makeCreateUserReq(
  input: {
    email: Email,
    password: Password,
    isAdmin: boolean,
  }
): CreateUserReq {
  return {
    email: input.email,
    password: input.password,
    isAdmin: input.isAdmin,
  };
}

const CreateUserReq_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "struct_",
      "value": {
        "typeParams": [],
        "fields": [{
          "annotations": [],
          "serializedName": "email",
          "default": {
            "kind": "nothing"
          },
          "name": "email",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "Email"
              }
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "password",
          "default": {
            "kind": "nothing"
          },
          "name": "password",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "Password"
              }
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "isAdmin",
          "default": {
            "kind": "nothing"
          },
          "name": "isAdmin",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Bool"
            },
            "parameters": []
          }
        }]
      }
    },
    "name": "CreateUserReq",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snCreateUserReq: ADL.ScopedName = { moduleName: "api", name: "CreateUserReq" };

export function texprCreateUserReq(): ADL.ATypeExpr<CreateUserReq> {
  return { value: { typeRef: { kind: "reference", value: snCreateUserReq }, parameters: [] } };
}

export interface CreateUserRespSuccess {
  kind: 'success';
  value: UserId;
}
export interface CreateUserRespDuplicateEmail {
  kind: 'duplicateEmail';
}

export type CreateUserResp = CreateUserRespSuccess | CreateUserRespDuplicateEmail;

export interface CreateUserRespOpts {
  success: UserId;
  duplicateEmail: null;
}

export function makeCreateUserResp<K extends keyof CreateUserRespOpts>(kind: K, value: CreateUserRespOpts[K]) { return { kind, value }; }

const CreateUserResp_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "union_",
      "value": {
        "typeParams": [],
        "fields": [{
          "annotations": [],
          "serializedName": "success",
          "default": {
            "kind": "nothing"
          },
          "name": "success",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "UserId"
              }
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "duplicateEmail",
          "default": {
            "kind": "nothing"
          },
          "name": "duplicateEmail",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Void"
            },
            "parameters": []
          }
        }]
      }
    },
    "name": "CreateUserResp",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snCreateUserResp: ADL.ScopedName = { moduleName: "api", name: "CreateUserResp" };

export function texprCreateUserResp(): ADL.ATypeExpr<CreateUserResp> {
  return { value: { typeRef: { kind: "reference", value: snCreateUserResp }, parameters: [] } };
}

export interface Message {
  id: string;
  postedBy: Email;
  postedAt: TimeStamp;
  body: string;
}

export function makeMessage(
  input: {
    id: string,
    postedBy: Email,
    postedAt: TimeStamp,
    body: string,
  }
): Message {
  return {
    id: input.id,
    postedBy: input.postedBy,
    postedAt: input.postedAt,
    body: input.body,
  };
}

const Message_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "struct_",
      "value": {
        "typeParams": [],
        "fields": [{
          "annotations": [],
          "serializedName": "id",
          "default": {
            "kind": "nothing"
          },
          "name": "id",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "String"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "postedBy",
          "default": {
            "kind": "nothing"
          },
          "name": "postedBy",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "Email"
              }
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "postedAt",
          "default": {
            "kind": "nothing"
          },
          "name": "postedAt",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "TimeStamp"
              }
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "body",
          "default": {
            "kind": "nothing"
          },
          "name": "body",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "String"
            },
            "parameters": []
          }
        }]
      }
    },
    "name": "Message",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snMessage: ADL.ScopedName = { moduleName: "api", name: "Message" };

export function texprMessage(): ADL.ATypeExpr<Message> {
  return { value: { typeRef: { kind: "reference", value: snMessage }, parameters: [] } };
}

export type FilePath = string;

const FilePath_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "type_",
      "value": {
        "typeParams": [],
        "typeExpr": {
          "typeRef": {
            "kind": "primitive",
            "value": "String"
          },
          "parameters": []
        }
      }
    },
    "name": "FilePath",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snFilePath: ADL.ScopedName = { moduleName: "api", name: "FilePath" };

export function texprFilePath(): ADL.ATypeExpr<FilePath> {
  return { value: { typeRef: { kind: "reference", value: snFilePath }, parameters: [] } };
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
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "struct_",
      "value": {
        "typeParams": [],
        "fields": [{
          "annotations": [],
          "serializedName": "certificate",
          "default": {
            "kind": "nothing"
          },
          "name": "certificate",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "FilePath"
              }
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "certificateKey",
          "default": {
            "kind": "nothing"
          },
          "name": "certificateKey",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "FilePath"
              }
            },
            "parameters": []
          }
        }]
      }
    },
    "name": "SslConfiguration",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snSslConfiguration: ADL.ScopedName = { moduleName: "api", name: "SslConfiguration" };

export function texprSslConfiguration(): ADL.ATypeExpr<SslConfiguration> {
  return { value: { typeRef: { kind: "reference", value: snSslConfiguration }, parameters: [] } };
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
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "union_",
      "value": {
        "typeParams": [],
        "fields": [{
          "annotations": [],
          "serializedName": "http",
          "default": {
            "kind": "nothing"
          },
          "name": "http",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Void"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "https",
          "default": {
            "kind": "nothing"
          },
          "name": "https",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "SslConfiguration"
              }
            },
            "parameters": []
          }
        }]
      }
    },
    "name": "Protocol",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snProtocol: ADL.ScopedName = { moduleName: "api", name: "Protocol" };

export function texprProtocol(): ADL.ATypeExpr<Protocol> {
  return { value: { typeRef: { kind: "reference", value: snProtocol }, parameters: [] } };
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
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "union_",
      "value": {
        "typeParams": [],
        "fields": [{
          "annotations": [],
          "serializedName": "error",
          "default": {
            "kind": "nothing"
          },
          "name": "error",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Void"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "warn",
          "default": {
            "kind": "nothing"
          },
          "name": "warn",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Void"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "info",
          "default": {
            "kind": "nothing"
          },
          "name": "info",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Void"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "debug",
          "default": {
            "kind": "nothing"
          },
          "name": "debug",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Void"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "trace",
          "default": {
            "kind": "nothing"
          },
          "name": "trace",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Void"
            },
            "parameters": []
          }
        }]
      }
    },
    "name": "LogLevel",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snLogLevel: ADL.ScopedName = { moduleName: "api", name: "LogLevel" };

export function texprLogLevel(): ADL.ATypeExpr<LogLevel> {
  return { value: { typeRef: { kind: "reference", value: snLogLevel }, parameters: [] } };
}

/**
 * The schema for the server's YAML configuration file
 */
export interface ServerConfig {
  /**
   * The port which accepts http connections
   */
  port: number;
  /**
   * The secret used to sign the server's json web tokens
   */
  jwtSecret: string;
  protocol: Protocol;
  logLevel: LogLevel;
}

export function makeServerConfig(
  input: {
    port?: number,
    jwtSecret: string,
    protocol?: Protocol,
    logLevel?: LogLevel,
  }
): ServerConfig {
  return {
    port: input.port === undefined ? 8080 : input.port,
    jwtSecret: input.jwtSecret,
    protocol: input.protocol === undefined ? { kind: "http" } : input.protocol,
    logLevel: input.logLevel === undefined ? 2 : input.logLevel,
  };
}

const ServerConfig_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "struct_",
      "value": {
        "typeParams": [],
        "fields": [{
          "annotations": [],
          "serializedName": "port",
          "default": {
            "kind": "just",
            "value": 8080
          },
          "name": "port",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Int32"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "jwtSecret",
          "default": {
            "kind": "nothing"
          },
          "name": "jwtSecret",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "String"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "protocol",
          "default": {
            "kind": "just",
            "value": "http"
          },
          "name": "protocol",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "Protocol"
              }
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "logLevel",
          "default": {
            "kind": "just",
            "value": "info"
          },
          "name": "logLevel",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "LogLevel"
              }
            },
            "parameters": []
          }
        }]
      }
    },
    "name": "ServerConfig",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snServerConfig: ADL.ScopedName = { moduleName: "api", name: "ServerConfig" };

export function texprServerConfig(): ADL.ATypeExpr<ServerConfig> {
  return { value: { typeRef: { kind: "reference", value: snServerConfig }, parameters: [] } };
}

export interface AppMessage {
  id: string;
  appName: string;
  state: AppState;
  postedBy: Email;
  postedAt: TimeStamp;
  body: string;
}

export function makeAppMessage(
  input: {
    id: string,
    appName: string,
    state: AppState,
    postedBy: Email,
    postedAt: TimeStamp,
    body: string,
  }
): AppMessage {
  return {
    id: input.id,
    appName: input.appName,
    state: input.state,
    postedBy: input.postedBy,
    postedAt: input.postedAt,
    body: input.body,
  };
}

const AppMessage_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "struct_",
      "value": {
        "typeParams": [],
        "fields": [{
          "annotations": [],
          "serializedName": "id",
          "default": {
            "kind": "nothing"
          },
          "name": "id",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "String"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "appName",
          "default": {
            "kind": "nothing"
          },
          "name": "appName",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "String"
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "state",
          "default": {
            "kind": "nothing"
          },
          "name": "state",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "AppState"
              }
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "postedBy",
          "default": {
            "kind": "nothing"
          },
          "name": "postedBy",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "Email"
              }
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "postedAt",
          "default": {
            "kind": "nothing"
          },
          "name": "postedAt",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "TimeStamp"
              }
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "body",
          "default": {
            "kind": "nothing"
          },
          "name": "body",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "String"
            },
            "parameters": []
          }
        }]
      }
    },
    "name": "AppMessage",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snAppMessage: ADL.ScopedName = { moduleName: "api", name: "AppMessage" };

export function texprAppMessage(): ADL.ATypeExpr<AppMessage> {
  return { value: { typeRef: { kind: "reference", value: snAppMessage }, parameters: [] } };
}

export interface AppState {
  server: ServerConfig;
  users: string[];
  messages: AppMessage[];
}

export function makeAppState(
  input: {
    server: ServerConfig,
    users: string[],
    messages: AppMessage[],
  }
): AppState {
  return {
    server: input.server,
    users: input.users,
    messages: input.messages,
  };
}

const AppState_AST: ADL.ScopedDecl =
{
  "moduleName": "api",
  "decl": {
    "annotations": [],
    "type_": {
      "kind": "struct_",
      "value": {
        "typeParams": [],
        "fields": [{
          "annotations": [],
          "serializedName": "server",
          "default": {
            "kind": "nothing"
          },
          "name": "server",
          "typeExpr": {
            "typeRef": {
              "kind": "reference",
              "value": {
                "moduleName": "api",
                "name": "ServerConfig"
              }
            },
            "parameters": []
          }
        }, {
          "annotations": [],
          "serializedName": "users",
          "default": {
            "kind": "nothing"
          },
          "name": "users",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Vector"
            },
            "parameters": [{
              "typeRef": {
                "kind": "primitive",
                "value": "String"
              },
              "parameters": []
            }]
          }
        }, {
          "annotations": [],
          "serializedName": "messages",
          "default": {
            "kind": "nothing"
          },
          "name": "messages",
          "typeExpr": {
            "typeRef": {
              "kind": "primitive",
              "value": "Vector"
            },
            "parameters": [{
              "typeRef": {
                "kind": "reference",
                "value": {
                  "moduleName": "api",
                  "name": "AppMessage"
                }
              },
              "parameters": []
            }]
          }
        }]
      }
    },
    "name": "AppState",
    "version": {
      "kind": "nothing"
    }
  }
};

export const snAppState: ADL.ScopedName = { moduleName: "api", name: "AppState" };

export function texprAppState(): ADL.ATypeExpr<AppState> {
  return { value: { typeRef: { kind: "reference", value: snAppState }, parameters: [] } };
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "api.EmailStruct": EmailStruct_AST,
  "api.Empty": Empty_AST,
  "api.TimeStampInts": TimeStampInts_AST,
  "api.Jwt": Jwt_AST,
  "api.Email": Email_AST,
  "api.Password": Password_AST,
  "api.UserId": UserId_AST,
  "api.TimeStamp": TimeStamp_AST,
  "api.HttpPost": HttpPost_AST,
  "api.HttpSecurity": HttpSecurity_AST,
  "api.Api": Api_AST,
  "api.LoginReq": LoginReq_AST,
  "api.LoginResp": LoginResp_AST,
  "api.NewMessageReq": NewMessageReq_AST,
  "api.RecentMessagesReq": RecentMessagesReq_AST,
  "api.CreateUserReq": CreateUserReq_AST,
  "api.CreateUserResp": CreateUserResp_AST,
  "api.Message": Message_AST,
  "api.FilePath": FilePath_AST,
  "api.SslConfiguration": SslConfiguration_AST,
  "api.Protocol": Protocol_AST,
  "api.LogLevel": LogLevel_AST,
  "api.ServerConfig": ServerConfig_AST,
  "api.AppMessage": AppMessage_AST,
  "api.AppState": AppState_AST
};
