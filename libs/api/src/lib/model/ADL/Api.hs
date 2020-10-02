{-# LANGUAGE OverloadedStrings, ScopedTypeVariables #-}
module ADL.Api(
    Api(..),
    AppMessage(..),
    AppState(..),
    CreateUserReq(..),
    CreateUserResp(..),
    Email,
    EmailStruct(..),
    Empty(..),
    FilePath,
    HttpPost(..),
    HttpSecurity(..),
    Jwt,
    LogLevel(..),
    LoginReq(..),
    LoginResp(..),
    Message(..),
    NewMessageReq(..),
    Password,
    Protocol(..),
    RecentMessagesReq(..),
    ServerConfig(..),
    SslConfiguration(..),
    TimeStamp(..),
    TimeStampInts(..),
    UserId(..),
    mkApi,
    mkAppMessage,
    mkAppState,
    mkCreateUserReq,
    mkEmailStruct,
    mkEmpty,
    mkHttpPost,
    mkLoginReq,
    mkMessage,
    mkNewMessageReq,
    mkRecentMessagesReq,
    mkServerConfig,
    mkSslConfiguration,
    mkTimeStampInts,
) where

import ADL.Core
import Control.Applicative( (<$>), (<*>), (<|>) )
import Prelude( ($) )
import qualified ADL.Core.TypeToken
import qualified Data.Aeson as JS
import qualified Data.HashMap.Strict as HM
import qualified Data.Int
import qualified Data.Proxy
import qualified Data.Text as T
import qualified Prelude

data Api = Api
    { api_login :: (HttpPost LoginReq LoginResp)
    , api_recentMessages :: (HttpPost RecentMessagesReq [Message])
    , api_newMessage :: (HttpPost NewMessageReq Empty)
    , api_createUser :: (HttpPost CreateUserReq CreateUserResp)
    , api_ping :: (HttpPost Empty Empty)
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkApi ::  Api
mkApi  = Api (HttpPost "/login" HttpSecurity_public (ADL.Core.TypeToken.TypeToken) (ADL.Core.TypeToken.TypeToken)) (HttpPost "/recent-messages" HttpSecurity_token (ADL.Core.TypeToken.TypeToken) (ADL.Core.TypeToken.TypeToken)) (HttpPost "/new-message" HttpSecurity_token (ADL.Core.TypeToken.TypeToken) (ADL.Core.TypeToken.TypeToken)) (HttpPost "/create-user" HttpSecurity_adminToken (ADL.Core.TypeToken.TypeToken) (ADL.Core.TypeToken.TypeToken)) (HttpPost "/ping" HttpSecurity_public (ADL.Core.TypeToken.TypeToken) (ADL.Core.TypeToken.TypeToken))

instance AdlValue Api where
    atype _ = "api.Api"
    
    jsonGen = genObject
        [ genField "login" api_login
        , genField "recentMessages" api_recentMessages
        , genField "newMessage" api_newMessage
        , genField "createUser" api_createUser
        , genField "ping" api_ping
        ]
    
    jsonParser = Api
        <$> parseFieldDef "login" (HttpPost "/login" HttpSecurity_public (ADL.Core.TypeToken.TypeToken) (ADL.Core.TypeToken.TypeToken))
        <*> parseFieldDef "recentMessages" (HttpPost "/recent-messages" HttpSecurity_token (ADL.Core.TypeToken.TypeToken) (ADL.Core.TypeToken.TypeToken))
        <*> parseFieldDef "newMessage" (HttpPost "/new-message" HttpSecurity_token (ADL.Core.TypeToken.TypeToken) (ADL.Core.TypeToken.TypeToken))
        <*> parseFieldDef "createUser" (HttpPost "/create-user" HttpSecurity_adminToken (ADL.Core.TypeToken.TypeToken) (ADL.Core.TypeToken.TypeToken))
        <*> parseFieldDef "ping" (HttpPost "/ping" HttpSecurity_public (ADL.Core.TypeToken.TypeToken) (ADL.Core.TypeToken.TypeToken))

data AppMessage = AppMessage
    { appMessage_id :: T.Text
    , appMessage_appName :: T.Text
    , appMessage_state :: AppState
    , appMessage_postedBy :: Email
    , appMessage_postedAt :: TimeStamp
    , appMessage_body :: T.Text
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkAppMessage :: T.Text -> T.Text -> AppState -> Email -> TimeStamp -> T.Text -> AppMessage
mkAppMessage id appName state postedBy postedAt body = AppMessage id appName state postedBy postedAt body

instance AdlValue AppMessage where
    atype _ = "api.AppMessage"
    
    jsonGen = genObject
        [ genField "id" appMessage_id
        , genField "appName" appMessage_appName
        , genField "state" appMessage_state
        , genField "postedBy" appMessage_postedBy
        , genField "postedAt" appMessage_postedAt
        , genField "body" appMessage_body
        ]
    
    jsonParser = AppMessage
        <$> parseField "id"
        <*> parseField "appName"
        <*> parseField "state"
        <*> parseField "postedBy"
        <*> parseField "postedAt"
        <*> parseField "body"

data AppState = AppState
    { appState_server :: ServerConfig
    , appState_users :: [T.Text]
    , appState_messages :: [AppMessage]
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkAppState :: ServerConfig -> [T.Text] -> [AppMessage] -> AppState
mkAppState server users messages = AppState server users messages

instance AdlValue AppState where
    atype _ = "api.AppState"
    
    jsonGen = genObject
        [ genField "server" appState_server
        , genField "users" appState_users
        , genField "messages" appState_messages
        ]
    
    jsonParser = AppState
        <$> parseField "server"
        <*> parseField "users"
        <*> parseField "messages"

data CreateUserReq = CreateUserReq
    { cur_email :: Email
    , cur_password :: Password
    , cur_isAdmin :: Prelude.Bool
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkCreateUserReq :: Email -> Password -> Prelude.Bool -> CreateUserReq
mkCreateUserReq email password isAdmin = CreateUserReq email password isAdmin

instance AdlValue CreateUserReq where
    atype _ = "api.CreateUserReq"
    
    jsonGen = genObject
        [ genField "email" cur_email
        , genField "password" cur_password
        , genField "isAdmin" cur_isAdmin
        ]
    
    jsonParser = CreateUserReq
        <$> parseField "email"
        <*> parseField "password"
        <*> parseField "isAdmin"

data CreateUserResp
    = CUR_success UserId
    | CUR_duplicateEmail
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

instance AdlValue CreateUserResp where
    atype _ = "api.CreateUserResp"
    
    jsonGen = genUnion (\jv -> case jv of
        CUR_success v -> genUnionValue "success" v
        CUR_duplicateEmail -> genUnionVoid "duplicateEmail"
        )
    
    jsonParser = parseUnion $ \disc -> case disc of
        "success" ->  parseUnionValue CUR_success
        "duplicateEmail" -> parseUnionVoid CUR_duplicateEmail
        _ -> parseFail "expected a discriminator for CreateUserResp (success,duplicateEmail)" 

type Email = T.Text

data EmailStruct = EmailStruct
    { emailStruct_userid :: T.Text
    , emailStruct_org :: T.Text
    , emailStruct_full :: T.Text
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkEmailStruct :: T.Text -> T.Text -> T.Text -> EmailStruct
mkEmailStruct userid org full = EmailStruct userid org full

instance AdlValue EmailStruct where
    atype _ = "api.EmailStruct"
    
    jsonGen = genObject
        [ genField "userid" emailStruct_userid
        , genField "org" emailStruct_org
        , genField "full" emailStruct_full
        ]
    
    jsonParser = EmailStruct
        <$> parseField "userid"
        <*> parseField "org"
        <*> parseField "full"

data Empty = Empty
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkEmpty ::  Empty
mkEmpty  = Empty 

instance AdlValue Empty where
    atype _ = "api.Empty"
    
    jsonGen = genObject []
    jsonParser = Prelude.pure Empty

type FilePath = T.Text

data HttpPost i o = HttpPost
    { httpPost_path :: T.Text
    , httpPost_security :: HttpSecurity
    , httpPost_reqType :: (ADL.Core.TypeToken.TypeToken i)
    , httpPost_respType :: (ADL.Core.TypeToken.TypeToken o)
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkHttpPost :: T.Text -> HttpSecurity -> HttpPost i o
mkHttpPost path security = HttpPost path security (ADL.Core.TypeToken.TypeToken) (ADL.Core.TypeToken.TypeToken)

instance (AdlValue i, AdlValue o) => AdlValue (HttpPost i o) where
    atype _ = T.concat
        [ "api.HttpPost"
        , "<", atype (Data.Proxy.Proxy :: Data.Proxy.Proxy i)
        , ",", atype (Data.Proxy.Proxy :: Data.Proxy.Proxy o)
        , ">" ]
    
    jsonGen = genObject
        [ genField "path" httpPost_path
        , genField "security" httpPost_security
        , genField "reqType" httpPost_reqType
        , genField "respType" httpPost_respType
        ]
    
    jsonParser = HttpPost
        <$> parseField "path"
        <*> parseField "security"
        <*> parseFieldDef "reqType" (ADL.Core.TypeToken.TypeToken)
        <*> parseFieldDef "respType" (ADL.Core.TypeToken.TypeToken)

data HttpSecurity
    = HttpSecurity_public
    | HttpSecurity_token
    | HttpSecurity_adminToken
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

instance AdlValue HttpSecurity where
    atype _ = "api.HttpSecurity"
    
    jsonGen = genUnion (\jv -> case jv of
        HttpSecurity_public -> genUnionVoid "public"
        HttpSecurity_token -> genUnionVoid "token"
        HttpSecurity_adminToken -> genUnionVoid "adminToken"
        )
    
    jsonParser = parseUnion $ \disc -> case disc of
        "public" -> parseUnionVoid HttpSecurity_public
        "token" -> parseUnionVoid HttpSecurity_token
        "adminToken" -> parseUnionVoid HttpSecurity_adminToken
        _ -> parseFail "expected a discriminator for HttpSecurity (public,token,adminToken)" 

type Jwt = T.Text

data LogLevel
    = Log_error
    | Log_warn
    | Log_info
    | Log_debug
    | Log_trace
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

instance AdlValue LogLevel where
    atype _ = "api.LogLevel"
    
    jsonGen = genUnion (\jv -> case jv of
        Log_error -> genUnionVoid "error"
        Log_warn -> genUnionVoid "warn"
        Log_info -> genUnionVoid "info"
        Log_debug -> genUnionVoid "debug"
        Log_trace -> genUnionVoid "trace"
        )
    
    jsonParser = parseUnion $ \disc -> case disc of
        "error" -> parseUnionVoid Log_error
        "warn" -> parseUnionVoid Log_warn
        "info" -> parseUnionVoid Log_info
        "debug" -> parseUnionVoid Log_debug
        "trace" -> parseUnionVoid Log_trace
        _ -> parseFail "expected a discriminator for LogLevel (error,warn,info,debug,trace)" 

data LoginReq = LoginReq
    { lr_email :: Email
    , lr_password :: T.Text
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkLoginReq :: Email -> T.Text -> LoginReq
mkLoginReq email password = LoginReq email password

instance AdlValue LoginReq where
    atype _ = "api.LoginReq"
    
    jsonGen = genObject
        [ genField "email" lr_email
        , genField "password" lr_password
        ]
    
    jsonParser = LoginReq
        <$> parseField "email"
        <*> parseField "password"

data LoginResp
    = LR_success Jwt
    | LR_failure
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

instance AdlValue LoginResp where
    atype _ = "api.LoginResp"
    
    jsonGen = genUnion (\jv -> case jv of
        LR_success v -> genUnionValue "success" v
        LR_failure -> genUnionVoid "failure"
        )
    
    jsonParser = parseUnion $ \disc -> case disc of
        "success" ->  parseUnionValue LR_success
        "failure" -> parseUnionVoid LR_failure
        _ -> parseFail "expected a discriminator for LoginResp (success,failure)" 

data Message = Message
    { m_id :: T.Text
    , m_postedBy :: Email
    , m_postedAt :: TimeStamp
    , m_body :: T.Text
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkMessage :: T.Text -> Email -> TimeStamp -> T.Text -> Message
mkMessage id postedBy postedAt body = Message id postedBy postedAt body

instance AdlValue Message where
    atype _ = "api.Message"
    
    jsonGen = genObject
        [ genField "id" m_id
        , genField "postedBy" m_postedBy
        , genField "postedAt" m_postedAt
        , genField "body" m_body
        ]
    
    jsonParser = Message
        <$> parseField "id"
        <*> parseField "postedBy"
        <*> parseField "postedAt"
        <*> parseField "body"

data NewMessageReq = NewMessageReq
    { nmr_body :: T.Text
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkNewMessageReq :: T.Text -> NewMessageReq
mkNewMessageReq body = NewMessageReq body

instance AdlValue NewMessageReq where
    atype _ = "api.NewMessageReq"
    
    jsonGen = genObject
        [ genField "body" nmr_body
        ]
    
    jsonParser = NewMessageReq
        <$> parseField "body"

type Password = T.Text

data Protocol
    = P_http
    | P_https SslConfiguration
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

instance AdlValue Protocol where
    atype _ = "api.Protocol"
    
    jsonGen = genUnion (\jv -> case jv of
        P_http -> genUnionVoid "http"
        P_https v -> genUnionValue "https" v
        )
    
    jsonParser = parseUnion $ \disc -> case disc of
        "http" -> parseUnionVoid P_http
        "https" ->  parseUnionValue P_https
        _ -> parseFail "expected a discriminator for Protocol (http,https)" 

data RecentMessagesReq = RecentMessagesReq
    { rmr_maxMessages :: Data.Int.Int32
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkRecentMessagesReq :: Data.Int.Int32 -> RecentMessagesReq
mkRecentMessagesReq maxMessages = RecentMessagesReq maxMessages

instance AdlValue RecentMessagesReq where
    atype _ = "api.RecentMessagesReq"
    
    jsonGen = genObject
        [ genField "maxMessages" rmr_maxMessages
        ]
    
    jsonParser = RecentMessagesReq
        <$> parseField "maxMessages"

data ServerConfig = ServerConfig
    { sc_port :: Data.Int.Int32
    , sc_jwtSecret :: T.Text
    , sc_protocol :: Protocol
    , sc_logLevel :: LogLevel
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkServerConfig :: T.Text -> ServerConfig
mkServerConfig jwtSecret = ServerConfig 8080 jwtSecret P_http Log_info

instance AdlValue ServerConfig where
    atype _ = "api.ServerConfig"
    
    jsonGen = genObject
        [ genField "port" sc_port
        , genField "jwtSecret" sc_jwtSecret
        , genField "protocol" sc_protocol
        , genField "logLevel" sc_logLevel
        ]
    
    jsonParser = ServerConfig
        <$> parseFieldDef "port" 8080
        <*> parseField "jwtSecret"
        <*> parseFieldDef "protocol" P_http
        <*> parseFieldDef "logLevel" Log_info

data SslConfiguration = SslConfiguration
    { ssl_certificate :: FilePath
    , ssl_certificateKey :: FilePath
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkSslConfiguration :: FilePath -> FilePath -> SslConfiguration
mkSslConfiguration certificate certificateKey = SslConfiguration certificate certificateKey

instance AdlValue SslConfiguration where
    atype _ = "api.SslConfiguration"
    
    jsonGen = genObject
        [ genField "certificate" ssl_certificate
        , genField "certificateKey" ssl_certificateKey
        ]
    
    jsonParser = SslConfiguration
        <$> parseField "certificate"
        <*> parseField "certificateKey"

newtype TimeStamp = TimeStamp { unTimeStamp :: T.Text }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

instance AdlValue TimeStamp where
    atype _ = "api.TimeStamp"
    
    jsonGen = JsonGen (\(TimeStamp v) -> adlToJson v)
    
    jsonParser = TimeStamp <$> jsonParser

data TimeStampInts = TimeStampInts
    { timeStampInts_hh :: Data.Int.Int32
    , timeStampInts_mm :: Data.Int.Int32
    , timeStampInts_ss :: Data.Int.Int32
    , timeStampInts_ms :: Data.Int.Int32
    , timeStampInts_us :: Data.Int.Int32
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkTimeStampInts :: Data.Int.Int32 -> Data.Int.Int32 -> Data.Int.Int32 -> Data.Int.Int32 -> Data.Int.Int32 -> TimeStampInts
mkTimeStampInts hh mm ss ms us = TimeStampInts hh mm ss ms us

instance AdlValue TimeStampInts where
    atype _ = "api.TimeStampInts"
    
    jsonGen = genObject
        [ genField "hh" timeStampInts_hh
        , genField "mm" timeStampInts_mm
        , genField "ss" timeStampInts_ss
        , genField "ms" timeStampInts_ms
        , genField "us" timeStampInts_us
        ]
    
    jsonParser = TimeStampInts
        <$> parseField "hh"
        <*> parseField "mm"
        <*> parseField "ss"
        <*> parseField "ms"
        <*> parseField "us"

newtype UserId = UserId { unUserId :: T.Text }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

instance AdlValue UserId where
    atype _ = "api.UserId"
    
    jsonGen = JsonGen (\(UserId v) -> adlToJson v)
    
    jsonParser = UserId <$> jsonParser