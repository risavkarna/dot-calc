{-# LANGUAGE OverloadedStrings #-}
module ADL.Demo.Model(
    Address(..),
    DbField,
    DbTable(..),
    User(..),
    mkAddress,
    mkDbTable,
    mkUser,
) where

import ADL.Core
import Control.Applicative( (<$>), (<*>), (<|>) )
import Prelude( ($) )
import qualified Data.Aeson as JS
import qualified Data.HashMap.Strict as HM
import qualified Data.Int
import qualified Data.Proxy
import qualified Data.Text as T
import qualified Prelude

data Address = Address
    { address_id :: Data.Int.Int32
    , address_details :: [T.Text]
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkAddress :: Data.Int.Int32 -> [T.Text] -> Address
mkAddress id details = Address id details

instance AdlValue Address where
    atype _ = "demo.model.Address"
    
    jsonGen = genObject
        [ genField "id" address_id
        , genField "details" address_details
        ]
    
    jsonParser = Address
        <$> parseField "id"
        <*> parseField "details"

type DbField = T.Text

data DbTable = DbTable
    { dbTable_tableName :: T.Text
    , dbTable_primaryKey :: [T.Text]
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkDbTable :: T.Text -> [T.Text] -> DbTable
mkDbTable tableName primaryKey = DbTable tableName primaryKey

instance AdlValue DbTable where
    atype _ = "demo.model.DbTable"
    
    jsonGen = genObject
        [ genField "tableName" dbTable_tableName
        , genField "primaryKey" dbTable_primaryKey
        ]
    
    jsonParser = DbTable
        <$> parseField "tableName"
        <*> parseField "primaryKey"

data User = User
    { user_email :: T.Text
    , user_fullName :: T.Text
    , user_hashedPassword :: T.Text
    , user_role :: T.Text
    , user_isAdmin :: Prelude.Bool
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkUser :: T.Text -> T.Text -> T.Text -> T.Text -> Prelude.Bool -> User
mkUser email fullName hashedPassword role isAdmin = User email fullName hashedPassword role isAdmin

instance AdlValue User where
    atype _ = "demo.model.User"
    
    jsonGen = genObject
        [ genField "email" user_email
        , genField "fullName" user_fullName
        , genField "hashedPassword" user_hashedPassword
        , genField "role" user_role
        , genField "isAdmin" user_isAdmin
        ]
    
    jsonParser = User
        <$> parseField "email"
        <*> parseField "fullName"
        <*> parseField "hashedPassword"
        <*> parseField "role"
        <*> parseField "isAdmin"